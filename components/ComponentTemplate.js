'use client'
import React, { useState } from 'react';
import { sendEmail } from '../lib/SubmitForm.js'
import styles from './ContactForm.module.scss'
import { H3, H5, P, Button } from './MicroComponents.js';
import { Colors } from '@/lib/colors';
import { Airplane, ThumbsUp, ThumbsDown, Close, Icon } from '../lib/icon.js'
import { useMediaQuery } from '@/lib/statefulUtils'
import DatePicker from "react-datepicker";
import { useGlobalContext } from '@/components/Context'


export const Component = ({ section, appearance, branding }) => {
  let { contactModal, handleContactModal } = useGlobalContext()
/** NOTES:
 * console.log('Component() Component: ', Component)
 * console.log(' Component = ({section}', section, '{appearance}', appearance, '{branding}', branding')
 * 
 * 
 * 
 * 
*/

/**Section Data Registartion */
    let defaultSection = {
    }
    if (!section) {// Set appearance.ContactForm as section if not called via a "section"
      console.log('Component = ({ section, appearance, branding }) => { !if (!section)')
      // section = appearance?.ContactForm ? appearance?.ContactForm : defaultSection
      section = defaultSection
    }
/**Section Data Registartion */
/**Variables, States, Handlers, Hooks Registartion */
    const [state, setState] = useState(null);
    let nonStateVar = {} //State Causes Rerender.
    const handleState = async () => {

    };
    const handleStateE = async (e) => {

    };
    const isSmall = useMediaQuery('(min-width: 640px)');
    const isMedium = useMediaQuery('(min-width: 1024px)');
    const isLarge = useMediaQuery('(min-width: 1536px)');
    const isXLarge = useMediaQuery('(min-width: 1920px)');
/**Variables, States, Handlers, Hooks Registartion */

/**Section Color, Class, Styles, SVGs, Registartion */
  const StatusClassBiDirectional = (state) ? `` : ``
  const StatusClassTriDirectional = (state) ? `` : (stated) ? `` : ``
  let scheme = section.scheme
  let { fgcolor, bgcolor } = Colors(appearance, scheme)

  const Style = {
    backgroundColor: bgcolor,
    color: fgcolor
  }
  const InvertStyle = {
    color: bgcolor,
    background: fgaccent,
  }

/**Section Color, Class, Styles, SVGs, Registartion */
return null
return (
  <div style={Style} id='Component'>
    {section.title &&
      <H3 scheme={scheme} content={section.title} appearance={appearance} />
    }
    <ComponentInner />
  </div>
)
function ComponentInner() {

  if (!inputs) { return (<h1>No Inputs Provided to ContactForm - ContactFormInner</h1>) }
  return (
    <div id="ComponentInner" >

      <ComponentItem item={item} />
    </div>
  )

  function ComponentItem({ item }) {
    let { id, content, type, icon } = item
    /* NOTES
     *
    console.log('id', id)
    console.log('content', content)
    console.log('type', type)
    console.log('icon', icon)
    */


    return (
      <div id={ComponentItem}>

      </div>
    )
  }
}
}