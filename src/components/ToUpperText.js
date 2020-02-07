import React from "react";

export default function ToUpperText(props) {
    let toUpper = props.text.toUpperCase(); 
  return (
    <div className="container">
      <h1>{toUpper}</h1>
    </div>
  );
}
