(function (win) {


    // When one window sends a message, or data, to another window via
    // `parent.postMessage()`, the message (the first argument) in the
    // `parent.postMessage()` call is accessible via `event.data` here.
    // Do something with the data.
    window.addEventListener("message", handleMessage);
    let iframe
    iframe = document.createElement('iframe');
    iframe.title = 'Technologic Contact For Johnsen Diamond';
    iframe.frameBorder = '0';
    iframe.style.border = '0';
    iframe.style.position = 'fixed';
    iframe.style.bottom = '0';
    iframe.style.right = '0';
    iframe.style.zIndex = '1';
    iframe.style.height = 'auto';
    iframe.style.width = 'auto';
    iframe.style.minWidth = '350px';
    iframe.style.maxHeight = '100px';
    iframe.src = 'https://component.tlchatt.com/ContactJohnsenDiamond';
    iframe.id = 'Technologic_Iframe_Contact';
    let body = document.querySelector('body');
    body.appendChild(iframe);
    function handleMessage(event) {
        if (event.origin == 'https://component.tlchatt.com.') {
            console.log("Received a message from " + event.origin + ".");
            console.log("Event a message from " + event + ".");
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

    }
})(window);