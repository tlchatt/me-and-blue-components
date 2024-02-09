           // When one window sends a message, or data, to another window via
          // `parent.postMessage()`, the message (the first argument) in the
          // `parent.postMessage()` call is accessible via `event.data` here.
          // Do something with the data.
          window.addEventListener("message", handleMessage);

          function handleMessage(event) {
            if(event.origin == 'https://component.tlchatt.com.' ){
                console.log("Received a message from " + event.origin + ".");
                console.log("Event a message from " + event + ".");
              if (event.data.type == 'Contact_Submit'){
                gtag('event', 'Contact_Submit');
              }
              if (event.data.type == 'Contact_Click_To_Call'){
                gtag('event', 'Contact_Click_To_Call');
              }
              if (event.data.type == 'Contact_Problem'){
                gtag('event', 'Contact_Problem');
              }
    
            console.log(event.data);
            }
  
          }