import {DoubleArrowRight} from '../../lib/icon'
import {H2,H3} from '../MicroComponents.js'
import styles from './ActionBanner.module.scss'
import {useGlobalContext} from '@/components/Context'
export const ActionBanner = ({ section, appearance}) => {
  let {handleContactModal} = useGlobalContext()
  const bgcolor = section.scheme=="secondary" ? appearance.colorSchemes.SecondaryBackground : section.scheme === "tertiary" ? appearance.colorSchemes.TertiaryBackground :  appearance.colorSchemes.PrimaryBackground
  const textColor =section.scheme=="secondary" ? appearance.colorSchemes.SecondaryForeground : section.scheme === "tertiary" ? appearance.colorSchemes.TertiaryForeground :  appearance.colorSchemes.PrimaryForeground
  const borderColor =   (section.scheme === "secondary") ? appearance.LinkStyle.Secondary.textDecorationColor : (section.scheme === "tertiary") ? appearance.LinkStyle.Tertiary.textDecorationColor :appearance.LinkStyle.Primary.textDecorationColor
  const threepxborder = {
     border: `3px solid ${bgcolor}`,
  }
  const sevenpxborderbgcolor = {
    border: `7px solid ${textColor}`,
    backgroundColor: bgcolor
 }
 const threepxborderbgcolor = {
  border: `3px solid ${bgcolor}`,
  backgroundColor: textColor
}
  const colorBorderColorStyle = {
     color:borderColor
  }
  if (section.title) {
    return (
      <div className={styles.ActionBanner} style={threepxborder}>
        <a onClick={handleContactModal} href='#' className={styles.Body} style={sevenpxborderbgcolor}>
          {section.title &&

            <H2 classNames={styles.H2} scheme={section.scheme} content={section.title} appearance={appearance} />
          }
          {section.sub_title &&
            <H3 classNames={styles.H3} scheme={section.scheme} content={section.sub_title} appearance={appearance}/>
          }
        </a>
        <a onClick={handleContactModal} aria-label="Click to open our contact form." href='#' className={styles.Action} style={threepxborderbgcolor}>
        <DoubleArrowRight ClassName={styles.Icon} Style={colorBorderColorStyle} /> 

        </a>
      </div>
    )
  }
}
