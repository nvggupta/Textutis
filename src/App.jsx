import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { upperCase, lowerCase, reset, copy, extraSpaces, setText } from "./components/Features/TextSlice";

function App() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.Text[0].value);
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const handleText = (e) => {
    const value = e.target.value;
    setCharacterCount(value.length);
    setWordCount(value.trim() === "" ? 0 : value.trim().split(/\s+/).length);
    dispatch(setText(value));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div>
      
        <textarea
          value={text}
          onChange={handleText}
          className="border border-black"
          rows={10}
          cols={100}
        ></textarea>
        <div className="grid grid-cols-5 w-1/2">
          <button onClick={() => dispatch(upperCase())}>UpperCase</button>
          <button onClick={() => dispatch(lowerCase())}>LowerCase</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
          <button onClick={handleCopy}>Copy</button>
          <button onClick={() => dispatch(extraSpaces())}>Remove Extra Spaces</button>
        </div>
        <label>Total Words</label>
        <p>{wordCount}</p>
        <label>Total Characters</label>
        <p>{characterCount}</p>
      </div>
      <label>Preview</label>
      <div>{text}</div>
    </>
  );
}

export default App;
