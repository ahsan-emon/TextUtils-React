import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }
    const handleOnChange = (event) => {
        // console.log("Onchange");
        setText(event.target.value);
    }
    const handleCopy = () => {
        // console.log("Onchange");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to clipboard!", "success");
    }
    const handleExtraSpace = () => {
        // console.log("Onchange");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const [text, setText] = useState('');
    // text ="new text"; // wrong way to change the state
    // setText("new text"); 
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#04212770', color: props.mode === 'light' ? 'black' : 'white', placeholderTextColor: props.mode === 'light' ? 'black' : 'white' }} placeholder='Enter text here' rows="8"></textarea>
                <button disabled={text.length === 0} className='btn btn-success mt-3 me-3' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-success mt-3 me-3' onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-warning mt-3 me-3' onClick={handleClClick}>Clear</button>
                <button disabled={text.length === 0} className='btn btn-primary mt-3 me-3' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-secondary mt-3' onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}
