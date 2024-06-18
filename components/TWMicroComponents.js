/* Text tag micro components
*  Try these default styles first
*  Always handle alignment, margins, padding, in parent
*  Overide default clases some other way, they do not always overide, maybe overwrite other classes? Inlne styles is not an option becaue of media query issues (no responsive inline styles). 
alignment classes (? Should these be handled by paretn like in text block)
* In Sync with tailwind 06/22/2023
* In Sync with prismaMaterializeImageCompoenent 06/22/2023
*/
import { GetElementsFromJson } from '@/lib/utils.js'
import { Colors, hexToRGB } from '@/lib/colors.js'
import { useMediaQuery } from '@/lib/statefulUtils'
import {useGlobalContext} from '@/components/Context'
import Image from "next/image"
export const H1 = ({ classNames, style, content, scheme, appearance }) => {
    var componentStyle = {
        color: scheme === "secondary" ? appearance?.colorSchemes?.SecondaryForeground : scheme === "tertiary" ? appearance?.colorSchemes?.TertiaryForeground : appearance?.colorSchemes?.PrimaryForeground
    }
    const mergedStyle = { ...componentStyle, ...style }


    return (
        <h1 className={`font-semibold text-4xl sm:text-5xl ${classNames}`} style={mergedStyle}>{content}</h1>
    )
}
export const H2 = ({ classNames, style, content, scheme, appearance }) => {
    var componentStyle = {
        color: scheme === "secondary" ? appearance?.colorSchemes?.SecondaryForeground : scheme === "tertiary" ? appearance?.colorSchemes?.TertiaryForeground : appearance?.colorSchemes?.PrimaryForeground
    }
    const mergedStyle = { ...componentStyle, ...style }
    return (
        <h2 className={`font-medium	 text-3xl sm:text-4xl ${classNames}`} style={mergedStyle}>{content}</h2>
    )
}
export const H3 = ({ classNames, style, content, scheme, appearance }) => {
    var componentStyle = {
        color: scheme === "secondary" ? appearance?.colorSchemes?.SecondaryForeground : scheme === "tertiary" ? appearance?.colorSchemes?.TertiaryForeground : appearance?.colorSchemes?.PrimaryForeground
    }
    const mergedStyle = { ...componentStyle, ...style }
    return (
        <h3 className={`font-medium text-2xl sm:text-3xl ${classNames}`} style={mergedStyle}>{content}</h3>
    )
}
export const H4 = ({ classNames, style, content, scheme, appearance }) => {
    var componentStyle = {
        color: scheme === "secondary" ? appearance?.colorSchemes?.SecondaryForeground : scheme === "tertiary" ? appearance?.colorSchemes?.TertiaryForeground : appearance?.colorSchemes?.PrimaryForeground
    }
    const mergedStyle = { ...componentStyle, ...style }
    return (
        <h4 className={`font-medium	  text-xl sm:text-2xl ${classNames}`} style={mergedStyle}>{content}</h4>
    )
}
export const H5 = ({ classNames, style, content, scheme, appearance }) => {
    var componentStyle = {
        color: scheme === "secondary" ? appearance?.colorSchemes?.SecondaryForeground : scheme === "tertiary" ? appearance?.colorSchemes?.TertiaryForeground : appearance?.colorSchemes?.PrimaryForeground
    }
    const mergedStyle = { ...componentStyle, ...style }
    return (
        <h5 className={`font-medium	 text-lg sm:text-xl ${classNames}`} style={mergedStyle}>{content}</h5>
    )
}
export const P = ({ classNames, style, content, scheme, appearance, id }) => {
    /*console.log('content ', content, 'classNames ', classNames, 'style ', style, 'scheme ', scheme, 'appearance', appearance,'id',  id)
console.log('content ', content , '\n','style ', style, '\n')
*/
    var componentStyle = {
        color: scheme === "secondary" ? appearance?.colorSchemes?.SecondaryForeground : scheme === "tertiary" ? appearance?.colorSchemes?.TertiaryForeground : appearance?.colorSchemes?.PrimaryForeground
    }
    const mergedStyle = { ...componentStyle, ...style }
    if (content.includes('{')) {
        console.log('this is firing ', content)
        let pieces = GetElementsFromJson(content)


        return (
            <p className={`text-lg sm:text-xl font-medium  ${classNames}`} style={mergedStyle} id={id}>
                {
                    pieces.map((piece, index) => (
                        <Piece piece={piece} key={index} scheme={scheme} appearance={appearance} />
                    ))
                }
            </p>
        )
    }
    return (
        <p className={`text-lg sm:text-xl font-medium ${classNames}`} style={mergedStyle}>{content}</p>
    )
}
export const Button = ({ content, href, scheme, appearance, item, onClick, style }) => {
    /**
     * console.log('content ',content, 'href ', href, 'scheme ', scheme, 'appearance ', appearance , 'item v', item ) 
     *  Usage (From text block)  <Button classNames={styles.buttonStyle} content={item.button} href={item.href} scheme={section?.scheme} appearance={appearance} item={item} onClick={item.onClick}  id={item?.id}/>  
     * 
     * 
     **/
    let {handleContactModal} = useGlobalContext()
    let { fgcolor, bgcolor } = Colors(appearance, scheme)
    if (onClick === 'handleContactToggle') {
        onClick = handleContactModal
    }
    let componentStyle = {	//default button styles
        color: fgcolor,
        borderColor: fgcolor,
        borderStyle: item?.borderStyle ? item.borderStyle : "solid", //allow any setting or default
        borderWidth: item?.borderWidth ? item.borderWidth : "4px", //allow any setting or default
        borderRadius: item?.borderRadius ? item?.borderRadius : "15px", //allow any setting or default
    }

    const mergedStyle = { ...componentStyle, ...style }

    return (
        <a href={href} className={`button block my-4 sm:my-8 mx-auto p-4 sm:p-8 w-4/5 sm:w-1/2 text-2xl font-medium text-center`}
            style={mergedStyle}
            onClick={onClick}>{content}
        </a>
    )
}
export const HR = ({ classNames, style, scheme, appearance }) => {
    var componentStyle = {
        color: scheme === "secondary" ? appearance?.colorSchemes?.SecondaryForeground : scheme === "tertiary" ? appearance?.colorSchemes?.TertiaryForeground : appearance?.colorSchemes?.PrimaryForeground
    }
    const mergedStyle = { ...componentStyle, ...style }
    return (
        <hr className={`my-6 sm:my-8 border-current ${classNames}`} style={mergedStyle}></hr>
    )
}
export const YTEMBED = ({ section }) => {
    let dynamicClass = (section.someProp == 'dark' ? 'text-white/95' : '')
    return (
        <iframe className={dynamicClass} width="560" height="315" src={section.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}
export const Img = ({ item, content, alt, classNames, style, scheme, branding }) => {
    /**
     * Uses a media.matches hook to get media queries. 
     * Chooses, sizes specified if you specify the whole set.
     * Chooses highest value if you specify any, (like small all the way up)
     * Chooses defualt values if you specify nothing.
     * className={styles.imageStyle}
     * TODO
     * Different math for common aspect rations, landscape (2:3 calculated below)comes in as ratio prop portrait, and square needed
     * Add dynamic width and utilize in fullwidth text image component
     */
    var absoluteURL = branding.Settings.Url
    const isSmall = useMediaQuery('(min-width: 640px)');
    const isMedium = useMediaQuery('(min-width: 1024px)');
    const isLarge = useMediaQuery('(min-width: 1536px)');
    const isXLarge = useMediaQuery('(min-width: 1920px)');
    var height = item.height ? item.height : '250px' //Image width (318px - 540px) 429 midpoint 286px for 2/3 adjsuted lower because most phones favor a littler farther from 640px.    
    var smHeight = item.smHeight ? item.smHeight : item.height ? item.height : '400px' //Image width (480px - 720px) 600 midpoint
    var mdHeight = item.mdHeight ? item.mdHeight : item.smHeight ? item.smHeight : item.height ? item.height : '400px' //Image width (480px - 720px) 600 midpoint
    var lgHeight = item.lgHeight ? item.lgHeight : item.mdHeight ? item.mdHeight : item.smHeight ? item.smHeight : item.height ? item.height : '428px' //Image width (540px - 742px) 641 midpoint
    var xlHeight = item.xlHeight ? item.xlHeight : item.lgHeight ? item.lgHeight : item.mdHeight ? item.mdHeight : item.height ? item.height : '476px' //Image width (618px - 810px) 1194 midpoint 796 for 2/3 Calculated for 714 midpoin t for 1080 as top

    var componentStyle = {
        height: (isSmall && !isMedium && !isLarge && !isXLarge) ? smHeight : (isSmall && isMedium && !isLarge && !isXLarge) ? mdHeight : (isSmall && isMedium && isLarge && !isXLarge) ? lgHeight : (isSmall && isMedium && isLarge && isXLarge) ? xlHeight : height
    }
    const mergedStyle = { ...componentStyle, ...style }

    return <>
        <div style={mergedStyle} className='relative w-11/12 my-6 sm:my-8 mx-auto'>
            <Image
                src={`${content}`}
                // objectPosition={backgroundposition}
                alt={alt ? alt : content}
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover"
                }} />
        </div>
    </>;
}
export const UnorganizedList = ({ scheme, appearance, items }) => {
    var style = {
        color: (scheme === "secondary") ? appearance?.colorSchemes?.SecondaryForeground : scheme === "tertiary" ? appearance?.colorSchemes?.TertiaryForeground : appearance?.colorSchemes?.PrimaryForeground,
        marginInlineStart: '0px!important',
        marginInlinEnd: '0px!important',
        listStyleType: 'disc'
    }
    return (
        <ul className='px-0 px-10 md:px-20' style={style} >
            {items &&
                items.map((item, index) => (
                    <Item item={item} key={index} />
                ))
            }
        </ul>
    )

    function Item({ item }) {

        var linkStyle = {
            color: (scheme === "secondary") ? appearance?.colorSchemes?.SecondaryForeground : scheme === "tertiary" ? appearance?.colorSchemes?.TertiaryForeground : appearance?.colorSchemes?.PrimaryForeground,
            cursor: 'pointer !important',
            textDecoration: "underline",
            textUnderlineOffset: '6px !important',
            textDecorationColor: (scheme === "secondary") ? hexToRGB(appearance?.colorSchemes?.SecondaryForeground, .55) : hexToRGB(appearance?.colorSchemes?.PrimaryForeground, .65),
            textDecorationThickness: '2px'

        }
        return (
            <>
                {item.li && !item.href &&
                    <li >
                        <P content={item.li} scheme={scheme} appearance={appearance} />
                    </li>
                }
                {item.li && item.href &&
                    <a href={item.href} style={linkStyle}>
                        <li className={styles.LI}>
                            <P content={item.li} scheme={scheme} appearance={appearance} />
                        </li>
                    </a>
                }
            </>
        )
    }
}
export const Piece = ({ piece, scheme, appearance }) => {
    // var json_verify = function (s) { try { JSON.parse(s); return true; } catch (e) { return false; } };

    //  console.log(',json_verify(piece), piece', json_verify(piece), piece)


    if (typeof piece == 'object') {
        if (!piece.tag) { piece.tag = 'a' }
        if (piece.tag == 'a') {
            let linkStyle = {
                color: (scheme === "secondary") ? appearance?.colorSchemes.SecondaryForeground : (scheme === "tertiary") ? appearance.colorSchemes.TertiaryForeground : appearance?.colorSchemes.PrimaryForeground,
                textDecoration: "underline",
                textDecorationColor: (scheme === "secondary") ? hexToRGB(appearance?.colorSchemes.SecondaryForeground, .45) : (scheme === "tertiary") ? hexToRGB(appearance.colorSchemes.TertiaryForeground) : hexToRGB(appearance?.colorSchemes.PrimaryForeground),
            }
            if (appearance.LinkStyle) {
                linkStyle = (scheme === "secondary") ? { ...appearance.LinkStyle.Secondary } : (scheme === "tertiary") ? { ...appearance.LinkStyle.Tertiary } : { ...appearance.LinkStyle.Primary }

            }

            return (
                <piece.tag href={piece.href} style={linkStyle} rel={piece?.rel} target={piece?.target} id={piece?.id} className='underline underline-offset-2'>
                    {piece.text}
                </piece.tag>
            )
        }
        else {
            return (
                <piece.tag href={piece.href} id={piece?.id} className='underline underline-offset-2'>
                    {piece.text}
                </piece.tag>
            )
        }
    }
    else {
        return piece
    }
}
