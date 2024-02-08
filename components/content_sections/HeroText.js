
import { Colors, hexToRGB } from '@/lib/colors.js'
import {H1, H2, Button} from '../MicroComponents'
import styles from './HeroText.module.scss'
export const HeroText = ({ section, appearance}) => {
 /** NOTES:
 * console.log('Component() Component: ', Component)
 * console.log(' HeroText = ({section}', section, '{appearance}', appearance)
 * 
 * 
 * 
 * 
*/

  let { bgcolor } = Colors(appearance, section?.scheme)

  var HeroImageInnerStyle = {
    backgroundColor: hexToRGB(bgcolor, .75)
  }
  var ButtonStyle = {
   width:'unset',
   backgroundColor:'unset'
  }

    return (
      
        <div className={styles.HeroText} style={HeroImageInnerStyle} id='HeroText'>
            {section.title &&
              <H1  classNames={styles.H1} scheme={section?.scheme} content={section.title} appearance={appearance}/>
            }
            {section.sub_title &&
             <H2  classNames={styles.H2} scheme={section?.scheme} content={section.sub_title} appearance={appearance}/>
            }
            {section.button_text &&
              <Button href={section.href} appearance={appearance} scheme={section?.scheme} content={section.button_text} style={ButtonStyle} />
            }
        
        </div>
  
    )
}
