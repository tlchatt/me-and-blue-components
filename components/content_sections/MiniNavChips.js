import { H3, P } from '../MicroComponents.js';
import styles from './MiniNavChips.module.scss';
import { Colors, hexToRGB } from '@/lib/colors.js'
export const MiniNavChips = ({ section, appearance }) => {
    let { fgcolor, bgcolor, fgaccent } = Colors(appearance, section?.scheme)

    

    const MiniNavChipsStyle = {
        backgroundColor: bgcolor,
        color: `${fgcolor} !important`,
    }
    const titleStyle = {
    }
    const titleHrefStyle = {
        textDecorationColor: section.scheme == "secondary" ? appearance.LinkStyle.Secondary.textDecorationColor : section.scheme === "tertiary" ? appearance.LinkStyle.Tertiary.textDecorationColor :  appearance.LinkStyle.Primary.textDecorationColor ,
  
    }

    
    const svgStyle = {
        color: fgaccent,
    }


    return (
        <>
            {section.title && section.href &&
                <a href={section.href} style={titleHrefStyle}>
                    <H3 classNames={styles.SectionTitle} style={titleStyle} content={section.title} appearance={appearance} />
                </a>
            }
            {section.title && !section.href &&
                <H3 content={section.title} appearance={appearance} />
            }
            <div className={styles.MiniNavChips} style={MiniNavChipsStyle}>
                {section.items &&
                    section.items.map((item, key) => (
                        <Item item={item} key={key}  />
                    ))
                }
            </div>
        </>
    ) 
    function Item({ item }) {
        console.log(section.scheme)
        const chipStyle = {
            backgroundColor: bgcolor,
            color: `${fgcolor} !important`,
            border: `2px solid ${fgaccent}`
        }
        let chipPStyle ={
            color: `${fgcolor} !important`,
        }    

        const svgStyle = {
            color: fgaccent,
        }
        return (
                <a href={item.href} className={styles.linkItem} >
                    <div className={styles.chip} style={chipStyle}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={svgStyle} className={styles.svg}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>

                        <P classNames={styles.navChipText} content={item.text} appearance={appearance} style={chipPStyle}/>
                    </div>
                </a>   
        )
    }
}