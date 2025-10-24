import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section className="info-section">
        <h3>{props.meaning.partOfSpeech}</h3>
        <h5>- {props.meaning.definition}</h5>
        <p>{props.meaning.example}</p>
        <Synonyms synonyms={props.meaning.synonyms} />
        <Antonyms antonyms={props.meaning.antonyms} />
      </section>
    </div>
  );
}
