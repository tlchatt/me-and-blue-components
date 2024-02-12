'use client'
import { GlobalContextProvider } from '@/components/Context';
import FooterNav from "@/components/nav/FooterNav"
import { Form } from "@/components/Form";
const appearance = {
  "colorSchemes": {
    "PrimaryBackground": "#333",
    "PrimaryForeground": "#fff",
  },
  "LinkStyle": {
    "Primary": {
      "textDecoration": "underline",
      "textDecorationColor": "#840f39",
      "textUnderlineOffset": "3px"
    },
    "FooterNav":{
      "scheme":"primary"
    }
  },
}
const branding = {
  "Settings": {
    "Fax": "",
    "Url": "https://component.tlchatt.com/",//for email sending leave as is
    "Email": "kathryn@kyattkinglaw.com",
    "Phone":"(205) 218-9337",
    "SiteTitle": "Kathryn Kyatt King Attorney at Law",
    "ContactButtonText": "Send Message",
    "CallButtonText": "Call Now",
  }
}
let contactSection = {
  "type": "contact-form",
  "scheme": "primary",
  "info": {
      "link": {
          "p": "Get Help",
          "href": "https://tlchatt.com/web-development/micro-services/analytics-install-service"
      },
      "image": "/images/CumberlandLandSpecialistsLogo.webp",
      "title": "Land Specialist Consultation",
      "length": "15 min",
      "description": "Schedule a time for a phone call or a digital meeting with one of our land specialists, to discuss your land and real estate needs and goals. Lets find out if we make a good team, and see how we can help you."
  },
  "steps": [

      "contact_info_form"
  ],
  "contact_info_form": {
      "title": "Contact Information",
      "inputs": [
          {
              "type": "text",
              "content": "Name",
              "id": "name",
              "icon": "Person"
          },
          {
              "type": "tel",
              "content": "Phone Number",
              "id": "phone",
              "icon": "Phone"
          },
          {
              "type": "email",
              "content": "Email",
              "id": "email",
              "icon": "Email"
          },
          {
              "type": "textarea",
              "content": "Message",
              "id": "message",
              "icon": "Message"
          }
      ]
  },
  "notes": "Specify Time Zone in this format https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"
}
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
export default function Page() {
  return (
      <GlobalContextProvider>
      
        <Form section={contactSection} appearance={appearance} branding={branding}  />


      </GlobalContextProvider>
  )

return(
  <FooterNav appearance={appearance}
  branding={branding} />
)
}