import click1 from "../assets/clap-808.wav";
import click2 from "../assets/crash-noise.wav";
import click3 from "../assets/hihat-dist02.wav";
import click4 from "../assets/kick-thump.mp3";
import click5 from "../assets/kick-zapper.mp3";
import click6 from "../assets/perc-tribal.wav";
import click7 from "../assets/ride-acoustic02.mp3";
import click8 from "../assets/snare-block.mp3";
import click9 from "../assets/tom-analog.wav";


export const data = [
  {id: 'Q', button: 'Q', code: 81, src: new Audio(click1)},
  {id: 'W', button: 'W', code: 87, src: new Audio(click2)},
   {id: 'E', button: 'E', code: 69, src: new Audio(click3)},
  {id: 'A', button: 'A', code: 65, src: new Audio(click4)},
   {id: 'S', button: 'S', code: 83, src: new Audio(click5)},
    {id: 'D', button: 'D', code: 68, src: new Audio(click6)},
     {id: 'Z', button: 'Z', code: 90, src: new Audio(click7)},
      {id: 'X', button: 'X', code: 88, src: new Audio(click8)},
       {id: 'C', button: 'C', code: 67, src: new Audio(click9)}

]