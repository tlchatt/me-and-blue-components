//import { logEvent1, logEventProblem } from '../components/head/AnalyticsGA4'
export async function sendEmail( branding,formInfo) {
console.log("Send Email")
/*
  const form_info = {
    to: branding.Settings.Email,
    bcc: 'greggorywiley@tlchatt.com',
    from: 'contact@tlchatt.com',
    replyTo: email,
    subject: `${branding.Settings.SiteTitle} Contact Form Submission from ${name}`,
    message: message,
    name:name,
    email:email,
    phone:phone
  }*/
  formInfo.to = branding.Settings.Email
  formInfo.bcc = 'contact@tlchatt.com',
  formInfo.from ='contact@tlchatt.com',
  formInfo.replyTo = formInfo.email
  formInfo.subject = `${branding.Settings.SiteTitle} Contact Form Submission from ${formInfo.name}`
  console.log(formInfo)
  try {
    const response = await fetch(`${branding.Settings.Url}/sendEmail`, {
      mode: 'cors', // no-cors, *cors, same-origin //Opaque response if no cors. 
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formInfo)
    })
    if (!response.ok) {
      console.log('Submit Form !OK')
      console.log(error)
      logEventProblem()
      return false
    }
    else {
     // logEvent1()
      return true
    }
  }
  catch (error) {
    console.log('Submit catch Error')
    console.log(error)
    //logEventProblem()
    return false
  }
}
