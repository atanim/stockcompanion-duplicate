import React, { useContext } from "react";
import "./Footnote.css";

function Footnote(props) {
  return (
    <div>
      <div className="footnote">singlefootnote</div>;
      <div className="footnote-test">
        <h1>Footnotes:</h1>
        <input placeholder="Enter footnoes here" />
        <div className="buttonfootnote">
          <button> Post</button>
        </div>
      </div>
    </div>
  );
}

export default Footnote;
