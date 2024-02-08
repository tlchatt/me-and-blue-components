
import { P, H2, H5, Img } from "../MicroComponents"

import Image from "next/image"
import styles from './GridImageTextWrap.module.scss'

export const GridImageTextWrap = ({ section, appearance, branding }) => {

    const bgcolor = section.scheme == "secondary" ? appearance.colorSchemes.SecondaryBackground : section.scheme === "tertiary" ? appearance.colorSchemes.TertiaryBackground : appearance.colorSchemes.PrimaryBackground

    const textColor = section.scheme == "primary" ? appearance.PrimaryForeground : appearance.SecondaryForeground
    const borderColor = section.buttonBorder == "yes" || section.scheme == "primary" ? appearance.PrimaryButtonBackground : appearance.SecondaryButtonBackground

    var imagefloat = 'right'
    if (section.imageFloat) {
        imagefloat = section.imageFloat
    }

    var GridImageTextWrapStyle = {
        backgroundColor: bgcolor
    }
    return (
        <div className={styles.GridImageTextWrap} style={GridImageTextWrapStyle}>
            {section?.title &&
                <H2 appearance={appearance} content={section.title} scheme={section?.scheme} id={section?.id} />
            }
            {section.items &&
                section.items.map((item, id) => (
                    <GridImageTextGridItemWrapper item={item} key={id} scheme={section.scheme} appearance={appearance} />
                ))
            }
        </div>
    )
    function GridImageTextGridItemWrapper({ item, scheme, appearance }) {

        // console.log('GridImageItem', item)
        return (
            <div className={styles.Item}>
                {item?.imageFloat === 'left' &&
                    <>
                        <ImageItem />
                        <TextItem />
                    </>
                }
                {!(item?.imageFloat === 'left') &&
                    <>
                        <TextItem />
                        <ImageItem />

                    </>

                }
            </div>
        )


        function ImageItem() {
            let imageStyle = {
                margin: '0 auto'
            }
            return (
                <div className={styles.ImageItem}>
                    {item.href &&
                        <a href={item?.href}>
                            {item.image &&
                                <Img content={item.image} item={item} alt={item?.alt} id={item?.id} style={imageStyle} />
                            }
                            {item?.imageTitle &&
                                <Title content={item?.imageTitle} />
                            }

                        </a>
                    }
                    {!item.href &&
                        <>
                            {
                                item.image &&
                                <Img content={item.image} item={item} alt={item?.alt} id={item?.id} style={imageStyle} />
                            }
                            {item?.imageTitle &&
                                <Title content={item?.imageTitle} />
                            }
                        </>
                    }
                </div>

            );
        }
        function Title({ content }) {

            return (
                <>
                    {item.href &&
                        <a href={item?.href}>
                            <H5 classNames={styles.title} content={content} scheme={scheme} appearance={appearance} />
                        </a>
                    }
                    {!item.href &&
                        <div>
                            <H5 classNames={styles.title} content={content} scheme={scheme} appearance={appearance} />
                        </div>
                    }
                </>


            )
        }
        function TextItem() {
            return (
                <div className={styles.TextItem} >
                    {item?.subTitle &&
                        <Title content={item?.subTitle} />
                    }
                    <div>
                        <P classNames={styles.paragraphText} content={item.paragraphText} scheme={scheme} appearance={appearance} />
                    </div>

                </div>
            )

        }
    }
}