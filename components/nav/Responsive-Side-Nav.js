import React, { useState } from 'react';
import SocialNav from "./SocialNav";
import FooterNav from "./FooterNav";
import MainNav from "./MainNav";

export function ResponsiveSideNav({ navEntries, subNavEntries, appearance, branding }) {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const handleMobileNav = () => {
        console.log('handleMobileNav()')
        setMobileNavOpen(!mobileNavOpen);
    };
let ResponsiveSideNavStyle = {
    display: 'grid'
}
 
    
    return (
        <nav style={ResponsiveSideNavStyle} id="ResponsiveSideNav" >
            <SocialNav appearance={appearance} branding={branding}/>
            <MainNav appearance={appearance} branding={branding} navEntries={navEntries} subNavEntries={subNavEntries} mobileNavOpen={mobileNavOpen} handleMobileNav={handleMobileNav}/>
            <FooterNav  appearance={appearance} branding={branding}/>
        </nav>
    );

}