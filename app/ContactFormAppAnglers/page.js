'use client'
import { GlobalContextProvider } from '@/components/Context';
import FooterNav from "@/components/nav/FooterNav"
import { Form } from "@/components/Form";
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
    "FooterNav":{
      "scheme":"primary"
    }
  },
}
const branding = {
  "Settings": {
    "Fax": "",
    "Url": "https://component.tlchatt.com/",//for email sending leave as is
    "Email": "booking@appalachiananglers.com",
    "SiteTitle": "Appalachian Anglers",
    "ContactButtonText": "Send Message",
    "Phone":"(706) 633-3622",
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
              "content": "Desired Dates, Number of People, Additional Info. ",
              "id": "message",
              "icon": "Message"
          }
      ]
  },
  "notes": "Specify Time Zone in this format https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"
}
export default function Page() {
  return (
      <GlobalContextProvider>
      
        <Form section={contactSection} appearance={appearance} branding={branding}  />

          <FooterNav appearance={appearance}
        branding={branding} />
      </GlobalContextProvider>
  )


}