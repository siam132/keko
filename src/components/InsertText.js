import React from "react";



export default function InsertText(props) {
  return (
    <div>
      <form onChange={props.handleSubmit}>
        <input className="shadow"
          type="text"
          value={props.value}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}
