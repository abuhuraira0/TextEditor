import React, { useState } from 'react'

export default function Form(props) {
    const handleOnChange = (event)=>{
       setText(event.target.value);         
    }
    const handleToUpper = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Text converted to Uppercase","success")
    }
    const handleToLower = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Text converted to Lowercase","success")
    }
    const handleToClear = ()=>{
        setText("");
        props.showAlert("Text cleared","danger")
    }
    const handleToCopy = ()=>{
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied","success")
    }
    const handleExtraSpaces = ()=>{
       let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success")
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className='container mx-2'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" onClick={handleToUpper} className="btn btn-primary mx-2">Convert to UpperCase</button>
            <button type="button" onClick={handleToLower} className="btn btn-primary mx-2">Convert to LowerCase</button>
            <button type="button" onClick={handleToClear} className="btn btn-primary mx-2">Clear</button>
            <button type="button" onClick={handleToCopy} className="btn btn-primary mx-2">Copy to Clipboard</button>
            <button type="button" onClick={handleExtraSpaces} className="btn btn-primary mx-2">Remove Extra Spaces</button>
            </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
