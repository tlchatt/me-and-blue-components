import React, { useState, useEffect, useRef } from 'react';
const TWNavItem = ({ navEntry, subNavEntries, appearance, navLayout }) => {
  //console.log('navEntry', navEntry , '\n') 

  const [subNavOpen, setSubNavOpen] = useState(false);
  function toggleSubNavOpen() {
    setSubNavOpen(!subNavOpen)
  }
  let refSubNav = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (subNavOpen && refSubNav.current && refSubNav.current.contains(event.target)) {
        setSubNavOpen(false);
        console.log(`window location ${window.location}`)
        window.location.href = event.target

      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler)
    };
  }, [subNavOpen]);
  const onMouseEnter = () => {
    window.innerWidth > 960 && setSubNavOpen(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setSubNavOpen(false);
  };
  let bgColor = appearance?.Nav?.scheme === "secondary" ? appearance.colorSchemes.SecondaryBackground : appearance?.Nav?.scheme === "tertiary" ? appearance.colorSchemes.TertiaryBackground : appearance.colorSchemes.PrimaryBackground
  let textColor = appearance?.Nav?.scheme === "secondary" ? appearance.colorSchemes.SecondaryForeground : appearance?.Nav?.scheme === "tertiary" ? appearance.colorSchemes.TertiaryForeground : appearance.colorSchemes.PrimaryForeground
  let borderColor = appearance?.Nav?.scheme === "secondary" ? appearance.colorSchemes.SecondaryForeground : appearance?.Nav?.scheme === "tertiary" ? appearance.colorSchemes.TertiaryForeground : appearance.colorSchemes.PrimaryForeground

    /*
    * TODO: Consider if additional options from props are neccsarry, if not remove. 
    *
    */
  let borderStyle = appearance?.Nav?.border == "yes" ? "solid" : "none"
  let borderTop = appearance?.Nav?.border == "yes" ? "0px" : ""
  let borderThickness = appearance?.Nav?.border == "yes" ? "2px" : "0px"
  if ((navEntry.json.Settings.type === "link" && navEntry.json.Settings.type) || (navEntry.json.Settings.type == "page" && navEntry.json.Settings.type)) {
    if (navEntry.json.Settings.Title && navEntry.json.Settings.sub_nav_entries && navEntry.json.Settings.sub_nav_entries.length > 0) { //Has Sub Nav Entries
      return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="group w-full relative" id="divOusideButton" >
          <button aria-expanded={subNavOpen ? "true" : "false"} onClick={() => setSubNavOpen((prev) => !prev)}
            className='button border-2 font-medium text-lg border-${borderStyle} border-${borderThickness} font-semibold py-2 px-4 w-full'
            style={{ borderStyle: borderStyle, borderWidth: borderThickness, backgroundColor: bgColor, borderColor: borderColor }}>
            <a className={`relative`} style={{ color: textColor, pointerEvents: 'none', cursor: 'default' }}>{navEntry.json.Settings.Title}</a>
            <svg
              className="w-5 lg:h-6 md:h-6 md:w-6 mx-2 fill-current sm:h-4 sm:w-4 inline-grid "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fill={textColor} d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>

          </button>
          <div className={` ${subNavOpen ? "block" : "hidden"}`} id="divAboveSubnavdiv" ref={refSubNav}>
            <div className={`"md:group-hover:block text-center w-full lg:absolute md:relative border-r-2 border-l-2 border-b-2"`} id="mdShowSubNavs" style={{ borderColor: borderColor, borderStyle: borderStyle, borderWidth: borderThickness, borderTop: borderTop }} >
              <li className='grid font-normal text-md' style={{ backgroundColor: bgColor }}>
                {navEntry.sub_nav_entries.map((entry, index) => (
                  <a key={index} href={entry.url} style={{ color: textColor }} className='p-2 cursor-pointer' >
                    {entry.Title}
                    {/* TODO: this will change test with a sub nav entry */}
                  </a>
                ))}
              </li>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="group relative" >
          
          <button className="button border-2 font-medium text-lg border-${borderStyle} border-${borderThickness} font-semibold py-2 px-4 w-full"
            style={{ borderStyle: borderStyle, borderWidth: borderThickness, backgroundColor: bgColor, borderColor: borderColor }}>
            <a className='relative text-xl' href={navEntry.url} style={{ color: textColor }}>{navEntry.json.Settings.Title}</a>
          </button>
        </div>
      )
    }
  }
  return null
}
export const SubNavs = ({ entry, index }) => {

  return (
    <a key={index} href={entry.url} style={{ color: textColor }} className='p-2 cursor-pointer font-bold h' >
      {entry.Title}
    </a>
  )
}
export default TWNavItem;
