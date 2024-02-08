import React from "react"
import ReactDOM from "react-dom"
import "./index.css";
import Header from "./components/Header.js"
import { Footer  } from "./components/Footer.js"
import Reasons from "./components/Reasons.js"
function Description () {
  return (
    <h1>Reasons I'm excited to learn React</h1>
  )
}




ReactDOM.render(

<div>
  <Header/>
  <Description/> 
  <Reasons/>
  <Footer/>
</div>
,  document.getElementById("root") )