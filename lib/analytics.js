export const logEvent1 = () => {

    console.log("logEvent1 window", window)
    window.parent.postMessage(
        {
            type: 'Contact_Submit',
            message: true,
        }, '*'
    )


}
export const logEvent2 = () => {
    gtag('event', 'Contact_Click_To_Call', {});
}
export const logEventProblem = () => {
    gtag('event', 'Contact_Problem', {});
}