import React from "react";

export default function ToUpperText(props) {
    let toUpper = props.text.toUpperCase(); 
  return (
    <div className="container text-uppercase-box shadow rounded">
      <h1 className="text-uppercase">{toUpper}</h1>
    </div>
  );
}
