import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
const [character, setCharacters] = useState([]);

 const getApi = async () => {
  try {
  const  res  = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();

  console.log(data.results);

  setCharacters(data.results);
  } catch(error) {
   console.log(error);
  }
 };

 useEffect(() => {
  getApi();

 }, []);
  
 return (
  <div className="App">
    {character.map((character)=>(
      <div key={character.id}>
        <h3 className='dd'>Nombre: {character.name}</h3>
        <img src={character.image} alt="" />
        <p> Especie: {character.species}</p>
        <p>first seen : {character.status}</p>
        <p>En donde se encuentra: {character.location.name}</p>

      </div>
      ))}
  </div>
  );
}

export default App;
