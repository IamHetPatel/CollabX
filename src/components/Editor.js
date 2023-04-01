import React, { useEffect } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { solarizedLight, solarizedLightInit, solarizedDark, solarizedDarkInit } from '@uiw/codemirror-theme-solarized';
import { javascript } from '@codemirror/lang-javascript';

export default function Editor() {
    // useEffect(()=>{
    //     async function init(){
    //         <CodeMirror
    //   value="console.log('hello world!');"
    //   height="200px"
    //   theme={solarizedLight}
    //   extensions={[javascript({ jsx: true })]}
    // />
    //     }
    //     init();
    // },[]);
  return <CodeMirror
      className='CodeMirror'
      value="console.log('hello world!');"
      theme={solarizedLight}
      extensions={[javascript({ jsx: true })]}
      
    />
}


