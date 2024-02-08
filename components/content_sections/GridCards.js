import {P,H5} from '../MicroComponents.js'
import styles from './GridCards.module.scss'
export const GridCards = ({ section, appearance}) => {
  

  let imageurlbase = ''
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    imageurlbase = process.env.NEXT_PUBLIC_IMAGE_URL //Fix Base URl for Dev
  }

  const bgcolor = section.scheme=="secondary" ? appearance.colorSchemes.SecondaryBackground : section.scheme === "tertiary" ? appearance.colorSchemes.TertiaryBackground :  appearance.colorSchemes.PrimaryBackground



  return (
      <div className={styles.GridCards} id='GridCards' >
        {section.items &&
            section.items.map((item) => (
                <GridItem item={item} key={item.title}/>
            ))
        }
      </div>
  )
  function GridItem ({item}) {
    const GridItemStyle = {
      backgroundColor : bgcolor
    }

    return(
        <div className={styles.GridCard} style={GridItemStyle} id='GridItem'>
          <div className={styles.Headline} >
            <H5 classNames={styles.Title} scheme={section.scheme} content={item.title} appearance={appearance} />
          </div>
          <div className={styles.Content} >
    
          <P classNames={styles.P} content={item.paragraphText} scheme={section.scheme} appearance={appearance} />
          </div>
        </div>
    )
  }
}
/**
 *   {
    "type":"grid-cards",
    "items": [
      {
        "title": "Guidance through the disability benefits application process",
        "paragraphText": "If this is your first time applying for social security disability insurance , talking things through with a lawyer experienced in disability claims can help you avoid common mistakes and increase your chances of filing a successful claim. We strongly encourage you to speak with our disability lawyers about your Social Security Disability (SSD) benefits. Feel free to contact our law firm for a free case evaluation"
      
      },
      {
        "title": "Fierce representation by an experienced lawyer if your benefits claim for disability was denied",
        "paragraphText": "Maybe you’ve already applied for Social Security Disability or SSI and your benefits claim has been denied by the Social Security Administration (SSA). That doesn’t mean it’s over. Contact our Tennessee law firm about reapplying for your SSD benefits claim. With strong legal backing, we can help your appeal approval chances. We also offer a free case review." 
      
      },
      {
        "title": "We offer a no-nonsense approach to personal injuries",
        "paragraphText": "When you or a loved one gets hurt in an accident that wasn’t your fault, call us immediately. We don’t pull any punches when it comes to getting justice for these types of claims. We have a team of fair and ethical personal injury lawyers."
      
      }
    ]
  },
 * 
 */