
import { P, H2, H3 } from '../MicroComponents.js'
import styles from './Testimonials.module.scss'
export const Testimonials = ({ section, appearance }) => {

    let imageurlbase = ''
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        imageurlbase = process.env.NEXT_PUBLIC_IMAGE_URL //Fix Base URl for Dev
    }



    const borderColor = section.buttonBorder == "yes" || section.scheme == "primary" ? appearance.PrimaryButtonBackground : appearance.SecondaryButtonBackground
    const bgcolor = section.scheme == "secondary" ? appearance.colorSchemes.SecondaryBackground : section.scheme === "tertiary" ? appearance.colorSchemes.TertiaryBackground : appearance.colorSchemes.PrimaryBackground


    const TestimonialsStyle = {
        backgroundColor: bgcolor
    }
    var backgroundposition = '50%'
    if (section.backgroundPosition) {
        backgroundposition = section.backgroundPosition
    }



    return (
        <div className={`${styles.testimonials} `} style={TestimonialsStyle} id='Testimonials'>
            <div className={`${styles.testimonialsInner} `}>
                <div >
                    {section.title &&
                        <H2 content={section.title} scheme={section?.scheme} appearance={appearance} />
                    }
                </div>
                <div className={styles.Content} >
                    <div className={styles.ContentSide} >
                        <div className={styles.ContentItem} >
                            {section.items &&
                                section.items.map((item) => (
                                    <Item item={item} key={item.author} appearance={appearance} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    function Item({ item }) {
        return (
            <>
                {item.excerpt && item.testimonial && item.author &&
                    <>
                        <H3 classNames={styles.SubTitle} content={item.excerpt} scheme={section?.scheme} appearance={appearance} />

                        <P classNames={styles.ParagraphText} content={item.testimonial} scheme={section?.scheme} appearance={appearance} />
                        <P classNames={styles.Author} content={item.author} scheme={section?.scheme} appearance={appearance} />
                    </>
                }
            </>
        )
    }
}
