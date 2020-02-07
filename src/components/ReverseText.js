import React from "react";

export default function ReverseText(props) {
    let ReverseText = props.text.split("").reverse().join("");
  return (
    <div className="container text-reverse-box shadow rounded">
      <h1 className="text-reverse">{ReverseText}</h1>
    </div>
  );
}
