import React, { useState } from "react";
export default function About() {
  const [style, setStyle] = useState({
    backgroundColor: "black",
    color: "white",
  });
  const [btnText, setBtnText] = useState("Enable Light Mode");
  const changeMode = () => {
    if (style.color === "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setStyle({
        backgroundColor: "black",
        color: "white",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <>
      <div className="container ">
        <div className="card mt-3" style={style}>
          <div className="card-header">Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="card mt-3" style={style}>
          <div className="card-header">Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="card mt-3" style={style}>
          <div className="card-header">Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          style={style}
          onClick={changeMode}
        >
          {btnText}
        </button>
      </div>
    </>
  );
}
