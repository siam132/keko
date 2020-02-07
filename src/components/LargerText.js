import React from "react";

export default function LargerText(props) {
  return (
    <div className="container-fluid text-largertext-box rounded shadow">
      <h1 className=" text-largertext">{props.text}</h1>
    </div>
  );
}
