export const logEvent1 = () => {
    gtag('event', 'Contact_Submit', {});
}
export const logEvent2 = () => {
    gtag('event', 'Contact_Click_To_Call', {});
}
export const logEventProblem = () => {
    gtag('event', 'Contact_Problem', {});
}