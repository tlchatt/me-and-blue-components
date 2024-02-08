import TWNavItem from './TWNavItem';
import FooterNav from "../nav/FooterNav";
import Image from "next/image"
import { Colors, hexToRGB } from '@/lib/colors.js'
const TWNav = ({ navEntries, subNavEntries, branding, appearance, navLayout }) => {
  const toggleMobileMenu = () => {
    const crossSymbolOn = document.getElementById("crossOn")
    const crossSymbolOff = document.getElementById("crossOff")
    if (crossSymbolOff.classList.contains("block") && crossSymbolOn.classList.contains("hidden")) {
      crossSymbolOff.classList.remove("block")
      crossSymbolOff.classList.add("hidden")
      crossSymbolOn.classList.remove("hidden")
      crossSymbolOn.classList.add("block")

    } else {
      crossSymbolOff.classList.remove("hidden")
      crossSymbolOff.classList.add("block")
      crossSymbolOn.classList.remove("block")
      crossSymbolOn.classList.add("hidden")
    }

    const menu = document.getElementById('mobile-menu');
    if (menu.style.display === 'none') {
      menu.style.display = 'grid'
    } else {
      menu.style.display = 'none';
    }
  }
  let scheme = appearance.Nav.scheme ? appearance.Nav.scheme : 'primary'
  let {  bgcolor, fgcolor } = Colors(appearance, scheme)
  const navLinks = navEntries.map((entry, index) => {
    return (
      <TWNavItem navEntry={entry} subNavEntries={subNavEntries} appearance={appearance} key={index} navLayout={navLayout} />
    )
  })
  const TWNavLogo = ({ branding, appearance }) => {
    let BrandLogoStyle = {
      height:branding?.Settings?.Logo?.Height ? branding?.Settings?.Logo?.Height : '100px',
      width:branding?.Settings?.Logo?.Width ? branding?.Settings?.Logo?.Width : '300px'
  }
  let BrandLogoAlt = branding?.Settings?.Logo?.Alt ? branding?.Settings?.Logo?.Alt : 'Logo Image'
  
    return (

        <a href='/' id='nav-logo' className="relative block col-span-7 lg:col-span-3  sm:h-28 h-24 mx-6 my-4" style={BrandLogoStyle}>
          {branding.Settings.Logo.Url &&
            <Image
              src={`${branding.Settings.Logo.Url}`}
              blurDataURL={`${branding.Settings.Logo.Url}`}
              alt={BrandLogoAlt}
              placeholder='blur'
              fill
              sizes="100vw"
              style={{
                objectFit: "contain"
              }} />
          }
          {!branding.Settings.Logo.Url && appearance.navTitle &&
            <h3 style={{ color: fgcolor }} className={`text-3xl font-bold`}>{appearance.navTitle}</h3>
          }
        </a>

    );
  }
  const TWNavItems = () => {
    return (
      <div id='nav-links' className="hidden lg:grid lg:col-span-7 lg:col-start-4  z-20  grid-flow-col justify-self-center items-center" >
        {navLinks}
      </div>
    )
  }
  const TWNavItemsMobile = ({scheme,appearance}) => {

    let MobileMenuStyle = {
      backgroundColor: bgcolor,  
      display: 'none'
    }
    console.log('MobileMenuStyle', MobileMenuStyle)
    return (
      <>
        <div id="mobile-menu-toggle" className="grid lg:hidden col-span-3 col-start-8  justify-items-center"
          onClick={(e) => {
            toggleMobileMenu();
          }}>
          <button id="transitionButton" type="button" className="sm:float-right justify-center p-2 sm:p-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  " aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>

            <svg id="crossOff" className="block h-12 w-12 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={fgcolor} aria-hidden="true">
              <path className="transition duration-700 ease-in-out" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg id="crossOn" className="hidden h-12 w-12 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={fgcolor} aria-hidden="true">
              <path className="transition duration-700 ease-in-out" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div id="mobile-menu" style={MobileMenuStyle} className="test grid grid-cols-1 gap-4 col-span-10 justify-items-center	items-center my-28 sm:my-36  py-8 w-full absolute ">
          {navLinks}
        </div>
      </>
    )
  }


  return (
    <>
      <nav className="fixed top-0 z-50 w-full" style={{ backgroundColor: bgcolor }} id='tailwind-nav-grid-container' >
        <div className='grid grid-cols-10 justify-center content-center h-28 sm:h-36'>
          <TWNavLogo branding={branding} appearance={appearance} />
          <TWNavItems/>
          <TWNavItemsMobile appearance={appearance} scheme={appearance?.Nav?.scheme} />
          <FooterNav  appearance={appearance} branding={branding} />
        </div>
      </nav>
    </>

  )

}

export default TWNav;
