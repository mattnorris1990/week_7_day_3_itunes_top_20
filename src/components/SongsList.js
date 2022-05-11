import React from "react"

const SongsList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return (
        <div className = "song-container">
        <ul>
            <li><img src = {song["im:image"][2].label} className = "image"/></li>
            <li>Position: {index +1}</li>
            <li><h2>{song["im:name"].label}</h2></li>
            <li><h3>{song["im:artist"].label}</h3></li>
            <li><audio controls><source src={song.link[1].attributes.href} /></audio></li>
        </ul>
        </div>)
    })

    return (
        <>
            <div className = "list-container">
                {songItems}
            </div>
        </>
    )
}

export default SongsList