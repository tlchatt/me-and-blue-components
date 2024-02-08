import Image from "next/image"
import { HeroText } from './HeroText'
import styles from './HeroImage.module.scss'

export const HeroImage = ({ section, appearance, branding }) => {
  var absoluteURL = branding.Settings.Url
  console.log(`${absoluteURL}${section.src}`)

  var backgroundposition = '50%'
  if (section.backgroundPosition) {
    backgroundposition = section.backgroundPosition
  }
  if (section.title) {
    return <>
      <div className={styles.HeroImage}>
        <Image
          src={`${section.src}`}
          alt={section.alt}
          priority='true'
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition:  backgroundposition 
          }} />
        <HeroText appearance={appearance} section={section} />
      </div>

    </>;
  }
  return (
    <div className={styles.HeroImage}>

    </div>
  )


}
