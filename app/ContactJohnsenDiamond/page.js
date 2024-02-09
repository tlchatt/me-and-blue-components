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
    /**
   * Implementation as component in another site.
   * <iframe src="https://component.tlchatt.com/ContactJohnsenDiamond" style="height: 700px; width:
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
            <FooterNav appearance={appearance}
          branding={branding} />
        </GlobalContextProvider>
    )


}
           // When one window sends a message, or data, to another window via
          // `parent.postMessage()`, the message (the first argument) in the
          // `parent.postMessage()` call is accessible via `event.data` here.
          // Do something with the data.
