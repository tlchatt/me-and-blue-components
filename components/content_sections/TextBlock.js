import { P, H1, H2, H3, H4, H5, SimpleContentTag, Button, Img, UnorganizedList, OrganizedList,DescriptionList } from "../MicroComponents"
import styles from './TextBlock.module.scss'
import { Colors, hexToRGB } from '@/lib/colors.js'
export const TextBlock = ({ section, appearance, branding }) => {

    let { bgcolor } = Colors(appearance, section?.scheme)

    const TextBlockStyle = {
        backgroundColor: bgcolor
    }
    let defaultSection = {
        "notes": "Default Section Notes Here"
    }
    section = { ...defaultSection, ...section }
    return (
        <div className={`${styles.textblock} `} style={TextBlockStyle}>
            <div className={`${styles.textblockInner} `}>
                {section.items &&
                    section.items.map((item, index) => (
                        <TextBlockItemWrapper item={item} key={index} />
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
            linkStyle = (section.scheme === "secondary") ? { ...appearance.LinkStyle.Secondary } : (section.scheme === "tertiary") ? { ...appearance.LinkStyle.Tertiary } : { ...appearance.LinkStyle.Primary }
            linkStyle.color = (section.scheme === "secondary") ? appearance?.colorSchemes.SecondaryForeground : (section.scheme === "tertiary") ? appearance.colorSchemes.TertiaryForeground : appearance?.colorSchemes.PrimaryForeground
        }

        if (!item.button && (item.href || item.hrefLink)) { //hrefLink want to phase out.

            return (
                <a className={styles.link} style={linkStyle} href={item.href ? item.href : item.hrefLink} id={item.href}>
                    <TextBlockItem item={item} />
                </a>
            )
        }
        return (
            <TextBlockItem item={item} />
        )
    }
    function TextBlockItem({ item }) {
        return (
            <>
                {item?.p &&
                    <P appearance={appearance} content={item.p} scheme={section?.scheme} id={item?.id} />
                }
                {item?.h1 &&
                    <H1 appearance={appearance} content={item.h1} scheme={section?.scheme} id={item?.id} />
                }
                {item?.h2 &&
                    <H2 appearance={appearance} content={item.h2} scheme={section?.scheme} id={item?.id} />
                }
                {item?.h3 &&
                    <H3 appearance={appearance} content={item.h3} scheme={section?.scheme} id={item?.id} />
                }
                {item?.h4 &&
                    <H4 appearance={appearance} content={item.h4} scheme={section?.scheme} id={item?.id} />
                }
                {item?.h5 &&
                    <H5 appearance={appearance} content={item.h5} scheme={section?.scheme} id={item?.id} />
                }
                {item?.h6 &&
                    <SimpleContentTag appearance={appearance} item={item} scheme={section?.scheme} id={item?.id} />
                }
                {item?.span &&
                    <P appearance={appearance} content={item.span} scheme={section?.scheme} id={item?.id} />
                }
                {item?.button &&
                    <Button classNames={styles.buttonStyle} content={item.button} href={item.href} scheme={section?.scheme} appearance={appearance} item={item} onClick={item.onClick} id={item?.id} />
                }
                {item?.imageUrl &&
                    <Img content={item.imageUrl} item={item} alt={item?.alt} id={item?.id} branding={branding} />
                }
                {item?.image &&
                    <Img content={item.image} item={item} alt={item?.alt} id={item?.id} branding={branding} />
                }
                {item?.title &&
                    <H2 classNames={styles.H2} content={item.title} scheme={section?.scheme} appearance={appearance} id={item?.id} />
                }
                {item?.ul &&
                    <UnorganizedList scheme={section?.scheme} appearance={appearance} items={item.ul} />
                }
                {item?.ol &&
                    <OrganizedList scheme={section?.scheme} appearance={appearance} items={item.ol} />
                }
                {item?.dl &&
                    <DescriptionList scheme={section?.scheme} appearance={appearance} items={item.dl} />
                }
            </>
        )
    }
}