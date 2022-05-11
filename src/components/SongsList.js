import React from "react"

const SongsList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return (
        <div>
        <ul>
            <li><img src = {song["im:image"][2].label} /></li>
            <li>{song["im:name"].label}</li>
            <li>{song["im:artist"].label}</li>
            <li>Position: {index +1}</li>
            <li><audio controls><source src={song.link[1].attributes.href} /></audio></li>
        </ul>
        </div>)
    })

    return (
        <>
            <p>This is the top 20 list component</p>
            <p>{songItems}</p>
        </>
    )
}

export default SongsList