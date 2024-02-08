'use client'
import { useState, useEffect, useRef } from 'react';
import { H1, H2, H3, H4, H5, P, Button } from '@/components/MicroComponents.js';
import { Colors } from '@/lib/colors';
import { Airplane, ThumbsUp, ThumbsDown, Close, Icon } from '@/lib/icon.js'
import { useMediaQuery } from '@/lib/statefulUtils'
import { useGlobalContext } from '@/components/Context'
import { GlobalContextProvider } from '@/components/Context';
export function Editor({ page, navEntries, subNavEntries, branding, appearance }) {
  let Name = Editor.name
  //let { contactModal, handleContactModal } = useGlobalContext()


  /** NOTES:
   * Track Value changes to Editing object on blur
   * Allow save object to prisma
   * Reduce cotnent size for easier editing.
   * Display object not as obj: (need to allow rendering of { by micro components})
   * console.log('Component() Component: ', Component)
  */

  /**Section Data Registartion */
  let defaultPage = {
  }

  if (!page) {// 
    console.log(' if (!page)')
    // section = appearance?.ContactForm ? appearance?.ContactForm : defaultSection
    page = defaultPage
  }

  /**Section Data Registartion */
  /**Variables, States, Handlers Registartion */
  const [state, setState] = useState(null);
  const [stated, setStated] = useState(null);
  let nonStateVar = {} //State Causes Rerender.
  const handleState = async () => {

  };
  const handleStateE = async (e) => {

  };
  /**Variables, States, Handlers Registartion */

  /**Section Color, Class, Styles, SVGs, Registartion */
  const StatusClassBiDirectional = (state) ? `` : ``
  const StatusClassTriDirectional = (state) ? `` : (stated) ? `` : ``


  /**Section Color, Class, Styles, SVGs, Registartion */



  return (
    <GlobalContextProvider>
      <div id={'Editor'}>
        <Json />
      </div>
    </GlobalContextProvider>
  )
  function Json() {
    //Page{}
    let { Layout, Settings } = page
    //console.log('Layout', Layout)
    //console.log('Settings', Settings)

    let MarginStyle = {
      margin: '0px 50px'
    }
    let depth = 0
    return (
      <>
        {Settings &&

          <ObjectWrapper object={Settings} name={'Settings'} key={'Settings'} depth={depth} />
        }
        {Layout &&
          <ObjectWrapper object={Layout} name={'Layout'} key={'Layout'} depth={depth} />
        }
      </>

    )

    function ObjectWrapper({ object, name, depth }) {
      console.log('ObjectWrapper({  depth', depth, 'name', name, 'name', name, 'typeof (objValue)', typeof (name), '})')

 
      if (!(isNaN(name))) {
        name = 'Obj'
      }
      console.log('name', name)
      return (
        <div style={MarginStyle} id={'ObjectWrapper'} >
          {(depth == 0) && !(name == 'object') &&
            <H1 scheme={'primary'} content={`${name}: `} appearance={appearance} />
          }
          {object &&
            Object.keys(object).map((key, index) => (
              <ObjectItem objKey={key} objValue={object[key]} depth={depth} key={index} />
            ))
          }
        </div>
      )
    }
    function ObjectItem({ objKey, objValue, depth }) {
      let newdepth = depth + 1


      function handleInput(e) {
        console.log('handleInput', e)
      }
      function handleValue(e) {
        console.log('handleValue', e)
        console.log('e.currentTarget', e.currentTarget)
        console.log('e.target', e.target)
      }
      let ObjectItemStyle = {
        margin: '0px 50px'
      }
      let ObjectItemKeyStyle = {
        display: 'inline',
      }
      let ObjectItemValueStyle = {
        display: 'inline',
      }
      let ObjectItemTextStyle = {
        display: 'inline',
      }
      if (typeof (objValue) == 'object') 
      {
        console.log('ObjectItem({  depth', depth, 'objKey', objKey, '})')
        if (!(isNaN(objKey))) {
          objKey = 'obj'
        }
        return (
          <div style={MarginStyle} id={'ObjectItem Complex'} >
              {(newdepth == 1) &&
                <H3 scheme={'primary'} content={`${objKey} : `} appearance={appearance} style={ObjectItemTextStyle} />
              }
              {(newdepth == 2) &&
                <H4 scheme={'primary'} content={`${objKey} :`} appearance={appearance} style={ObjectItemTextStyle} />
              }
              {(newdepth === 3) &&
                <H5 scheme={'primary'} content={`${objKey} : `} appearance={appearance} style={ObjectItemTextStyle} />
              }
              {(newdepth === 4) &&
                <H5 scheme={'primary'} content={`${objKey} : `} appearance={appearance} style={ObjectItemTextStyle} />
              }
              {(newdepth === 5) &&
                <H5 scheme={'primary'} content={`${objKey} : `} appearance={appearance} style={ObjectItemTextStyle} />
              }
            <ObjectWrapper object={objValue} name={objKey} key={`${objKey}`} depth={newdepth} />

          </div>
        )
      }
      else 
      {

        return (
          <div style={ObjectItemStyle} id={'ObjectItem'}>
            <div
              style={ObjectItemKeyStyle}
              contentEditable={true}
              onInput={e => handleInput(e)}
              onBlur={e => handleValue(e)}
              suppressContentEditableWarning={true}
              id={objKey}>
              {(newdepth == 1) &&
                <H3 scheme={'primary'} content={`${objKey} : `} appearance={appearance} style={ObjectItemTextStyle} />
              }
              {(newdepth == 2) &&
                <H4 scheme={'primary'} content={`${objKey} :`} appearance={appearance} style={ObjectItemTextStyle} />
              }
              {(newdepth === 3) &&
                <H5 scheme={'primary'} content={`${objKey} : `} appearance={appearance} style={ObjectItemTextStyle} />
              }
              {(newdepth === 4) &&
                <H5 scheme={'primary'} content={`${objKey} : `} appearance={appearance} style={ObjectItemTextStyle} />
              }
              {(newdepth === 5) &&
                <H5 scheme={'primary'} content={`${objKey} : `} appearance={appearance} style={ObjectItemTextStyle} />
              }
            </div>
            <div
              style={ObjectItemValueStyle}
              contentEditable={true}
              onInput={e => handleInput(e)}
              onBlur={e => handleValue(e)}
              suppressContentEditableWarning={true}
              id={objKey}>
              <P scheme={'primary'} content={` ${objValue} - ${newdepth} `} appearance={appearance} style={ObjectItemTextStyle} />
            </div>
          </div>
        )
      }
    
    }
  }
}

