import React from "react"
import ReactDOM from "react-dom/client"
import { useState } from "react";

const n=10;

const Hookss=()=>{
  const [h1,h2]=useState(n);
  return(
    <div>
      <p>{h1}</p>
      <button onClick={()=>{
        const bo=true;
        if(bo==true){
          h2(h1+1)
        }else{
          h2(h1-1)
        }
      }}>hello</button>
      
    </div>
  )
}


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<Hookss/>)