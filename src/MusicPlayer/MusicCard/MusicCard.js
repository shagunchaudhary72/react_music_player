import React, { useState ,useEffect} from "react";
import Controls from "../Controls/Controls";
import Player from "../Player/Player";
import SongDetails from "../SongDetails/SongDetails";
import songsData from "../SongsData";

import "./MusicCard.css";

const MusicCard = () => {
  const [songs] = useState(songsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);

 
  const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setNextIndex(()=>{
            if((currentIndex + 1) > (songs.length - 1)){
                return 0;
            }else{
                return currentIndex + 1;
            }
        })
    }, [currentIndex,songs.length])
    console.log(songsData);
    console.log(songs)
    console.log(songs[currentIndex].title);
    console.log(songs[nextIndex].title);

    const SkipSong=( forward = true)=>{
        if(forward){
        setCurrentIndex(()=>{
            if(currentIndex + 1 > songs.length -1){
                return 0;
            }
            else{
                return currentIndex + 1;
            }
        })
    }else{
        setCurrentIndex(()=>{
            if(currentIndex - 1 <  0){
                return songs.length-1;
            }else{
                return currentIndex - 1;
            }
        })
    }
        
    }


  return (
    <div className="musiccardMainDiv">
      <SongDetails
        details={songs[currentIndex]}
      />
      <Controls 
        isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
      />
      <Player
      isPlaying={isPlaying}
       currentIndex={currentIndex}
        nextIndex={nextIndex} 
        songs={songs}
         />
      <p className="nextTrack">Next track : {songs[nextIndex].title}</p>
    </div>
  );
};

export default MusicCard;
