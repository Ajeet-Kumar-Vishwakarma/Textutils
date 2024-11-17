import React,{useState} from 'react'
//Components must name start with Uppercase LETTER 

export default function Textform(props) {
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");

    }
    const handleClearText=()=>{
        let newText='';
        setText(newText);
        props.showAlert("TextArea Cleared","success");

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","success");

    }
    const[text,setText]=useState("");
    return (
        <>
    <div style={{color:props.mode==='dark'?'white':'#090650'}}>
        <h1  style={{color:props.mode==='dark'?'white':'#090650'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#090650'}} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>        
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>        
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra spaces</button>                
        <div className='container my-3'  style={{color:props.mode==='dark'?'white':'#090650'}}>
            <h1  style={{color:props.mode==='dark'?'white':'#090650'}}>Your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        <div className='container my-3'  style={{color:props.mode==='dark'?'white':'#090650'}}>
            <h1  style={{color:props.mode==='dark'?'white':'#090650'}}>Preview</h1>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        </div>
    </div>
    </>
  )
}
