import Song from "./components/Song.js"

const SetList = ({setList, onDelete, toggleEncore}) => {
    return (
        <>
            {setList.map((song) => (
                <Song key="song.id" song={song} onDelete={onDelete} toggleEncore={toggleEncore}/>
            ))}
        </>
    )
}

export default SetList;