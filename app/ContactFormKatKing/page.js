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
  "title":"Start Protecting Your Future",
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
   * <iframe src="https://component.tlchatt.com/ContactFormKatKing" style="height: 450px; width:
      100%;border: 0;" id="technologic-contact"></iframe>
      <script>

        window.addEventListener("message", handleMessage);
    function handleMessage(event) {
        if (event.origin == 'https://component.tlchatt.com') {
            console.log("Received a message from " + event.origin + ".");
            console.log("Event a message from " + event.data + ".");
            if (event.data.type == 'Contact_Submit') {
                gtag('event', 'Contact_Submit');
            }
            if (event.data.type == 'Contact_Click_To_Call') {
                gtag('event', 'Contact_Click_To_Call');
            }
            if (event.data.type == 'Contact_Problem') {
                gtag('event', 'Contact_Problem');
            }
            console.log(event.data);
        }

      </script>
      	<?php echo do_shortcode($service_form_shortcode); ?>
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