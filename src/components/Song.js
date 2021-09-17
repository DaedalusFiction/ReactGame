import { FaTimes } from "react-icons/fa"

const Song = ({song, onDelete, toggleEncore}) => {
    return (
        <div className="song">
            <h3 key="song.id" onDoubleClick={() => toggleEncore(song.id)}>
            {song.songTitle} <FaTimes onClick={() => {onDelete(song.id)}} />
            </h3>
            <p>by {song.artist}</p>
            <p>Encore? {song.encore ? "Yes" : "No"}</p>
        </div>
    );
}

export default Song