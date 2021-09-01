import React from 'react'
import "./SongDetails.css"

const SongDetails = (props) => {
    return (
        <div className="songdetailsMainDiv">
            <h4 className="songHeader">Playing Now</h4>
            <div className="songCover">
                <img className="songImg" src={props.details.imgSrc} alt="SongCover"/>
            </div>
            <h3 className="songTitle">Song : {props.details.title}</h3>
            <h3 className="songArtist">Artist : {props.details.artist}</h3>
        </div>
    )
}

export default SongDetails
