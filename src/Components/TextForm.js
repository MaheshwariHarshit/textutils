import React, {useState} from 'react'

export default function TextForm(props) {

const handleOnChange =(event)=>{
    console.log("On Change")
    setText(event.target.value)
}

const handleUpClick =()=>{
    console.log("Uppercase was clicked!!")
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase", "success")
}

const handleLowerClick =()=>{
    console.log("Uppercase was clicked!!")
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase", "success")
}

const [text,setText] = useState('')
  return (
    <>
    <div>
  <div className="container">
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode ==='dark'? '#13466e' : 'white',
    color: props.mode ==='dark' ? 'white': '#042743'}}  id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((e)=> {return e.length>0}).length} words, {text.length} characters</p>
        <p>Reading Time: {text.split(/\s+/).filter((e)=> {return e.length>0}).length * 0.008} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
