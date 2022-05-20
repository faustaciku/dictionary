import React from "react";
import ReactAudioPlayer from "react-audio-player";
export default function Phonetics(props) {
  if (props.phonetic && props.phonetic.audio) {
    return (
      <div className="Phonetics mt-1">
        {props.phonetic.text}
        <br />
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </div>
    );
  } else {
    return null;
  }
}
