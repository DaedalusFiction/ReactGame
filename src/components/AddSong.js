import { useState } from "react"

const AddSong = ({addSong}) => {
    const [songTitle, setSong] = useState('')
    const [artist, setArtist] = useState('')
    const [encore, setEncore] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!songTitle) {
            alert("please add a song")
        }

        addSong({ songTitle, artist, encore})
        
        console.log(songTitle)

        setSong('')
        setArtist('')
        setEncore(false)

    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label>Song Name</label>
                <input type="text" placeholder="Add Song" value={songTitle} onChange={(e) => setSong(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Artist</label>
                <input type="text" placeholder="Artist Name" value={artist} onChange={(e) => setArtist(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Encore?</label>
                <input type="checkbox" checked={encore} value={encore} onChange={(e) => setEncore(e.currentTarget.checked) } />
            </div>

            <input type="submit" value="add song" addSong={onSubmit}/>
        </form>
    )
}

export default AddSong
