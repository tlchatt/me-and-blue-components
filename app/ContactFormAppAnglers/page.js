'use client'
import React, { useState } from 'react';
import styles from './page.module.css'
import { sendEmail } from '../../lib/SubmitForm.js'
import { P, Button } from '../../components/MicroComponents';
import { Person, Phone, Email, Message, Airplane, ThumbsUp, ThumbsDown, Close } from '../../lib/icon.js'

const appearance = {
  "colorSchemes": {
    "PrimaryBackground": "rgba(255,255,255,.75) ",
    "PrimaryForeground": "#000000",
  },
  "LinkStyle": {
    "Primary": {
      "textDecoration": "underline",
      "textDecorationColor": "#bd383d",
      "textUnderlineOffset": "3px"
    },
  },
}
const branding = {
  "Settings": {
    "Fax": "",
    "Url": "https://component.tlchatt.com/",//for email sending leave as is
    "Email": "booking@appalachiananglers.com",
    "SiteTitle": "Appalachian Anglers",
    "ContactButtonText": "Send Message"
  }
}
const section = {
  scheme: 'primary'
}
export default function Contact() {
  /**
   * Implementation as component in another site.
   * <iframe src="https://component.tlchatt.com/ContactFormAppAnglers" style="height: 700px; width:
      100%;border: 0;" id="technologic-contact"></iframe>
      <script>

        window.addEventListener("message", handleMessage);

        function handleMessage(event) {
          if(event.origin != 'https://appalachiananglers.com' ){
              console.log("Received a message from " + event.origin + ".");
            if (event.data.type == 'Contact_Submit'){
              gtag('event', 'Contact_Submit');
            }
          // When one window sends a message, or data, to another window via
          // `parent.postMessage()`, the message (the first argument) in the
          // `parent.postMessage()` call is accessible via `event.data` here.
          // Do something with the data.
          console.log(event.data);
          }

        }
      </script>
   * 
   */

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);
  const [note, setNote] = useState(appearance?.ContactForm?.note ? appearance?.ContactForm?.note : '');
  const [contactOpen, setContactOpen] = useState(false);

  const handleContactToggle = () => {
    setContactOpen(!contactOpen);
  };
  var formInfo = {}
  const handleFormInfo = (e) => {
    formInfo = { ...formInfo, [e.target.id]: e.target.value }
  };
  const handleSending = async () => {
    if (!sending) {
      setSending(true);
      var res = await sendEmail(branding, formInfo)
      setTimeout(() => {
        if (res) {
          console.log('res', res)
          setSending(false);
          setSent(true)
          setNote('Message Sent Succesfully!')
        }
        else {
          setSending(false);
          setSent(true)
          setFailed(true)
          setNote('Send failed! Please retry, or use an alternate form of contact. Sending a heads up email to gw@tlchatt.com or call or text 423-377-6111 would be greatly appreciated.')
        }
      }, 4500);
    }
  };

  const StatusSVGClass = (sending) ? `${styles.StatusSVGSending} ${styles.StatusSVG}` : (sent) ? `${styles.StatusSVGSent} ${styles.StatusSVG}` : `${styles.StatusSVG} ${styles.hidden}`
  const StatusButtonClass = (sending) ? `${styles.buttonStyle} ${styles.fadeOut}` : (sent) ? `${styles.buttonStyle} ${styles.hidden}` : styles.buttonStyle

  var Icon = (sending) ? Airplane : (failed) ? ThumbsDown : (sent) ? ThumbsUp : ThumbsUp
  var scheme = section?.scheme ? section.scheme : appearance?.ContactForm?.scheme ? appearance?.ContactForm?.scheme : "primary"
  const bgcolor = scheme == "secondary" ? appearance.colorSchemes.SecondaryBackground : scheme === "tertiary" ? appearance.colorSchemes.TertiaryBackground : appearance.colorSchemes.PrimaryBackground
  const fgcolor = scheme == "secondary" ? appearance.colorSchemes.SecondaryForeground : scheme === "tertiary" ? appearance.colorSchemes.TertiaryForeground : appearance.colorSchemes.PrimaryForeground
  const fgaccent = (scheme === "secondary") ? appearance.LinkStyle.Secondary.textDecorationColor : (scheme === "tertiary") ? appearance.LinkStyle.Tertiary.textDecorationColor : appearance.LinkStyle.Primary.textDecorationColor
  const Style = {
    backgroundColor: bgcolor,
    color: fgcolor
  }
  const SVGStyle = {
    color: bgcolor,
    background: fgaccent,
  }
  const LabelStyle = {
    color: fgcolor,
  }
  const PStyle = {
    color: fgcolor,
  }
  const InputStyle = {
    color: fgcolor,
    borderBottom: `1px solid ${fgcolor}`,
  }

  return (
    <div className={styles.ContactForm} id="Contact" style={Style}>
      {contactOpen &&
        <div className={styles.CloseDiv} onClick={handleContactToggle}>
          <Close ClassName={`${styles.SVG} ${styles.SVGClose}`} Style={Style} />
        </div>
      }


      <form id="Contact-Form" className={styles.Form}>
        <ContactFormItem id="name" content="Name" type="text" Icon={Person} />
        <ContactFormItem id="phone" content="Number" type="tel" Icon={Phone} />
        <ContactFormItem id="email" content="Email" type="email" Icon={Email} />
        <ContactFormItem id="message" content="Desired Dates, Number of People, Additional Info." type="textarea" Icon={Message} />
        <Button classNames={StatusButtonClass} content={'Send'} scheme={scheme} appearance={appearance}
          onClick={handleSending} />
        <Icon ClassName={StatusSVGClass} Style={SVGStyle} />

        <P scheme={scheme} content={note} appearance={appearance} classNames={styles.note} />

      </form>

    </div>
  )
  function ContactFormItem({ id, content, type, Icon }) {
    const [value, setValue] = useState('');
    const [active, setActive] = useState(false);
    function handleValue(e) {
      setValue(e.target.value)
      handleFormInfo(e)
    }
    function handleFocus(e) {
      setValue(e.target.value)
      setActive(true)
    }
    function handleBlur(e) {
      if (e.target.value.length == 0) {
        setActive(false)
      }
    }
    const StatusClass = sending ? `${styles.Item} ${styles.fadeOut}` : sent ? `${styles.Item} ${styles.hidden}` : styles.Item
    const PisActive = (active) ? styles.fadeOut : ``

    return (
      <div className={StatusClass} id="Item">
        <Icon ClassName={styles.SVG} Style={SVGStyle} />
        <label className={styles.Label} style={LabelStyle}>
          <P classNames={`${styles.P} ${PisActive}`} scheme={scheme} content={content} appearance={appearance} style={PStyle} />
          {type === "textarea" &&
            <textarea type={type} id={id} name={id} className={styles.TextArea} style={InputStyle}
              onFocus={e => handleFocus(e)}
              onBlur={e => handleBlur(e)}
              onChange={e => handleValue(e)}
              value={value}
            />
          }
          {!(type === "textarea") &&
            <input type={type} id={id} name={id} className={styles.Input} style={InputStyle}
              onFocus={e => handleFocus(e)}
              onBlur={e => handleBlur(e)}
              onChange={e => handleValue(e)}
              value={value}
              required
            />
          }
        </label>
      </div>
    )
  }
}