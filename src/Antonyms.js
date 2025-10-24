import React from "react";

export default function Antonyms(props) {
  if (props.antonyms && props.antonyms.length > 0) {
    return (
      <div className="Antonyms">
        <strong>Antonyms:</strong>
        <ul>
          {props.antonyms.map(function (antonym, index) {
            return <li key={index}>{antonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
