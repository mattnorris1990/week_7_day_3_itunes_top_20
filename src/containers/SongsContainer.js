import React, {useState, useEffect} from "react"
import SongsList from "../components/SongsList"

const SongsContainer = () => {

    const [songs, setSongs] = useState([])
    
    useEffect(() => {
        getSongs();
    }, [])
    
    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
        .catch(err => console.error);
    }

    return (
        <>
        <h1>UK Top 20</h1>
        <SongsList songs = {songs}></SongsList>
        </>
    )
}

export default SongsContainer

