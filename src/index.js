import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header.js"
import { Footer } from "./Footer.js"

function Description () {
  return (
    <h1>Reasons I'm excited to learn React</h1>
  )
}


function Reasons () {
  return (
    <ol>
      <li>It's pretty librabry</li>
      <li>It's Easier to learn</li>
    </ol>
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