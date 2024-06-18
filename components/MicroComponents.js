import styles from './MicroComponents.module.scss'
import { GetElementsFromJson } from '../lib/utils.js'
import { hexToRGB, Colors } from '@/lib/colors';
import { useMediaQuery } from '../lib/statefulUtils'
import { useGlobalContext } from '@/components/Context'

import Image from "next/image"
export const SimpleContentTag = ({ classNames, style, item, scheme, appearance, id }) => {
    /*console.log('content ', content, 'classNames ', classNames, 'style ', style, 'scheme ', scheme, 'appearance', appearance,'id',  id)
     console.log('content ', content , '\n','style ', style, '\n')
       <P appearance={appearance} content={item.p} scheme={scheme} id={item?.id}/>
     */
    let element = {
        tag: item.h6 ? 'h6' : item.h5 ? 'h5' : item.h4 ? 'h4' : item.h3 ? 'h3' : item.h2 ? 'h2' : item.h1 ? 'h1' : item.p ? 'p' : 'p'

    }

    let { fgcolor } = Colors(appearance, scheme)
    var componentStyle = {
        color: fgcolor,
    }
    const mergedStyle = { ...componentStyle, ...style }
    if (item[element.tag].includes('{')) {
        //break into pieces
        let pieces = GetElementsFromJson(item[element.tag])
        return (
            <element.tag className={`${styles.P} ${classNames}`} style={mergedStyle} id={id}>
                {
                    pieces.map((piece, index) => (
                        <Piece piece={piece} key={index} scheme={scheme} appearance={appearance} />
                    ))
                }
            </element.tag>
        )
    }
    return (
        <element.tag className={`${styles.P} ${classNames}`} style={mergedStyle} id={id} >{item[element.tag].includes('{')} </element.tag>
    )
}
export const H1 = ({ classNames, style, content, scheme, appearance, id }) => {
    /*
    console.log("classNames ",classNames)
    console.log("style ",style)
    console.log("content ",content)
    console.log("scheme ",scheme)
    console.log("appearance ",appearance)
    */
    let { fgcolor } = Colors(appearance, scheme)
    var componentStyle = {
        color: fgcolor,
    }
    const mergedStyle = { ...componentStyle, ...style }
    if (content.includes('{')) {
        //break into pieces
        let pieces = GetElementsFromJson(content)
        return (
            <h1 className={`${styles.H1} ${classNames}`} style={mergedStyle} id={id}>
                {
                    pieces.map((piece, index) => (
                        <Piece piece={piece} key={index} scheme={scheme} appearance={appearance} />
                    ))
                }
            </h1>
        )
    }
    return (
        <h1 className={`${styles.H1} ${classNames}`} style={mergedStyle} id={id}>{content}</h1>
    )
}
export const H2 = ({ classNames, style, content, scheme, appearance, id }) => {

    let { fgcolor } = Colors(appearance, scheme)
    var componentStyle = {
        color: fgcolor,
    }
    const mergedStyle = { ...componentStyle, ...style }
    if (content.includes('{')) {
        //break into pieces
        let pieces = GetElementsFromJson(content)
        return (
            <h2 className={`${styles.H2} ${classNames}`} style={mergedStyle} id={id}>
                {
                    pieces.map((piece, index) => (
                        <Piece piece={piece} key={index} scheme={scheme} appearance={appearance} />
                    ))
                }
            </h2>
        )
    }
    return (
        <h2 className={`${styles.H2} ${classNames}`} style={mergedStyle} id={id}>{content}</h2>
    )
}
export const H3 = ({ classNames, style, content, scheme, appearance, id }) => {

    let { fgcolor } = Colors(appearance, scheme)
    var componentStyle = {
        color: fgcolor,
    }
    const mergedStyle = { ...componentStyle, ...style }
    if (content.includes('{')) {
        //break into pieces
        let pieces = GetElementsFromJson(content)
        return (
            <h3 className={`${styles.H3} ${classNames}`} style={mergedStyle} id={id}>
                {
                    pieces.map((piece, index) => (
                        <Piece piece={piece} key={index} scheme={scheme} appearance={appearance} />
                    ))
                }
            </h3>
        )
    }
    return (
        <h3 className={`${styles.H3} ${classNames}`} style={mergedStyle} id={id}>{content}</h3>
    )
}
export const H4 = ({ classNames, style, content, scheme, appearance, id }) => {

    let { fgcolor } = Colors(appearance, scheme)
    var componentStyle = {
        color: fgcolor,
    }
    const mergedStyle = { ...componentStyle, ...style }
    if (content.includes('{')) {
        //break into pieces
        let pieces = GetElementsFromJson(content)
        return (
            <h4 className={`${styles.H4} ${classNames}`} style={mergedStyle} id={id}>
                {
                    pieces.map((piece, index) => (
                        <Piece piece={piece} key={index} scheme={scheme} appearance={appearance} />
                    ))
                }
            </h4>
        )
    }
    return (
        <h4 className={`${styles.H4} ${classNames}`} style={mergedStyle} id={id}>{content}</h4>
    )
}
export const H5 = ({ classNames, style, content, scheme, appearance, id }) => {

    let { fgcolor } = Colors(appearance, scheme)
    var componentStyle = {
        color: fgcolor,
    }
    const mergedStyle = { ...componentStyle, ...style }
    if (content.includes('{')) {
        //break into pieces
        let pieces = GetElementsFromJson(content)
        return (
            <h5 className={`${styles.H5} ${classNames}`} style={mergedStyle} id={id}>
                {
                    pieces.map((piece, index) => (
                        <Piece piece={piece} key={index} scheme={scheme} appearance={appearance} />
                    ))
                }
            </h5>
        )
    }
    return (
        <h5 className={`${styles.H5} ${classNames}`} style={mergedStyle} id={id}>{content}</h5>
    )
}
export const P = ({ classNames, style, content, scheme, appearance, id }) => {
    /*console.log('content ', content, 'classNames ', classNames, 'style ', style, 'scheme ', scheme, 'appearance', appearance,'id',  id)
    console.log('content ', content , '\n','style ', style, '\n')
      <P appearance={appearance} content={item.p} scheme={scheme} id={item?.id}/>
    */
    let { fgcolor } = Colors(appearance, scheme)
    var componentStyle = {
        color: fgcolor,
    }
    const mergedStyle = { ...componentStyle, ...style }
    if (content?.includes('{')) {
        //break into pieces
        let pieces = GetElementsFromJson(content)
        return (
            <p className={`${styles.P} ${classNames}`} style={mergedStyle} id={id}>
                {
                    pieces.map((piece, index) => (
                        <Piece piece={piece} key={index} scheme={scheme} appearance={appearance} />
                    ))
                }
            </p>
        )
    }
    return (
        <p className={`${styles.P} ${classNames}`} style={mergedStyle} id={id} >{content} </p>
    )
}
export const UnorganizedList = ({ scheme, appearance, items }) => {
    var style = {
        color: (scheme === "secondary") ? appearance.colorSchemes.SecondaryForeground : appearance.colorSchemes.PrimaryForeground,
        textDecorationColor: (scheme === "secondary") ? appearance.colorSchemes.SecondaryForeground : appearance.colorSchemes.PrimaryForeground,
    }
    return (
        <ul className={styles.UL} style={style} >
            {items &&
                items.map((item, index) => (
                    <Item item={item} key={index} />
                ))
            }
        </ul>
    )
    function Item({ item }) {
        return (
            <>
                {item.li && !item.href &&
                    <li className={styles.LI}  >
                        <P content={item.li} scheme={scheme} appearance={appearance} />
                    </li>
                }
                {item.li && item.href &&
                    <a href={item.href} className={styles.link} style={style}>
                        <li className={styles.LI}>
                            <P content={item.li} scheme={scheme} appearance={appearance} />
                        </li>
                    </a>
                }
            </>
        )
    }
}
export const OrganizedList = ({ scheme, appearance, items }) => {
    var style = {
        color: (scheme === "secondary") ? appearance.colorSchemes.SecondaryForeground : appearance.colorSchemes.PrimaryForeground,
        textDecorationColor: (scheme === "secondary") ? appearance.colorSchemes.SecondaryForeground : appearance.colorSchemes.PrimaryForeground,
    }
    return (
        <ol className={styles.UL} style={style} >
            {items &&
                items.map((item, index) => (
                    <Item item={item} key={index} />
                ))
            }
        </ol>
    )
    function Item({ item }) {
        return (
            <>
                {item.li && !item.href &&
                    <li className={styles.LI}  >
                        <P content={item.li} scheme={scheme} appearance={appearance} />
                    </li>
                }
                {item.li && item.href &&
                    <a href={item.href} className={styles.link} style={style}>
                        <li className={styles.LI}>
                            <P content={item.li} scheme={scheme} appearance={appearance} />
                        </li>
                    </a>
                }
            </>
        )
    }
}
export const DescriptionList = ({ scheme, appearance, items }) => {
    console.log('DescriptionList', items)
    var style = {
        color: (scheme === "secondary") ? appearance.colorSchemes.SecondaryForeground : appearance.colorSchemes.PrimaryForeground,
        textDecorationColor: (scheme === "secondary") ? appearance.colorSchemes.SecondaryForeground : appearance.colorSchemes.PrimaryForeground,
    }
    return (
        <dl className={styles.UL} style={style} >
            {items &&
                items.map((item, index) => (
                    <Item item={item} key={index} />
                ))
            }
        </dl>
    )
    function Item({ item }) {
        return (
            <>
                {item.dt && !item.href &&
                    <dt className={styles.LI}  >
                        <P content={item.dt} scheme={scheme} appearance={appearance} />
                    </dt>
                }
                {item.dt && item.href &&
                    <a href={item.href} className={styles.link} style={style}>
                        <dt className={styles.LI}>
                            <P content={item.dt} scheme={scheme} appearance={appearance} />
                        </dt>
                    </a>
                }
                {item.dd && !item.href &&
                    <dd className={styles.LI}  >
                        <P content={item.dd} scheme={scheme} appearance={appearance} />
                    </dd>
                }
                {item.dd && item.href &&
                    <a href={item.href} className={styles.link} style={style}>
                        <dd className={styles.LI}>
                            <P content={item.dd} scheme={scheme} appearance={appearance} />
                        </dd>
                    </a>
                }
            </>
        )
    }
}
export const Button = ({ classNames, style, content, scheme, appearance, href, item, onClick }) => {

    let { handleContactModal } = useGlobalContext()

    /*
        <Button appearance={appearance} classNames={classNames} content={item.button.text}  href={item.button.href} item={item} onClick={onClickFunction} scheme={section?.scheme}  />
    */



    function OnClick(e) {
        if (href == "/#contact") {
            handleContactModal()
            return
        }
        if (href == "#contact") {
            handleContactModal()
            return
        }
        if (onClick === 'handleContactToggle') {
            handleContactModal()
            return
        }
        if (onClick) {
            onClick()
            return
        }

        else { return null }
    }
    var componentStyle = {
        backgroundColor: (scheme === "secondary") ? appearance?.colorSchemes?.SecondaryBackground : (scheme === "tertiary") ? appearance?.colorSchemes?.TertiaryBackground : appearance?.colorSchemes?.PrimaryBackground,
        borderColor: (scheme === "secondary") ? appearance.LinkStyle.Secondary.textDecorationColor : (scheme === "tertiary") ? appearance.LinkStyle.Tertiary.textDecorationColor : appearance.LinkStyle.Primary.textDecorationColor,
        color: scheme === "secondary" ? appearance.colorSchemes?.SecondaryForeground : scheme === "tertiary" ? appearance.colorSchemes?.TertiaryForeground : appearance?.colorSchemes?.PrimaryForeground,
        borderStyle: item?.borderStyle ? item.borderStyle : "solid", //allow any setting or default
        borderWidth: item?.borderWidth ? item.borderWidth : "4px", //allow any setting or default
        borderRadius: item?.button_BorderRadius ? item?.button_BorderRadius : '4px'
    }

    const mergedStyle = { ...componentStyle, ...style }
    if (href) { //string version passed from props
        return (
            <a className={styles.ButtonA} href={href}>
                <button type="button" className={`${styles.Button} ${classNames}`} style={mergedStyle} onClick={OnClick} >
                    {content}
                </button>
            </a>

        )
    }
    return (

        <button type="button" className={`${styles.Button} ${classNames}`} style={mergedStyle} onClick={OnClick} >
            {content}
        </button>

    )
}
export const HR = ({ classNames, style, content, scheme }) => {
    return (
        <hr className={`${styles.HR} ${classNames}`} style={style}></hr>
    )
}
export const YTEMBED = ({ section }) => {
    let dynamicClass = (section.someProp == 'dark' ? 'text-white/95' : '')
    return (
        <iframe className={dynamicClass} width="560" height="315" src={section.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}
export const Img = ({ item, content, alt, classNames, style, scheme, branding }) => {
    const isSmall = useMediaQuery('(min-width: 640px)');
    const isMedium = useMediaQuery('(min-width: 1024px)');
    const isLarge = useMediaQuery('(min-width: 1536px)');
    const isXLarge = useMediaQuery('(min-width: 1920px)');
    if (!content) {
        return (<H1 style="color:red;"> Missing Img Content</H1>)
    }
    /**
     * Uses a media.matches hook to get media queries. 
     * Chooses, sizes specified if you specify the whole set.
     * Chooses highest value if you specify any, (like small all the way up)
     * Chooses defualt values if you specify nothing.
     * 
     * TODO
     * Different math for common aspect rations, landscape (2:3 calculated below)comes in as ratio prop portrait, and square needed
     */

    var height = item.height ? item.height : '250px' //Image width (318px - 540px) 429 midpoint 286px for 2/3 adjsuted lower because most phones favor a littler farther from 640px.    
    var smHeight = item.smHeight ? item.smHeight : item.height ? item.height : '400px' //Image width (480px - 720px) 600 midpoint
    var mdHeight = item.mdHeight ? item.mdHeight : item.smHeight ? item.smHeight : item.height ? item.height : '400px' //Image width (480px - 720px) 600 midpoint
    var lgHeight = item.lgHeight ? item.lgHeight : item.mdHeight ? item.mdHeight : item.smHeight ? item.smHeight : item.height ? item.height : '428px' //Image width (540px - 742px) 641 midpoint
    var xlHeight = item.xlHeight ? item.xlHeight : item.lgHeight ? item.lgHeight : item.mdHeight ? item.mdHeight : item.height ? item.height : '476px' //Image width (618px - 810px) 1194 midpoint 796 for 2/3 Calculated for 714 midpoin t for 1080 as top
    var componentStyle = {
        height: (isSmall && !isMedium && !isLarge && !isXLarge) ? smHeight : (isSmall && isMedium && !isLarge && !isXLarge) ? mdHeight : (isSmall && isMedium && isLarge && !isXLarge) ? lgHeight : (isSmall && isMedium && isLarge && isXLarge) ? xlHeight : height
    }
    var backgroundposition = '50% 50%'
    if (item.backgroundPosition) {
        backgroundposition = item.backgroundPosition
    }
    const mergedStyle = { ...componentStyle, ...style }


    return (
        <>
            <div style={mergedStyle} className={styles.imageStyle}>
                <Image
                    src={`${content}`}
                    objectPosition={backgroundposition}
                    alt={alt ? alt : content}
                    fill='true'
                    sizes="100vw"
                    style={{
                        objectFit: "contain"
                    }} />
            </div>
        </>
    )
}
export const Piece = ({ piece, scheme, appearance }) => {
    // var json_verify = function (s) { try { JSON.parse(s); return true; } catch (e) { return false; } };
    //  console.log(',json_verify(piece), piece', json_verify(piece), piece)
    let { handleContactModalE } = useGlobalContext()
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
                linkStyle.color = (scheme === "secondary") ? appearance?.colorSchemes.SecondaryForeground : (scheme === "tertiary") ? appearance.colorSchemes.TertiaryForeground : appearance?.colorSchemes.PrimaryForeground
            }
            function onClick(e) {
                if (piece?.href == "/#contact") {
                    handleContactModalE(e)
                }
                if (piece?.href == "/#contact") {
                    handleContactModalE(e)
                }
                else { return null }
            }
            return (
                <piece.tag
                    href={piece.href}
                    style={linkStyle}
                    rel={piece?.rel}
                    target={piece?.target}
                    id={piece?.id}
                    onClick={onClick}
                >
                    {piece.text}
                </piece.tag>
            )
        }
        else {
            return (
                <piece.tag href={piece.href} id={piece?.id}>
                    {piece.text}
                </piece.tag>
            )
        }
    }
    else {
        return piece
    }
}
