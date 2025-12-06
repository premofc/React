import React from 'react'
import { useState } from 'react'
function color() {
    const [color,setColor]=useState("red")
  return (
    <body style={{backgroundColor:color,}}>
   
    <button onClick={()=>{
        setColor("yellow")
        
    }
    }>
    Red
    </button>

    <button onClick={()=>{
        setColor("Green")
    }}>
    Yellow
    </button>
     </body>
  )
}

export default color
