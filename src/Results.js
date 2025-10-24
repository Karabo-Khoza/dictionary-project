import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results && Object.keys(props.results).length > 0) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <p>{props.results.phonetic}</p>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
