import Icon from '@mdi/react';
import { mdiFacebook, mdiInstagram, mdiTwitter, mdiPinterest, mdiYoutube, mdiGoogle } from '@mdi/js'
import styles from './SocialNav.module.scss'
import {Colors, hexToRGB} from '../../lib/colors.js'
import { useMediaQuery } from '@/lib/statefulUtils'

export default function SocialNav({ branding, appearance }) {
const isHighRes = useMediaQuery('(min-width: 1836px)');
let {fgcolor,bgcolor} = Colors( appearance, appearance?.SocialNav?.scheme)
  const SocialNavStyle = {
    justifySelf:'end',
    position: 'fixed',
    top: '0',
    left:'auto',
    width: '100%',
    maxWidth: isHighRes ? '1536px' : 'calc(100% - 300px)',
    zIndex: '1100',
    backgroundColor: bgcolor,
    color: fgcolor,
    borderBottom: `1px solid ${hexToRGB(fgcolor, .15)}`
  }
  const SocialIconStyle = {
    color:`${hexToRGB(fgcolor, .90)}`
  }

  return (
    <nav className={`${styles.socialAppBar} ${styles.HiddensmDown}`} style={SocialNavStyle} id="SocialNav">
      <div className={`${styles.ToolBar}`}>
        <div className={styles.menuSocialNav}>
    

            {branding?.Social?.Facebook && (
              <a href={branding.Social.Facebook} className={styles.socialButton} style={SocialIconStyle}>
                <Icon path={mdiFacebook} title="Facebook Link" size='48px' />
              </a>
            )}

            {branding?.Social?.Instagram && (
              <a href={branding.Social.Instagram} className={styles.socialButton} style={SocialIconStyle}>
                <Icon path={mdiInstagram} title="Instagram Link" size='48px' href={branding.Social.Instagram} />
              </a>
            )}

            {branding?.Social?.Twitter && (
              <a href={branding.Social.Twitter} className={styles.socialButton} style={SocialIconStyle} >
                <Icon path={mdiTwitter} title="Twitter Link" size='48px' />
              </a>
            )}

            {branding?.Social?.Pinterest && (
              <a href={branding.Social.Pinterest} className={styles.socialButton} style={SocialIconStyle}>
                <Icon path={mdiPinterest} title="Pinterest Link" size='48px' />
              </a>
            )}

            {branding?.Social?.Youtube && (
              <a href={branding.Social.Youtube} className={styles.socialButton} style={SocialIconStyle}>
                <Icon path={mdiYoutube} title="Youtube Link" size='48px' />
              </a>
            )}

            {branding?.Social?.Google && (
              <a  href={branding.Social.Google} className={styles.socialButton} style={SocialIconStyle}>
                <Icon path={mdiGoogle} title="Google Link" size='48px' />
              </a>
            )}

        </div>
      </div>
    </nav>

  )

}