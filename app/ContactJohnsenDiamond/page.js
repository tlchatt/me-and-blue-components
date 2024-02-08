'use client'
import { GlobalContextProvider } from '@/components/Context';
import FooterNav from "@/components/nav/FooterNav"

const appearance = {
    "colorSchemes": {
      "PrimaryBackground": "#EBEBEB",
      "PrimaryForeground": "#414141",
    },
    "LinkStyle": {
      "Primary": {
        "textDecoration": "underline",
        "textDecorationColor": "#000000",
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
      "Email": "Robert@johnsendiamond.com",
      "Phone":"(732) 530-0451",
      "SiteTitle": "Johnsen Diamond",
      "ContactButtonText": "Send Message",
      "CallButtonText": "Call Now",
    }
  }
export default function Page() {
    return (
        <GlobalContextProvider>
            <FooterNav appearance={appearance}
          branding={branding} />
        </GlobalContextProvider>
    )


}