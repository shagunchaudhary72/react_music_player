import { Pause, PlayArrow, SkipNext, SkipPrevious } from "@material-ui/icons";
import React from "react";
import "./Controls.css";

const Controls = (props) => {
  return (
    <div className="controlsMainDiv">
      <button onClick={() => props.SkipSong(false)}>
        <SkipPrevious className="skipIcon" />
      </button>
      <button onClick={() => props.setIsPlaying(!props.isPlaying)}>
        <div className="playDiv">
          {props.isPlaying ? (
            <Pause className="playIcon" />
          ) : (
            <PlayArrow className="playIcon" />
          )}
        </div>
      </button>
      <button onClick={()=> props.SkipSong()}>
        <SkipNext className="skipIcon" />
      </button>
    </div>
  );
};

export default Controls;
