import React, { useEffect } from 'react';
export const logEvent1 = () => {
    useEffect(() => {// for better lighthouse score dynamically load in real google map
        console.log("logEvent1")
        window.parent.postMessage(
          {
            type: 'Contact_Submit',
            message: true,
          }, '*'
        )
      }, []);
    
    
export const logEvent2 = () => {
    gtag('event', 'Contact_Click_To_Call', {});
}
export const logEventProblem = () => {
    gtag('event', 'Contact_Problem', {});
}