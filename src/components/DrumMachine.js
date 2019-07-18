import React, { useState } from "react";
import Display from "./Display";
import DrumPad from "./Tone";
import click1 from "../assets/clap-808.wav";
import click2 from "../assets/crash-noise.wav";
import click3 from "../assets/hihat-dist02.wav";
import click4 from "../assets/kick-thump.mp3";
import click5 from "../assets/kick-zapper.mp3";
import click6 from "../assets/perc-tribal.wav";
import click7 from "../assets/ride-acoustic02.mp3";
import click8 from "../assets/snare-block.mp3";
import click9 from "../assets/tom-analog.wav";
import {data} from './DrumPad'

const DrumMachine = () => {
  const [display, setDisplay] = useState("click to start");
  const sound = {
    Q: new Audio(click1),
    W: new Audio(click2),
    E: new Audio(click3),
    A: new Audio(click4),
    S: new Audio(click5),
    D: new Audio(click6),
    Z: new Audio(click7),
    X: new Audio(click8),
    C: new Audio(click9)
  };

  const handleClick = e => {
    setDisplay(e.currentTarget.childNodes[1].id);
    console.log(e.currentTarget.childNodes[1].id + 1);
    switch (e.currentTarget.childNodes[1].id) {
      case "Q":
        sound.Q.currentTime = 0;
        sound.Q.play();
        break;
      case "W":
        sound.W.currentTime = 0;
        sound.W.play();
        break;
      case "E":
        sound.E.currentTime = 0;
        sound.E.play();
        break;
      case "A":
        sound.A.currentTime = 0;
        sound.A.play();
        break;
      case "S":
        sound.S.currentTime = 0;
        sound.S.play();
        break;
      case "D":
        sound.D.currentTime = 0;
        sound.D.play();
        break;
      case "Z":
        sound.Z.currentTime = 0;
        sound.Z.play();
        break;
      case "X":
        sound.X.currentTime = 0;
        sound.X.play();
        break;
      case "C":
        sound.C.currentTime = 0;
        sound.C.play();
        break;
      default:
        console.log("something went wrong");
    }
  };
  const triggerClick = (keyCode)=> {
    console.log(keyCode);
    switch (keyCode) {
      case 81:
        sound.Q.currentTime = 0;
        setDisplay('Q')
        sound.Q.play();
        break;
      case 87:
        sound.W.currentTime = 0;
        setDisplay('W')
        sound.W.play();
        break;
      case 69:
        sound.E.currentTime = 0;
        setDisplay('E')
        sound.E.play();
        break;
      case 65:
        sound.A.currentTime = 0;
        setDisplay('A')
        sound.A.play();
        break;
      case 83:
        sound.S.currentTime = 0;
        setDisplay('S')
        sound.S.play();
        break;
      case 68:
        sound.D.currentTime = 0;
        setDisplay('D')
        sound.D.play();
        break;
      case 90:
        sound.Z.currentTime = 0;
        setDisplay('Z')
        sound.Z.play();
        break;
      case 88:
        sound.X.currentTime = 0;
        setDisplay('X')
        sound.X.play();
        break;
      case 67:
        sound.C.currentTime = 0;
        setDisplay('C')
        sound.C.play();
        break;
      default:
        setDisplay('Wrong Key')
        console.log("something is wrong");
    }
  };

  return (
    <div id="drum-machine" className="container row" tabIndex='0' onKeyDown={e => triggerClick(e.keyCode)}>
      <Display display={display} />
      <br />
     {
       data.map((drum, i) => <DrumPad key={i} id={drum.id} src={drum.src} 
       button={drum.button} handleClick={handleClick}
       />)
     }
    </div>
  );
};

export default DrumMachine;

// Q, W, E, A, S, D, Z, X, C
