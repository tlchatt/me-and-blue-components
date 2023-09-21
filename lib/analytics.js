export const logEvent1 = () => {
    parent.postMessage(
        "Contact_Submit",
        "http://parent.domain.com");
    gtag('event', 'Contact_Submit', {});
}
export const logEvent2 = () => {
    gtag('event', 'Contact_Click_To_Call', {});
}
export const logEventProblem = () => {
    gtag('event', 'Contact_Problem', {});
}