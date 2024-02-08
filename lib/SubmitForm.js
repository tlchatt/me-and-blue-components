import { logEvent1, logEventProblem } from '../components/head/AnalyticsGA4'
export async function sendEmail( branding, data) {
  console.log("Send Email")
  data.to = branding.Settings.Email
  data.bcc = 'contact@tlchatt.com',
  data.from ='contact@tlchatt.com',
  data.replyTo = data.email
  data.subject = `${branding.Settings.SiteTitle} Contact Form Submission from ${data.name}`

  try {
    const response = await fetch(`${branding.Settings.Url}/sendEmail`, {
      mode: 'cors', // no-cors, *cors, same-origin //Opaque response if no cors. 
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      console.log('Submit Form !OK')
      console.log(error)
      logEventProblem()
      return false
    }
    else {
      logEvent1()
      return true
    }
  }
  catch (error) {
    console.log('Submit catch Error')
    console.log(error)
    logEventProblem()
    return false
  }
}
