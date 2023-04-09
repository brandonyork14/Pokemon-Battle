import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import PokemonCard from "./Card";

export default function PokemonDetail(props) {
  const location = useLocation();
  const data = location.state.pokemon;
  console.log(data)
  const [pokemon, setPokemon] = useState({});
  
  const PokeApi = async () => {
    try{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data.name}`);
      setPokemon(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    PokeApi();
  }, [data]);
  
  const pokemonData = {
    name: pokemon.name,
    types: pokemon.types ? pokemon.types.map(type => type.type.name) : [],
    moves: pokemon.moves ? pokemon.moves: [],
    id: pokemon.id,
    imageURL: pokemon.sprites ? pokemon.sprites.front_default: []
  };


  return (
    <>
      <PokemonCard pokemon={pokemonData} />
    </>
  )
}