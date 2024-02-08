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

    console.log("logEvent2 window", window)
    window.parent.postMessage(
        {
            type: 'Contact_Click_To_Call',
            message: true,
        }, '*'
    )
}
export const logEventProblem = () => {
    console.log("logEventProblem window", window)
    window.parent.postMessage(
        {
            type: 'Contact_Problem',
            message: true,
        }, '*'
    )
}