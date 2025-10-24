import React from "react";

export default function Results(props) {
  return (
    <div className="Results">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <p>{props.meaning.example}</p>
      <p>{props.meaning.synonyms}</p>
      <p>{props.meaning.antonyms}</p>
    </div>
  );
}
