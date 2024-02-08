import { MapIcon } from '../../lib/icon'
import { P, H2, Button } from '../MicroComponents.js'
import styles from './LocationList.module.scss'
export const LocationList = ({ section, appearance }) => {
  let scheme = section.scheme
  const bgcolor = scheme == "secondary" ? appearance.colorSchemes.SecondaryBackground : scheme === "tertiary" ? appearance.colorSchemes.TertiaryBackground : appearance.colorSchemes.PrimaryBackground
  const fgaccent = (scheme === "secondary") ? appearance.LinkStyle.Secondary.textDecorationColor : (scheme === "tertiary") ? appearance.LinkStyle.Tertiary.textDecorationColor : appearance.LinkStyle.Primary.textDecorationColor

  const SVGStyle = {
    color: bgcolor,
    background: fgaccent,
  }

  return (
    <div className={styles.LocationList}>
          <div className={styles.LocationListInner}>
        {section.title &&
          <H2 content={section.title}  scheme={section?.scheme} appearance={appearance} />
        }
      <div className={styles.Content}>
        <div className={styles.LocationList}>
          <ul className={styles.UL}>
            {section.locations &&
              section.locations.map((item, key) => (
                <Location item={item} key={item.text} scheme={section?.scheme} appearance={appearance} />
              ))
            }
          </ul>
        </div>
        <div className={styles.OtherContent} >
          {section.content &&
            section.content.map((item, key) => (
              <Content item={item} key={key} scheme={section?.scheme} appearance={appearance} />
            ))
          }
        </div>
      </div>
    </div>
    </div>
  )
  function Location({ item }) {
    //Need to add even odd alt={item?.alt ? item.alt : 'test' } good format if you wanted to return some alt.
    return (
      <li className={styles.LI}>
        <MapIcon ClassName={styles.SVG} Style={SVGStyle} />
        {item.link &&
          <a href={item.link}>
           
            <P appearance={appearance} content={item.text} scheme={scheme} id={item?.id}/>
          </a>
        }
        {!item.link &&
               <P appearance={appearance} content={item.text} scheme={scheme} id={item?.id}/>
        }
      </li>
    )
  }
  function Content({ item, scheme, appearance }) {
    //Need to add even odd alt={item?.alt ? item.alt : 'test' } good format if you wanted to return some alt.
    return (
      <>
        {item.paragraphText &&
          <P classNames={styles.ParagraphText} content={item.paragraphText} scheme={scheme} appearance={appearance} />
        }
        {item.button_text && item.href &&
          <a href={item.href} >
            <Button appearance={appearance} scheme={scheme} content={item.button_text} classNames={styles.ButtonStyle} />
          </a>
        }
      </>
    )
  }
}
