import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    var newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to upper case!", "success");
  }

  const handleLoClick = () => {
    var newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lower case!", "success");
  }

  const onTextChange = (event) => {
    setText(event.target.value);
  }

  const handleClear = () => {
    setText("");
    props.showAlert("TextBox Cleared!", "success");
  }

  const handleBlank = () => {
    var blank = text.length; 
    if(blank === 0)
    {
      return(blank);
    }
    else{
      let word = text.split(/\s+/);
      word = word.filter(function(entry) { return entry.trim() !== ''; });
      return(word.length);
    }
  }

  const handleSpace = () => {
    let c = 0; 
    let word = text;
    
    for (let i = 0; i < word.length; i++) {
      if (word[i] === " " || word[i] === "\n") {
        continue;
      }
      else{
        c += 1;
      }
    }
    return(c);
  }

  const handleCopy = () => {
    let text = document.getElementById("tb");
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard!", "success");
  }

  const [text, setText] = useState('Enter text here');
  let a = handleBlank();
  let s = handleSpace();
  return (
    <>
    <div className="container" style={{color:props.mode === 'light' ? 'black': 'white'}}>
      <h1>{props.heading}</h1>
      <div className="input-group">
      <textarea className="form-control" id="tb" value={text} onChange={onTextChange} style={{backgroundColor: props.mode === 'dark' ? 'grey': 'white', color:props.mode === 'light' ? 'black': 'white'}} aria-label="With textarea" rows="10"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleClear}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container" style={{color:props.mode === 'light' ? 'black': 'white'}}>
      <h2>Text Summary</h2>
      <p>{a} words and {s} characters</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text : "Nothing to perview"}</p>
    </div>
    </>
  )
}
