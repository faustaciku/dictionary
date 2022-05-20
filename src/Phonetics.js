import React from "react";
import ReactAudioPlayer from "react-audio-player";
export default function Phonetics(props) {
  if (props.phonetic && props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <ReactAudioPlayer src={props.phonetic.audio} controls />

        <br />
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
