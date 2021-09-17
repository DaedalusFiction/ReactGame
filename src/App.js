import { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import SetList from './SetList';
import AddSong from './components/AddSong';


function App() {
  const [songForm, setSongForm] = useState(false)
  const [setList, setSetList] = useState([{ 
    id: 1,
    artist: "The White Stripes",
    songTitle: "The Hardest Button to Button",
    encore: true,
},
{
    id: 2,
    artist: "The Proclaimers",
    songTitle: "I would Be (500 miles)",
    encore: false,
},
{
    id: 3,
    artist: "Weezer",
    songTitle: "The Sweater Song",
    encore: false,
}]);

// Toggle form visibility

const toggleVisibility = () => {
  setSongForm(!songForm)
}

// Delete Song from Set List

const deleteSong = (id) => {
  setSetList(setList.filter((song) => song.id !== id))
}

// Add Song to Set List

const addSong = (song) => {
  const id = 4
  const newSong = { id, ...song }
  setSetList([...setList, newSong])
}

// Set Song as Encore

const toggleEncore = (id) => {
  setList.map((song) => song.id === id ? {...song, encore: !song.encore} : song)
}

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Button text={songForm ? "Close" : "Add"} onClick={toggleVisibility} />
        {songForm && <AddSong addSong={addSong} />} 
        

        
        {setList.length > 0 ?  
          <SetList setList={setList} onDelete={deleteSong} toggleEncore={toggleEncore} /> : 
          "No Songs to Show"
        }
      </div>
    </div>
  );
}

export default App;
