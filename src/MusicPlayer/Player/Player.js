import React, { useRef,useEffect } from "react";
import "./Player.css";

const Player = (props) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (props.isPlaying) {
     audioRef.current.play();
    } else {
     audioRef.current.pause();
    }
  });

  return (
    <div className="playerMainDiv">
      <audio
        src={props.songs[props.currentIndex].audioSrc}
        ref={audioRef}
        controls
        loop
        autoPlay
      ></audio>
    </div>
  );
};

export default Player;
