import React from "react";

export default function ReverseText(props) {
    let ReverseText = props.text.split("").reverse().join("");
  return (
    <div className="container">
      <h1>{ReverseText}</h1>
    </div>
  );
}
