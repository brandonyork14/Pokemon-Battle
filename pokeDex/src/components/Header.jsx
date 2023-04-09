import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState({});
  let navigate = useNavigate();
  
  async function handleSearch(event){
    event.preventDefault();
    const search=searchTerm.toLowerCase().trim();
    try{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      const pokemon = response.data;
      setPokemonData({pokemon});
      if(pokemon){
        navigate(`/pokemon/${pokemon.name}`, {state:{pokemon}});
      }
    } catch (error){
      console.error(error);
    }
    
  }

  function inputChange(event){
    setSearchTerm(event.target.value)
  }

  return (
    <header className="header">
      <h1>PokeDex</h1>
      <nav className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/Team">{`Team#${props.capturedPokemon.length}`}</Link>
      </nav>
      <form className="form" onSubmit={handleSearch}>
        <input className="input" placeholder='Enter Pokemon Name' value={searchTerm} onChange={inputChange}></input>
        <button className="btn btn-primary" type='submit'>Search</button>
      </form>
    </header>
  );
}