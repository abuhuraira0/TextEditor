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
        document.getSelection().removeAllRanges();
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
        <div className='container mx-2' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042143':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" disabled={text.length===0} onClick={handleToUpper} className="btn btn-primary mx-1 my-1">Convert to UpperCase</button>
            <button type="button" disabled={text.length===0} onClick={handleToLower} className="btn btn-primary mx-1 my-1">Convert to LowerCase</button>
            <button type="button" disabled={text.length===0} onClick={handleToClear} className="btn btn-primary mx-1 my-1">Clear</button>
            <button type="button" disabled={text.length===0} onClick={handleToCopy} className="btn btn-primary mx-1 my-1">Copy to Clipboard</button>
            <button type="button" disabled={text.length===0} onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
            </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
