import { P, H1, H2, H3, H4, H5 } from "../MicroComponents"
import styles from './QuoteBlock.module.scss'

export const QuoteBlock = ({ section, appearance }) => {
    const QuoteBlockStyle = {
        backgroundColor : section.scheme=="secondary" ? appearance.colorSchemes.SecondaryBackground : section.scheme === "tertiary" ? appearance.colorSchemes.TertiaryBackground :  appearance.colorSchemes.PrimaryBackground
   
    }

    return (
        <div  style={QuoteBlockStyle}>
            {section.items &&
                section.items.map((item, index) => (
                    <QuoteBlockItemWrapper item={item} key={index}
                        appearance={appearance} section={section} scheme={section.scheme} />
                ))
            }
        </div>
    )
    function QuoteBlockItemWrapper({ item, appearance, section }) {// Wraps whole element, also in text linking found in micro components
        var quotemarkstyle = {
            color :  (section.scheme === "secondary") ? appearance.LinkStyle.Secondary.textDecorationColor : (section.scheme === "tertiary") ? appearance.LinkStyle.Tertiary.textDecorationColor :appearance.LinkStyle.Primary.textDecorationColor,
            boxSizing:'unset'
        }

        return (
            <div className={styles.QuoteBlockItemWrapperOuter}>
                <svg className={`${styles.quotemark} ${styles.quotemarkStart}`} style={quotemarkstyle} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
                <QuoteBlockItem item={item} appearance={appearance} scheme={section?.scheme}/>
                <svg className={`${styles.quotemark} ${styles.quotemarkEnd}`} style={quotemarkstyle} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" transform='rotate(180)' viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>

            </div>
        )
    }
    function QuoteBlockItem({ item, appearance, scheme }) {
        return (
            <>
                {item.p &&
                    <P classNames={styles.QuoteBlockText} appearance={appearance} content={item.p} scheme={scheme} id={item?.id} />
                }
                {item.h1 &&
                    <H1 classNames={styles.QuoteBlockText} appearance={appearance} content={item.h1} scheme={scheme} id={item?.id} />
                }
                {item.h2 &&
                    <H2 classNames={styles.QuoteBlockText} appearance={appearance} content={item.h2} scheme={scheme} id={item?.id} />
                }
                {item.h3 &&
                    <H3 classNames={styles.QuoteBlockText} appearance={appearance} content={item.h3} scheme={scheme} id={item?.id} />
                }
                {item.h4 &&
                    <H4 classNames={styles.QuoteBlockText} appearance={appearance} content={item.h4} scheme={scheme} id={item?.id} />
                }
                {item.h5 &&
                    <H5 classNames={styles.QuoteBlockText} appearance={appearance} content={item.h5} scheme={scheme} id={item?.id} />
                }
            </>
        )
    }
}