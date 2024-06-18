import Image from "next/image"
import { P, H2, HR, Button } from '../MicroComponents'
import styles from './FullWIdthTextandImage.module.scss'
import { useMediaQuery } from '../../lib/statefulUtils'
import { Colors } from '@/lib/colors.js'
export const FullWidthTextandImage = ({ section, appearance, branding }) => {
    /** NOTES:
     * console.log('FullWidthTextandImage() FullWidthTextandImage: ', FullWidthTextandImage)
     * console.log(' FullWidthTextandImage = ({section}', section, '{appearance}', appearance, '{branding}', branding')
     * 
     * 
     * 
     * 
    */

    /**Section Data Registartion */
    let defaultSection = {
    }
    if (!section) {// Set appearance.ContactForm as section if not called via a "section"
        console.log('FullWidthTextandImage = ({ section, appearance, branding }) => { !if (!section)')
        // section = appearance?.ContactForm ? appearance?.ContactForm : defaultSection
        section = defaultSection
    }

    /**Section Data Registartion */

    /**Variables, States, Handlers, Hooks Registartion */
    const isSmall = useMediaQuery('(min-width: 640px)');
    const isMedium = useMediaQuery('(min-width: 1024px)');
    const isLarge = useMediaQuery('(min-width: 1536px)');
    const isXLarge = useMediaQuery('(min-width: 1920px)');
    /**Variables, States, Handlers Registartion */

    /**Section Color, Class, Styles, SVGs, Registartion */
    let { fgcolor, bgcolor, fgaccent } = Colors(appearance, section?.scheme)

    var backgroundposition = section?.backgroundPosition ? section?.backgroundPosition : '50% 50%'
    var imageFloat = section?.imageFloat ? section?.imageFloat : 'right'
    var gridColumns = "1fr 1fr"
    var gridRows = "1fr 1fr"
    if (section?.orientation == "portrait") {
        gridColumns = (section.imageFloat == "right") ? "4fr 1fr" : "1fr 4fr"
        gridRows = (section.imageFloat == "right") ? "4fr 1fr" : "1fr 4fr"
    }
    var FullWidthTextandImageStyle = {
        color: fgcolor,
        backgroundColor: bgcolor,
        gridTemplateColumns: (!isSmall && !isMedium && !isLarge && !isXLarge) ? 'unset' : gridColumns,
        gridTemplateRows: (!isSmall && !isMedium && !isLarge && !isXLarge) ? gridRows : 'unset',
        alignContent: 'center',
    }

    var foreground = {
        color: fgcolor
    }

    var hrstyle = {
        border:`1px solid ${fgaccent}`
    }
    /**Section Color, Class, Styles, SVGs, Registartion */




    //console.log(isSmall, isMedium, isLarge, isXLarge)
    var divStyle = {

    }

    if (section.backgroundPosition) {
        backgroundposition = section.backgroundPosition
    }


    return (
        <div className={styles.FullWidthTextandImage} style={FullWidthTextandImageStyle} id='FullWidthTextandImage'>
            {(imageFloat === "right") &&
                <>
                    <ContentDiv />
                    <ImageDiv />
                </>
            }
            {(imageFloat === "left") &&
                <>
                    <ImageDiv />
                    <ContentDiv />
                </>
            }
        </div>
    )
    function ContentDiv() {
        var ContentDivStyle = {
            color: fgcolor,
            backgroundColor: bgcolor,
        }
        return (
            <div className={styles.ContentSide} style={ContentDivStyle} id='ContentDiv'>
                <div className={styles.ContentSideGridItem}>
                    {section.items &&
                        section.items.map((item, index) => (
                            <Headlines item={item} key={index} appearance={appearance} scheme={section.scheme} />
                        ))
                    }
                </div>
                <div className={styles.ContentSideGridItem}>
                    {section.items &&
                        section.items.map((item, index) => (
                            <Body item={item} key={index} appearance={appearance} scheme={section.scheme} />
                        ))
                    }
                </div>
                <div className={styles.ContentSideGridItem}>
                    {section.items &&
                        section.items.map((item, index) => (
                            <Action item={item} key={index} appearance={appearance} scheme={section.scheme} />
                        ))
                    }
                </div>
            </div>
        )
    }
    function ImageDiv() {
        var absoluteURL = branding.Settings.Url
        return (
            <div className={styles.ImageSide} id='ImageSide'>
                <Image
                    fill
                    src={`${section.imageUrl}`}
                    alt={section?.alt ? section.alt : section?.title ? section.title : null}
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                        objectPosition: backgroundposition
                    }} />
            </div>
        );
    }
    function Action({ item, appearance, scheme }) {
        return (
            <>
                {item.button &&

                    <Button appearance={appearance} classNames={styles.ButtonStyle} content={item.button} href={item.href} item={item} onClick={item.onClick} scheme={scheme} />
                }
            </>
        )
    }
    function Body({ item, appearance, scheme }) {
        return (
            <>
                {item.paragraphText &&
                    <P classNames={styles.ParagraphText} appearance={appearance} content={item.paragraphText} scheme={scheme} style={foreground} />
                }
            </>
        )
    }
    function Headlines({ item, appearance, scheme }) {
        return (
            <>
                {item.title &&
                    <H2 classNames={styles.Title} appearance={appearance} scheme={scheme} content={item.title} style={foreground} />
                }
                {item.subTitle &&
                    <>
                        <H2 classNames={styles.SubTitle} appearance={appearance} scheme={scheme} content={item.subTitle} style={foreground} />
                        <HR classNames={styles.Hr} style={hrstyle} />
                    </>
                }
            </>
        )
    }
}
