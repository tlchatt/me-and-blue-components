import React, { useState } from 'react';
import styles from './NavItem.module.scss'
import { P } from "../MicroComponents"
import { useGlobalContext } from '@/components/Context'
import { useMediaQuery } from '@/lib/statefulUtils'
export default function NavItem({ item, navEntries, subNavEntries, branding, appearance, handleMobileNav }) {
    const [open, setOpen] = useState(false); // For the Accordian Side Nave
    const handleClick = () => {
        setOpen(!open);
    };
          const isSmall = useMediaQuery('(min-width: 640px)');
    let { handleContactModalE } = useGlobalContext()
    //console.log('item?.json?.Settings?.type ', item)
    if (item.subNavEntries.length > 0) {
        return (
            <>
                <DropDownNavItem item={item} />
                <DropDownNavItems item={item} />
            </>

        )
    }
    else {
        return (
            <div className={styles.NavItem}>
                <NavItemLink item={item} navEntries={navEntries} subNavEntries={subNavEntries} branding={branding} />
            </div>
        )
    }
    function NavItemLink({ item }) { // All Values From Page Url and NavTitle No Subnavs
        const isSmall = useMediaQuery('(min-width: 640px)');
        function onClick(e) {
            console.log(item)
            if(!isSmall){
                handleMobileNav()   
            }
 
            if (item.url == "/#contact") {
                handleContactModalE(e)
            }
            if (item.url == "#contact") {
                handleContactModalE(e)
            }
            else { return null }
        }
        if (item?.page && item?.page?.url && item?.json?.Settings?.Title) {
            return (
                <a href={item.page.url}
                    className={styles.NavItemLink}
                    onClick={onClick}
                    id="NavItemLink1">
                    <P appearance={appearance} content={item.json.Settings.Title} scheme={appearance?.Nav?.scheme} id={item?.id} classNames={styles.NavItemP} />
                </a>
            )
        }
        if (item?.json?.Settings?.Title && item?.url) {
            return (
                <a href={item.url} className={styles.NavItemLink}
                    onClick={onClick}
                    id="NavItemLink2">
                    <P appearance={appearance} content={item.json.Settings.Title} scheme={appearance?.Nav?.scheme} id={item?.id} classNames={styles.NavItemP} />
                </a>
            )
        }
        else {
            return (
                <p>{`NavItemLink  ${item.id} with no Page or Link Url`}</p>
            )
        }
    }
    function DropDownNavItems({ item }) {
        return (
            <>
                {open &&
                    <div className={styles.DropDownNavItems}>
                        {item.subNavEntries.map((subItem, index) => (
                            <NavItemLink item={subItem} key={index} />
                        ))}
                    </div>

                }
            </>


        )

    }
    function DropDownNavItem({ item }) { // All Values From Page Url and NavTitle No Subnavs

        if (item.json.Settings.Title) {
            return (
                <>
                    <div className={styles.DropDownNavItem} onClick={handleClick}>
                        <P appearance={appearance} content={`${item.json.Settings.Title}`} scheme={appearance?.Nav?.scheme} id={item?.id} classNames={styles.NavItemP} />
                        {!open &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.SubNavOpenIcon}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        }
                        {open &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.SubNavOpenIcon}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        }
                    </div>
                </>
            )
        }
        else {
            return (
                <p>{`Link  ${item.id} with Sub Nav Missing Title`}</p>
            )
        }
    }


}



