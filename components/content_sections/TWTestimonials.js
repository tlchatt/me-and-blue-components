
import { P, H2, H3 } from '../MicroComponents.js'
import styles from './TWTestimonials.module.scss'
import { Colors } from '@/lib/colors.js'
export const TWTestimonials = ({ section, appearance }) => {

    let imageurlbase = ''
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        imageurlbase = process.env.NEXT_PUBLIC_IMAGE_URL //Fix Base URl for Dev
    }


    let { fgcolor, bgcolor } = Colors(appearance, section?.scheme)


    const TestimonialsStyle = {
        backgroundColor: bgcolor
    }
    var backgroundposition = '50%'
    if (section.backgroundPosition) {
        backgroundposition = section.backgroundPosition
    }



    return (
        <div className={`${styles.testimonials}`} style={TestimonialsStyle} id='Testimonials'>
            <div className={`${styles.testimonialsInner} w-11/12  sm:w-8/12 mx-auto  px-4 py-4 `}>
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
