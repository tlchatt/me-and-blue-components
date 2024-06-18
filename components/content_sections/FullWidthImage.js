
import styles from './FullWidthImage.module.scss'
import { GetElementsFromJson } from '@/lib/utils.js'
import { hexToRGB, Colors} from '@/lib/colors';
import { useMediaQuery } from '@/lib/statefulUtils'
import Image from "next/image"
export const FullWidthImage = ({ section, appearance }) => {
    //= ({ item, content, alt, classNames, style, scheme,branding }) => {
    /**
     * Uses a media.matches hook to get media queries. 
     * Chooses, sizes specified if you specify the whole set.
     * Chooses highest value if you specify any, (like small all the way up)
     * Chooses defualt values if you specify nothing.
     * 
     * TODO
     * Different math for common aspect rations, landscape (2:3 calculated below)comes in as ratio prop portrait, and square needed
     */
    let { bgcolor } = Colors(appearance, section.scheme)
    const isSmall = useMediaQuery('(min-width: 640px)');
    const isMedium = useMediaQuery('(min-width: 1024px)');
    const isLarge = useMediaQuery('(min-width: 1536px)');
    const isXLarge = useMediaQuery('(min-width: 1920px)');
    var height = section.height ? section.height : '250px'  
    var smHeight = section.smHeight ? section.smHeight : section.height ? section.height : '400px'
    var mdHeight = section.mdHeight ? section.mdHeight : section.smHeight ? section.smHeight : section.height ? section.height : '400px'
    var lgHeight = section.lgHeight ? section.lgHeight : section.mdHeight ? section.mdHeight : section.smHeight ? section.smHeight : section.height ? section.height : '428px' 
    var xlHeight = section.xlHeight ? section.xlHeight : section.lgHeight ? section.lgHeight : section.mdHeight ? section.mdHeight : section.height ? section.height : '476px' 
    var componentStyle = {
        height: (isSmall && !isMedium && !isLarge && !isXLarge) ? smHeight : (isSmall && isMedium && !isLarge && !isXLarge) ? mdHeight : (isSmall && isMedium && isLarge && !isXLarge) ? lgHeight : (isSmall && isMedium && isLarge && isXLarge) ? xlHeight : height,
        backgroundColor:bgcolor
    }
    var backgroundposition = '50% 50%'
    if (section.backgroundPosition) {
        backgroundposition = section.backgroundPosition
    }
    const mergedStyle ={...componentStyle}
    return <>
        <div style={mergedStyle} className={styles.imageStyle}>
            <Image
                src={`${section.src}`}
              
                // objectPosition={backgroundposition}
                alt={section.alt ? section.alt : section.src}
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                    objectPosition:  backgroundposition 
                }} />
        </div>
    </>;
}