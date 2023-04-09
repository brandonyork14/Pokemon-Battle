import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


//1-30 pokemon list

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);


    const CallApi = async() => {
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=30")
            setPokemon(response.data.results);
        } catch(error) {
            console.error(error)
        }
    }
  useEffect(() => {
    CallApi();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ol>
        {pokemon.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`} state={{ pokemon }}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
