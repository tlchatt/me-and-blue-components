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
    "FooterNav": {
      "scheme": "primary"
    }
  },
}
const branding = {
  "Settings": {
    "Fax": "",
    "Url": "https://component.tlchatt.com/",//for email sending leave as is
    "Email": "Robert@johnsendiamond.com",
    "Phone": "(732) 530-0451",
    "SiteTitle": "Johnsen Diamond",
    "ContactButtonText": "Send Message",
    "CallButtonText": "Call Now",
  }
}
/**
* Implementation as component in another site.
* 
<style>
    .TechnologicClosed {
        bottom: 0;
        position: fixed;
        max-width: 1920px;
        z-index: 1100;
        min-width: 365px;
        max-height: 100px;
        border: 0;
    }

    .TechnologicOpen {
        border: 0;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 1;
        height: 100%;
        width: 100%;
    }

    .Wrapper {
        max-width: 1836px;
        margin: 0 auto;
        display: grid;
        justify-items: end;

    }
</style>
<div class="Wrapper">
    <iframe src="https://component.tlchatt.com/PersistentContactJohnsenDiamond" class="TechnologicClosed"
        id="Technologic"></iframe>
</div>
<script>
    let frame = document.querySelector('#Technologic')
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
            if (event.data.type == 'handleContactModal') {
                if (event.data.message) {
                    frame.classList.remove("TechnologicClosed");
                    frame.classList.add("TechnologicOpen");
                }
                else {
                    frame.classList.remove("TechnologicOpen");
                    frame.classList.add("TechnologicClosed");
                }
            }
            console.log(event.data);
        }

    }
</script>
*/
export default function Page() {
  let rootStyle = {
    maxWidth: '1836px',
    margin: '0 auto'
  }
  return (
    <GlobalContextProvider>
      <div style={rootStyle} id="ClientPageLayout">
        <FooterNav appearance={appearance}
          branding={branding} />
      </div>
    </GlobalContextProvider>
  )
}