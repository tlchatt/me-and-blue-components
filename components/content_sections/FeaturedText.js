
import {H2,H3,Button} from '../MicroComponents'
import styles from './FeaturedText.module.scss'
export const FeaturedText = ({ section, appearance}) => {
  
  let imageurlbase = ''
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    imageurlbase = process.env.NEXT_PUBLIC_IMAGE_URL //Fix Base URl for Dev
  }
   

  let FeaturedTextStyle = {
    backgroundColor:section.scheme=="secondary" ? appearance.SecondaryBackground : appearance.PrimaryBackground
  }
  let FeaturedTextInnerStyle = {
    backgroundColor:section.scheme=="secondary" ? appearance.SecondaryBackground : appearance.PrimaryBackground
 
  }
  if (section.title) {
    return (
      <div className={styles.FeaturedText} style={FeaturedTextStyle} >
        <div className={styles.FeaturedTextInner} style={FeaturedTextInnerStyle}>
            <H2 classNames={styles.H2} scheme={section?.scheme} content={section.title} appearance={appearance} />

            {section.sub_title &&
              <H3 classNames={styles.H3} scheme={section?.scheme} content={section.sub_title} appearance={appearance} />
            }
            {section.button_text &&
              <a  href={section.button_href} >
                <Button classNames={styles.button} scheme={section?.scheme} content={section.button_text} section={section} appearance={appearance}/>
              </a>
            }
        </div>
      </div>
    )
  }
}
