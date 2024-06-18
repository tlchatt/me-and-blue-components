
import React, { useState } from 'react';
import { sendEmail } from '../lib/SubmitForm.js'
import styles from './Form.module.scss'
import { H3, H5, P, Button } from './MicroComponents.js';
import { Colors } from '@/lib/colors';
import { Airplane, ThumbsUp, ThumbsDown, Close, Icon } from '@/lib/icon.js'
import { useMediaQuery } from '@/lib/statefulUtils'
import DatePicker from "react-datepicker";
import {useGlobalContext} from '@/components/Context'


export const Form = ({ section, appearance, branding }) => {
  let {contactModal,handleContactModal} = useGlobalContext()


  /** NOTES:
   * Add Mask for clean formating. 
   * Add email validation
   * Handle required and incomplete.
   * Detect spam
   * fonts for message and longer emails
   * console.log('Form() section: ', section)
  */

  /**Section Data Registartion */
  let defaultSection = {
    "steps": [
      "contact_info_form"
    ],
    "contact_info_form": {
      "inputs": [
        {
          "type": "text",
          "content": "Name",
          "id": "name",
          'icon': "Person"
        },
        {
          "type": "tel",
          "content": "Phone Number",
          "id": "phone",
          'icon': "Phone"
        },
        {
          "type": "email",
          "content": "Email",
          "id": "email",
          'icon': "Email"
        },
        {
          "type": "textarea",
          "content": "Message",
          "id": "message",
          'icon': "Message"
        }
      ]
    }
  }
  if (!section) {// Set appearance.ContactForm as section if not called via a "section"
    section = appearance?.ContactForm ? appearance?.ContactForm : defaultSection
  }
  section.steps = section?.steps ? section?.steps : defaultSection.steps
  /**Section Data Registartion */

  /**Variables, States, Handlers Registartion */
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);
  const [note, setNote] = useState(appearance?.ContactForm?.note);
  //console.log('note() : ', note)
  let formInfo = {} //State Causes Rerender.
  const handleSending = async () => {
    console.log('handleSending = async () => {')
    if (!sending) {
      /* Validate without refreshing entire form
        if (!(await validateForm(formInfo))) {
          return
        }
      */
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
          setNote('Send failed! please tr again, try an alternate form of contact. Sending a heads up email to gw@tlchatt.com or call or text 423-377-6111, if the problem continues, would be greatly appreciated.')
        }
      }, 5000);
    }
  };
  
  const handleFormInfo = (e) => {
    formInfo = { ...formInfo, [e.target.id]: e.target.value }
    console.log('formInfo= {} in handle', formInfo)
  };
  
  /**Variables, States, Handlers Registartion */

  /**Section Color, Class, Styles, SVGs, Registartion */
  const StatusSVGClass = (sending) ? `${styles.StatusSVGSending} ${styles.StatusSVG}` : (sent) ? `${styles.StatusSVGSent} ${styles.StatusSVG}` : `${styles.StatusSVG} ${styles.hidden}`
  const StatusButtonClass = (sending) ? `${styles.buttonStyle} ${styles.fadeOut}` : (sent) ? `${styles.buttonStyle} ${styles.hidden}` : styles.buttonStyle
  var StatusIcon = (sending) ? Airplane : (failed) ? ThumbsDown : (sent) ? ThumbsUp : ThumbsUp

  let scheme = section.scheme
  let { fgcolor, bgcolor } = Colors(appearance, scheme)
  const fgaccent = (scheme === "secondary") ? appearance.LinkStyle.Secondary.textDecorationColor : (scheme === "tertiary") ? appearance.LinkStyle.Tertiary.textDecorationColor : appearance.LinkStyle.Primary.textDecorationColor
  const Style = {
    backgroundColor: bgcolor,
    color: fgcolor
  }
  const SVGStyle = {
    color: fgcolor,
    background: bgcolor,
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
  /**Section Color, Class, Styles, SVGs, Registartion */
  
  return (
    <div style={Style} id='ContactForm'  className={styles.ContactForm}>
      {section.title &&
        <H3 scheme={scheme} content={section.title} appearance={appearance} />
      }
      <FormInner/>
    </div>
  )
  function FormInner() {
    
    const [stepCount, setStepCount] = useState(0);
    const [step, setStep] = useState(section.steps[stepCount]);
    const handleSetStep = () => {
   //   console.log(' const handleSetStep = () => {Step on run', step, '#', stepCount)
      setStepCount(stepCount + 1)
      setStep(section.steps[stepCount + 1])
    }
  //  console.log(' ContactFormInner() => {Step on run', step, '#', stepCount)
    let inputs = section?.[step]?.inputs ? section?.[step]?.inputs : defaultSection?.[step]?.inputs
    if (!inputs) { return (<h1>No Inputs Provided to ContactForm - ContactFormInner</h1>) }
    return (
      <div  id="Contact" >
        {contactModal &&
          <div className={styles.CloseDiv} onClick={handleContactModal}>
            <Close ClassName={`${styles.SVG} ${styles.SVGClose}`} Style={Style} />
          </div>
        }
        <form id="Contact-Form" className={styles.Form}>
          {inputs &&
            inputs.map((item, index) => (
              <FormItem item={item} key={index} />
            ))
          }
          {stepCount == (section.steps.length - 1) &&
            < Button classNames={StatusButtonClass} content={'Send'} scheme={scheme} appearance={appearance}
              onClick={handleSending} />
          }
          <StatusIcon ClassName={StatusSVGClass} Style={SVGStyle} />
          {note &&
            <P scheme={scheme} content={note} appearance={appearance} classNames={styles.note} />
          }
        </form>
      </div>
    )

    function FormItem({ item }) {
      
      let { id, content, type, icon } = item
      /* NOTES
       * Values set to local input and also synched out to higher level variable.
      console.log('id', id)
      console.log('content', content)
      console.log('type', type)
      console.log('icon', icon)
      */


      const [selectedDate, setSelectedDate] = useState(new Date(Date.now() + 1 * 24 * 60 * 60 * 1000));
      const handleDateChange = (date) => {
        console.log(' const handleDateChange = (date) => {', date)
        setSelectedDate(date)
        let newe = {
          target: {
            id: 'DateTime',
            value: date
          }
        }
        handleSetStep()
        handleFormInfo(newe)
      }
      const handleDateSelect = () => { }
      const StatusClass = sending ? styles.fadeOut : sent ? styles.hidden : ''
   
      return (
        <div className={StatusClass}>
          {type === "date-pick" &&
            <SchedulingDatePick appearance={appearance} />
          }
          {type === "time-pick" &&
            <SchedulingTimePick appearance={appearance} />
          }
          {!(type === "date-pick") && !(type === "time-pick") &&
            <FormFields />
          }
        </div>
      )
      function SchedulingDatePick() {
        
        //console.log('section ', section)
        /**Notes / Todo:
         */
        const isWeekday = (date) => {
          const day = date.getDay();
          return day !== 0 && day !== 6 && date > new Date();
        };
        let item = section?.[step]
        var H3Style = {
          marginTop: '1rem'
        }
        return (
          <div className="grid place-content-center ">
            {(item.title) &&
              <H3 scheme={section?.scheme} content={item.title} appearance={appearance} style={H3Style} />
            }
            <DatePicker
              selected={selectedDate}
              onSelect={handleDateSelect}
              onChange={handleDateChange}
              filterDate={isWeekday}
              inline />
          </div>
        )
      }
      function SchedulingTimePick() {
        /**
         * Notes
         * 
         */
        const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
        let item = section?.[step]
        //console.log('SchedulingTimePick item', item.inputs)
        var H3Style = {
          marginTop: '1rem'
        }
        return (
          <>
            {(item.title) &&
              <H3 scheme={section?.scheme} content={item.title} appearance={appearance} style={H3Style} />
            }
            <div className={'grid grid-cols-2 place-items-center'}>
              {item.inputs[0].times &&
                item.inputs[0].times.map((time) => (
                  <TimeBlock time={time} key={`${time.hour} ${time.minute}`} />
                ))
              }
            </div>
            <H5 classNames={`mt-4 sm:mt-8 justify-self-center self-center`} scheme={section?.scheme} content={localTimeZone} appearance={appearance} />
          </>
        )
        function TimeBlock({ time }) {
          let item = section?.[step]
          let timeZone = item.inputs[0].time_zone
          const [selectedTime, setSelectedTime] = useState(selectedDate);
          function handleSelectedTime() {
            setSelectedTime(timeSlot)
            handleDateChange(timeSlot)
            //console.log('timeSlot.toLocaleTimeString() ', timeSlot.toLocaleTimeString())
          }

          const getTimeinUserTZ = (targetDate, targetTimeZone, targetHourMinute) => {
            /**
             * This function will return a dateTime, expressed in the users current timezone,
             * accurately including time changes variance. 
             * Parameters, the originally intented time, date, timezone (non local to user)
             ** targetDate, a date object, the originally intented date (non local to user)
             *** Example: new Date(2023, 10, 10, 10, 30)
             ** targetHourMinute:hour and minute expressed in array format, originally intented time (non local to user)
             *** Example var targetHourMinute = [12,30]
             ** targetTimeZone, a date object, the originally intented timeZone (non local to user)
             *** Example: var originalTimeZone = 'US/Central' 
             *** Requires a 'tz database time zone' name aka an IANA timezone name
             *** Usefull list here https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
             *** Date.prototype.toLocaleString() usng IANA time zone names is widely supported
             *** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString#browser_compatibility
             * https://stackoverflow.com/questions/63040256/sethours-in-different-timezones/76390582#76390582 (answered)
             * ** get locaTimezone.   const localString = Intl.DateTimeFormat().resolvedOptions().timeZone
             */
            targetDate.setHours(targetHourMinute[0], targetHourMinute[1])
            // ^-- Gets datetime of target hours and minutes, on the given date, set in wrong timeZone(user)
            const dateTZShifted = targetDate.toLocaleString("en-US", { timeZone: targetTimeZone, dateStyle: 'long', timeStyle: 'long', hour12: false })
            // ^-- Gets the wrongly set datetime string in the targetTimeZone (to calculate offest)
            const dateLocalTZ = targetDate.toLocaleString("en-US", { dateStyle: 'long', timeStyle: 'long', hour12: false })
            // ^-- Gets the wrongly set datetime string in the user time zone (to calculate offest)

            let timeTZShifted = dateTZShifted.split(" ").slice(4, 5).join(' ').toString().split(':')
            var originalTime = dateLocalTZ.split(" ").slice(4, 5).join(' ').toString().split(':')
            // ^-- String Manipulation of LocaleString to get array of [Hour,Minute,Seconds]
            let newLocalTime = [
              Number(originalTime[0]) - Number(timeTZShifted[0]) + Number(originalTime[0]),
              Number(originalTime[1]) - Number(timeTZShifted[1]) + Number(originalTime[1]),
              0
            ]
            // ^-- Uses the difference between the two (offset) to get a correct [Hours, Minute] in user timezone
            let outputDate = new Date(targetDate)
            outputDate.setHours(Number(newLocalTime[0]), Number(newLocalTime[1]), Number(newLocalTime[2]))

            //console.log('outputDateTime in User timezone', outputDate.toLocaleString("en-US", { dateStyle: 'long', timeStyle: 'long' }))
            return (outputDate)
          }

          let timeSlot = getTimeinUserTZ(selectedDate, timeZone, [time.hour, time.minute])
          let localTimeString = timeSlot.toLocaleTimeString()

          const isSmall = useMediaQuery('(min-width: 640px)');

          var ButtonStyle = {
            padding: '7px 0 7px 0',
            width: '90%',
            fontSize: (!isSmall) ? '1.15rem' : '1.15rem',//4xl vs 5xl'1.25rem',
            margin: '.5rem auto',
            cursor: 'pointer'
          }
          return (
            <>
              <Button style={ButtonStyle} content={localTimeString} scheme={section?.scheme} appearance={appearance} item='unset' onClick={handleSelectedTime}
              />
            </>


          )

        }
      }
      function FormFields() {

        let initValue
        if (type === 'checkbox') { 
          initValue = true 
          let newe = {
            target: {
              id: id,
              value: initValue
            }
          }
          handleFormInfo(newe)//register in case left checked
        }
        else { initValue = '' }
        const [value, setValue] = useState(initValue);
        const [active, setActive] = useState(false);
        function handleValue(e) {
          if (type === 'checkbox') {
            setValue(!value)
            let newe = {
              target: {
                id: e.target.id,
                value: !value
              }
            }
             handleFormInfo(newe)
          }
          else {
            setValue(e.target.value)
            handleFormInfo(e)
          }
        }
        function handleActive(e) {
          if (type === 'checkbox') {
            return
          }
          if (e.target.value.length == 0) {
            setActive(!active)
          }
        
        }
        const PisActive = (active) ? styles.fadeOut : ``
        
        const CheckBoxStyle = {
          borderColor: fgcolor,
        }

        return (
          <div className={`${styles.Item} ${StatusClass}`} id="Item">
            <Icon ClassName={styles.SVG} Style={SVGStyle} Name={icon} />
            <label className={styles.Label} style={LabelStyle}>
              {content &&
                <P classNames={`${styles.P} ${PisActive}`} scheme={scheme} content={content} appearance={appearance} style={PStyle} />
              }
              {type === "textarea" &&
                <textarea type={type} id={id} name={id} className={styles.TextArea} style={InputStyle}
                  onFocus={e => handleActive(e)}
                  onBlur={e => handleActive(e)}
                  onChange={e => handleValue(e)}
                  value={value}
                />
              }
              {type === "checkbox" &&
                <input type={type} id={id} name={id} className={styles.CheckBox} style={CheckBoxStyle}
                  onFocus={e => handleActive(e)}
                  onBlur={e => handleActive(e)}
                  onChange={e => handleValue(e)}
                  value={value}
                  checked={value}
                />
              }
              {!(type === "textarea") && !(type === "checkbox") &&
                <input type={type} id={id} name={id} className={styles.Input} style={InputStyle}
                  onFocus={e => handleActive(e)}
                  onBlur={e => handleActive(e)}
                  onChange={e => handleValue(e)}
                  value={value}
                />
              }
            </label>
          </div>
        )
      }
    }
  }
  async function validateForm(formInfo) {//Need this
    console.log('validateForm', formInfo)
    if (!formInfo.phone) {
      console.log('no number')
      setNote('Please enter your phone number.')
      return (false)
    }
    if (!formInfo.email) {
      console.log('no email')
      setNote('Please enter your email.')
      return (false)
    }
    return true
  }
}