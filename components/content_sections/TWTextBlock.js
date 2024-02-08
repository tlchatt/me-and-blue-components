import { P, H1, H2, H3, H4, H5, Button,Img, UnorganizedList, OrganizedList } from "../TWMicroComponents"
import { Colors, hexToRGB } from '@/lib/colors.js'

export const TWTextBlock = ({ section, appearance}) => {
    /**
     * TODO
     * Add Contact Toggle and floating contact buttons
     * In Sync with tailwind 06/22/2023
     * 
     * 
     */
    //console.log('section ', section , '\n' , 'appearance' , appearance , '\n')

    let {  bgcolor } = Colors(appearance, section?.scheme)

    const TextBlockStyle = {
        backgroundColor : bgcolor
    }
    let defaultSection = { 
        "notes": "Default Section Notes Here"
    }
    section = { ...defaultSection, ...section }
    return (
        <div style={TextBlockStyle}>
            <div className={`w-11/12  sm:w-8/12 mx-auto  px-4 py-4`}  >
                {section.items &&
                    section.items.map((item, index) => (
                        <TextBlockItemWrapper item={item}  key={index}/>
                    ))

                }
            </div>
        </div>
    )
    function TextBlockItemWrapper({ item }) {


        // Wraps whole element, also in text linking found in micro components
        let linkStyle = {
            color: (section.scheme === "secondary") ? appearance?.colorSchemes.SecondaryForeground : (section.scheme === "tertiary") ? appearance.colorSchemes.TertiaryForeground : appearance?.colorSchemes.PrimaryForeground,
            textDecoration: "underline",
            textDecorationColor: (section.scheme === "secondary") ? hexToRGB(appearance?.colorSchemes.SecondaryForeground, .45) : (section.scheme === "tertiary") ? hexToRGB(appearance.colorSchemes.TertiaryForeground) : hexToRGB(appearance?.colorSchemes.PrimaryForeground),
        }
        if (appearance.LinkStyle) {
            linkStyle =  (section.scheme === "secondary") ? {... appearance.LinkStyle.Secondary} : (section.scheme === "tertiary") ? {...appearance.LinkStyle.Tertiary} :{...appearance.LinkStyle.Primary}
            linkStyle.color = (section.scheme === "secondary") ? appearance?.colorSchemes.SecondaryForeground : (section.scheme === "tertiary") ? appearance.colorSchemes.TertiaryForeground : appearance?.colorSchemes.PrimaryForeground
        } 
        if (!item.button && (item.href || item.hrefLink)) { //hrefLink want to phase out.
            return (
                <a style={linkStyle} href={item.href ? item.href : item.hrefLink} id="TextBlockItemWrapper">
                    <TextBlockItem item={item} appearance={appearance} section={section} />
                </a>
            )
        }
        return (
            <TextBlockItem item={item} appearance={appearance} section={section} />
        )
    }
    function TextBlockItem({ item, appearance, section }) {
        /**
         * Text Blocks Use default micro components accept for margins
         * console.log('item ', item)
         */ 

        return (
            <>
                {item.p &&
    
                    <P classNames={`my-6 sm:my-8`} content={item.p} scheme={section?.scheme} appearance={appearance} />
    
                }
                {item.h1 &&
    
                    <H1 classNames={`my-6 sm:my-8 `} scheme={section?.scheme} content={item.h1} appearance={appearance} />
    
                }
                {item.h2 &&
    
                    <H2 classNames={`my-6 sm:my-8 `} scheme={section?.scheme} content={item.h2} appearance={appearance} />
    
                }
                {item.h3 &&
    
                    <H3 classNames={`my-6 sm:my-8 `} scheme={section?.scheme} content={item.h3} appearance={appearance} />
    
                }
                {item.h4 &&
    
                    <H4 classNames={`my-6 sm:my-8 `} scheme={section?.scheme} content={item.h4} appearance={appearance} />
    
                }
                {item.h5 &&
    
                    <H5 classNames={`my-6 sm:my-8 `} scheme={section?.scheme} content={item.h5} appearance={appearance} />
    
                }
                {item.button &&
    
                    <Button content={item.button} href={item.href} scheme={section?.scheme} appearance={appearance} item={item} onClick={item.onClick} />
                }
                {item.ul &&
                    <UnorganizedList scheme={section?.scheme} appearance={appearance} items={item.ul} />
                }
                {item.image &&
                    <Img content={item.image} item={item} alt={item?.alt} id={item?.id}/>
                }
    
            </>
        )
    }
}
