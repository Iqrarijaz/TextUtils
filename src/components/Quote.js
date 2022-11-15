import React from "react";

export default function Quote() {
  return (
    <>
      <div className="card mt-3">
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
    </>
  );
}
