import React, { useState } from "react";
import "../components/TextForm.js";
export default function TextForm(props) {
  const handleUppercaseClick = () => {
    let result = text.toUpperCase();
    setText(result);
  };
  const handleLowercaseClick = () => {
    let result = text.toLowerCase();
    setText(result);
  };
  const handleExtraSpacesClick = () => {
    // let result = text.replace(/\s+/g, " ").trim();
    // setText(result);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h2 className="mt-2"> Enter Text To Analyze</h2>
        <div className="mt-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="">
          <button
            className="btn btn-primary mt-2"
            onClick={handleUppercaseClick}
            style={{ marginRight: 20 }}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary mt-2"
            onClick={handleLowercaseClick}
            style={{ marginRight: 20 }}
          >
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary mt-2"
            onClick={handleExtraSpacesClick}
            style={{ marginRight: 20 }}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
    </>
  );
}
