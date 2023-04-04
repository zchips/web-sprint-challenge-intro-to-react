import React, {useState, useEffect} from 'react';
import axios from 'axios';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacter] = useState([])

  useEffect(()=>{
    axios.get("https://swapi.dev/api/people/")
    .then(resp => {
      setCharacter(resp.data)
    })
    .catch(err => {console.log(err)})
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters && <Character info ={character} key ={character.name}></CharacterCard>}
    </div>
  );
}

export default App;
