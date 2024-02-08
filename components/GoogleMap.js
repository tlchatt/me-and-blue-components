
import Image from "next/image"
import React, { useEffect } from 'react';
import styles from './GoogleMap.module.scss'
import { P } from "@/components/TWMicroComponents"
import { useMediaQuery } from '@/lib/statefulUtils'
export const GoogleMap = ({ branding, appearance, section }) => {
  //30:15  Warning: Assignments to the 'lockout' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect.  react-hooks/exhaustive-deps
  let defaultSection = {
    "notes": ""
  }
  section = { ...defaultSection, ...section }
  let lockout = false
  useEffect(() => {// for better lighthouse score dynamically load in real google map
    if (!lockout) {
      var map = document.querySelector('#google-map');
      var frame = document.createElement('iframe');
      frame.src = section.IframeSrc
      frame.width = "100%"
      frame.height = "450"
      if (branding.Layout[0].IframeTitle) {
        frame.title = branding.Layout[0].IframeTitle
      }
      map.appendChild(frame);
      var staticImages = document.querySelectorAll('#google-map-static-image');
      staticImages.forEach(element => {
        element.remove()
      })

    }
    lockout = true

  }, [branding.Layout, section.IframeSrc]);
  const isLarge = useMediaQuery('(min-width: 1200px)');
  let BigPaperStyle = {
    marginTop: '32px',
    boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    borderRadius: '4px',
  }
  if (section) {
    return (
      <div style={BigPaperStyle} >
        <div className={styles.card}>
          <div id="google-map" />
          {section.P &&
            <P classNames={`my-6 sm:my-8`} content={section.P} scheme={section?.scheme} appearance={appearance} />
          }
        </div>
        {section?.iframeStaticImageUrlMobile &&
          <div className={`${styles.imageWrapper} ${styles.mobile}`} id="google-map-static-image">
            <Image
              src={`${section.iframeStaticImageUrlMobile}`}
              alt={section?.alt ? section.alt : 'google-map-embed'}
              fill
              sizes="(min-width: 640px) 75vw, 100vw"
              style={{
                objectFit: "contain",
                objectPosition: "center"
              }} />
          </div>

        }
        {section?.iframeStaticImageUrlDesktop &&
          <div className={`${styles.imageWrapper} ${styles.nonMobile}`} id="google-map-static-image">
            <Image
              src={`${section.iframeStaticImageUrlDesktop}`}
              alt={section?.alt ? section.alt : 'google-map-embed'}
              izes="(min-width: 640px) 75vw, 100vw"
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
                objectPosition: "center"
              }} />
          </div>
        }
        <a id="location" name="location" />
      </div >
    );
  }

  try {
    throw Error("No section for Google Map Layout");
  } catch (e) {
    console.log("for Error()");
    console.log(e);
  }



}
export default GoogleMap