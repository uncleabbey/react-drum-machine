import React from "react";

const incompatibleMessage = "Your browser does not support the audio element.";
const DrumPad = props => {
  return (
    <div className="drum-pad col-sm-2" id={props.id} onClick={props.handleClick}>
      <p>
        {props.button}
      </p>
      <audio className="clip" id={props.id} src={props.src}>
        {incompatibleMessage}
      </audio>
    </div>
  );
};

export default DrumPad;
