import { Button } from '../MicroComponents'
import { Phone, Message } from '../../lib/icon'
import { logEvent2 } from '../head/AnalyticsGA4'
import styles from './FooterNav.module.scss'
import { Form } from "@/components/Form";
import { Colors, hexToRGB } from '../../lib/colors.js'
import { useGlobalContext } from '@/components/Context'
export default function FooterNav({ appearance, branding }) {
  let { contactModal, handleContactModal } = useGlobalContext()
  let scheme = (appearance?.FooterNav?.scheme) ? appearance?.FooterNav?.scheme : 'primary'
  let { fgcolor, bgcolor } = Colors(appearance, scheme)
  const svgStyle = {
    color: fgcolor
  }
  const buttonStyle = {
    color: fgcolor,
    backgroundColor: bgcolor,
    borderColor: bgcolor
  }
  const FooterNavStyle = {
    backgroundColor: bgcolor,
    color: fgcolor,
    justifySelf: 'end',
    bottom: '0',
    position: 'fixed',
    maxWidth: '1920px',
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    zIndex: '1100'
  }
  const ContactToolBarStyle = {
    filter: `drop-shadow(0 0 4px ${hexToRGB(fgcolor, .40)}`
  }
  function handleModalToggle(e) {
    if (e.target === e.currentTarget) {
      handleContactModal()
    }
  }
  const ContactModalClass = (contactModal) ? styles.contactModalOpen : styles.contactModalClosed
  const contactButtonText = branding.Settings.ContactButtonText ? <><Message ClassName={styles.SVG} Style={svgStyle} /> {branding.Settings.ContactButtonText}</> : "Send Message"
  const callButtonText = branding.Settings.CallButtonText ? <> <Phone ClassName={styles.SVG} Style={svgStyle} />{branding.Settings.CallButtonText} </> : "Call Now"

  return (
    <>
      <div style={FooterNavStyle} id="FooterNav">
        <div className={`${styles.ToolBar} ${styles.contactToolBar}`} style={ContactToolBarStyle}>
          {branding?.Settings?.Email && (
            <div>
              <Button classNames={styles.footerNavButton} content={contactButtonText} onClick={'handleContactToggle'} scheme={scheme} appearance={appearance} style={buttonStyle} />
            </div>
          )}
          {branding?.Settings?.Phone && (
            <div>
              <Button classNames={styles.footerNavButton} content={callButtonText} href={`tel:${branding?.Settings?.Phone}`} scheme={scheme} appearance={appearance} onClick={logEvent2} style={buttonStyle} />
            </div>
          )}
        </div>
        <div className={ContactModalClass} onClick={e => handleModalToggle(e)}>
          <Form appearance={appearance} branding={branding} handleContactModal={handleContactModal} contactModal={contactModal} />
        </div>
      </div>

    </>
  )


};

