import { createContext, useContext, useState } from 'react';
export const GlobalContext = createContext({});
export function GlobalContextProvider(props) {
  /**
 * Usage (set global states and setters here)
 * import {GlobalContextProvider} from '@/components/Context';
 *     <GlobalContextProvider>
        <TOPLevel/>
       /<GlobalContextProvider>
 */

  const [contactModal, setContactModal] = useState(false);
  function handleContactModal() {
    console.log("function handleContactModalOpen(){")

    setContactModal(!contactModal)
    window.parent.postMessage(
      {
        type: 'handleContactModal',
        message: contactModal,
      }, '*'
    )
  }
  function handleContactModalE(e) {
    e.preventDefault()
    setContactModal(!contactModal)
    window.parent.postMessage(
      {
          type: 'handleContactModal',
          message: contactModal,
      }, '*'
  )

  }
  const value = {
    contactModal: {
      'state': contactModal,
      'handler': handleContactModal,
      'handlerE': handleContactModalE
    }
  }
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
export function useGlobalContext() {
  /**
   * Usage
   * import {useGlobalContext} from '@/components/Context'
   * let {contactModal,handleContactModal} = useGlobalContext()
   */
  const context = useContext(GlobalContext);
  let contactModal = context.contactModal.state
  let handleContactModal = context.contactModal.handler
  let handleContactModalE = context.contactModal.handlerE
  return {
    contactModal: contactModal,
    handleContactModal: handleContactModal,
    handleContactModalE: handleContactModalE
  }
}
