import styles from './MainNav.module.scss'
import { Colors, hexToRGB } from '@/lib/colors.js'
import NavItem from './NavItem';
import { logEvent2 } from '../head/AnalyticsGA4'
import { MenuIcon } from '../../lib/icon'
import { useGlobalContext } from '@/components/Context'
import Image from "next/image"
export default function MainNav({ appearance, branding, navEntries, subNavEntries, mobileNavOpen, handleMobileNav }) {
    let scheme = appearance.Nav.scheme ? appearance.Nav.scheme : 'primary'
    let { fgcolor, bgcolor } = Colors(appearance, scheme)
    let { handleContactModalE } = useGlobalContext()
    //console.log('fgcolor', fgcolor, 'bgcolor', bgcolor)
    const colorStyle = {
        backgroundColor: bgcolor,
        color: fgcolor,
    }
    let MainNavStyle={
        justifySelf:'start',
        position: 'fixed',
        top:'0',
        bottom:'0',
        right:'auto',
        width: '100%',
        maxWidth: '300px',
        zIndex: (mobileNavOpen) ? '1200' : '1100'//must overlay FooterNav when open but not when closed
    }
 
    const innerDrawerStyle = {
        backgroundColor: bgcolor,
        color: fgcolor,
        borderRight: `1px solid ${hexToRGB(fgcolor, .25)}`
    }
    const drawerDividerStyle = {
        backgroundColor: fgcolor
    }
    const SVGStyle = {
        color: fgcolor,
    }
    const mobileNavClass = (mobileNavOpen) ? `${styles.mobileNavDrawer} ${styles.mobileNavDrawerOpen}` : styles.mobileNavDrawer
    let address_line_1 = ''
    let address_line_2 = ''
    if (branding.Settings.Address != null) {
        address_line_1 = branding.Settings.Address.split(',')[0];
        address_line_2 = branding?.Settings?.Address?.split(',')[1] + ',' + branding?.Settings?.Address?.split(',')[2];
    }
    function handleMobileNavModal(e) {
        console.log(e.target, e.currentTarget)
        if (e.target === e.currentTarget) {
            //target will indicate clicks on specific children.
            handleMobileNav()
        }
    }
    return (
        <>
            <nav className={styles.drawer} style={MainNavStyle} id="MainNav" >
                <div className={`${mobileNavClass}`}
                    onClick={e => handleMobileNavModal(e)}
                >
                    <div className={`${styles.mobileNavDrawerInner} ${styles.drawerPaper}  ${styles.HiddenmdUp} `} style={innerDrawerStyle}  >
                        <Drawer />
                    </div>
                </div>

                <div className={`${styles.navDrawerInner} ${styles.drawerPaper}  ${styles.HiddensmDown} `} style={innerDrawerStyle} >
                    <Drawer />
                </div>


            </nav>
            <MobileMenuBar />
        </>

    )

    function Drawer() {
        let BrandLogoStyle = {
            height: branding?.Settings?.Logo?.Height ? branding?.Settings?.Logo?.Height : '100px',
            width: branding?.Settings?.Logo?.Width ? branding?.Settings?.Logo?.Width : '300px'
        }
        let BrandLogoAlt = branding?.Settings?.Logo?.Alt ? branding?.Settings?.Logo?.Alt : 'Logo Image'

        return (
            <div className={styles.drawerInner}>
                <div className={styles.drawerTop} id="drawerTop">
                    <a className={styles.drawerTopBrandLogo} style={{ ...BrandLogoStyle, ...colorStyle }} href='/'>
                        <Image
                            src={`${branding?.Settings?.Logo?.Url}`}
                            className={styles.drawerTopBrandLogoImg}
                            blurDataURL={`${branding.Settings.Logo.Url}`}
                            alt={BrandLogoAlt}
                            placeholder='blur'
                            fill='true'
                            sizes="100vw"
                            style={{
                                objectFit: "contain"
                            }} />
                    </a>


                    <a href={`tel:${branding.Settings.Phone}`} className={`${styles.drawerTopPhone}`} style={colorStyle} onClick={logEvent2} >{branding.Settings.Phone}</a>

                </div>
                <hr className={styles.drawerTopDivider} style={drawerDividerStyle} />
                <div className={styles.drawerMiddle} id="drawerMiddle">
                    <ul className={styles.drawerList}>
                        {navEntries.map((item, key) => (
                            <NavItem key={key} item={item} navEntries={navEntries} subNavEntries={subNavEntries} branding={branding} appearance={appearance} handleMobileNav={handleMobileNav} />
                        ))}
                    </ul>
                </div>
                <hr className={styles.drawerBottomDivider} style={drawerDividerStyle} />
                <div className={styles.drawerBottom}>

                    <div className={styles.drawerBottomEmail}>
                        <a href='#'
                            onClick={e => handleContactModalE(e)}

                            className={styles.drawerBottomEmailP}
                            style={colorStyle}
                        >{branding.Settings.Email}</a>
                    </div>
                    <div className={styles.drawerBottomPhone}>
                        <a href={`tel:${branding.Settings.Phone}`}
                            className={styles.drawerBottomAddressP}
                            style={colorStyle}
                            onClick={logEvent2}>Call : {branding.Settings.Phone}</a>
                        {branding.Settings.Fax &&
                            <a className={styles.drawerBottomAddressP}
                                style={colorStyle}
                                onClick={logEvent2}
                            >Fax : {branding.Settings.Fax}</a>
                        }
                    </div>
                    <div className={styles.drawerBottomAddress}>

                        <a href='#location'
                            className={styles.drawerBottomAddressP}
                            style={colorStyle}
                            onClick={handleMobileNav}
                        >{address_line_1}</a>
                        <a href='#location'
                            className={styles.drawerBottomAddressP}
                            style={colorStyle}
                            onClick={handleMobileNav}
                        >{address_line_2}</a>


                    </div>
                </div>
            </div >
        )
    }
    function MobileMenuBar() {
        let BrandLogoStyle = {
            height: branding?.Settings?.Logo?.Height ? branding?.Settings?.Logo?.Height : '100px',
            width: branding?.Settings?.Logo?.Width ? branding?.Settings?.Logo?.Width : '300px'
        }
        let BrandLogoAlt = branding?.Settings?.Logo?.Alt ? branding?.Settings?.Logo?.Alt : 'Logo Image'

        return (
            <div className={`${styles.mobileMenuAppBar} ${styles.AppBar}`} style={colorStyle} id='MobileMenu'>
                <div className={`${styles.mobileMenuToolBar} ${styles.ToolBar}`}>

                    <a className={styles.MobileMenuBrandLogo} style={{ ...BrandLogoStyle, ...colorStyle }} href='/'>
                        <Image
                            src={`${branding?.Settings?.Logo?.Url}`}
                            className={styles.MobileMenuBrandLogoImg}
                            blurDataURL={`${branding.Settings.Logo.Url}`}
                            alt={BrandLogoAlt}
                            placeholder='blur'
                            fill='true'
                            sizes="100vw"
                            style={{
                                objectFit: "contain"
                            }} />
                    </a>


                    <div color="inherit" onClick={handleMobileNav} className={styles.mobileMenuButton}>
                        <MenuIcon ClassName={styles.mobileMenuIcon} Style={SVGStyle} />

                    </div>
                </div>
            </div>
        )
    }


}