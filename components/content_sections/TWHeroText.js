import {H1, H3, P, Button} from '../TWMicroComponents.js'
import { useMediaQuery } from '../../lib/statefulUtils'
import { Colors, hexToRGB } from '../../lib/colors.js'


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
console.log(' HeroText = ({section}', section, '{appearance}', appearance)
    let { fgcolor, bgcolor } = Colors(appearance, section.scheme)
    const isSmall = useMediaQuery('(min-width: 640px)');
    var HeroImageInnerStyle = {
      backgroundColor: hexToRGB(bgcolor, .75)
    }
    var H1Style={
        fontSize: (!isSmall) ? '1.75rem': '2.5rem',//4xl vs 5xl
        lineHeight: (!isSmall) ? '1': '1',
        marginTop: '0.25rem',
        marginBottom: '0.25rem',
        textAlign:'center'
    }
    var ButtonStyle={
        fontSize: (!isSmall) ? '1.25rem': '1.75rem',//4xl vs 5xl'1.25rem',
        lineHeight: (!isSmall) ? '1.5rem': '2.25rem',//4xl vs 5xl'1.25rem',
        padding: (!isSmall) ? '.5rem 1rem' :  '.75rem 1.5rem',
        margin:'.5rem auto'
    }
  
    return (
        <div className={`z-20 grid relative px-2 py-1 m-2 sm:m-4 sm:px-8 sm:py-8 w-11/12   justify-self-center self-end`}  style={HeroImageInnerStyle}>
            {'title' in section &&
                <H1 classNames={`w-full my-1 font-bold `} scheme={section.scheme} content={section.title} appearance={appearance} style={H1Style}/>
            }
            {'sub_title' in section &&
                <H3  scheme={section.scheme} content={section.sub_title} appearance={appearance}/>
            }
            {'p' in section &&
                <P className={`w-full font-medium  text-md sm:text-2xl`} scheme={section.scheme} content={section.p} appearance={appearance}/>
            }
        {section.button_text &&
            
            <Button content={section.button_text} href={section.href} scheme={section?.scheme} appearance={appearance} item={section} onClick={section.onClick}  style={ButtonStyle}/>
            }
        </div>
    )
}
