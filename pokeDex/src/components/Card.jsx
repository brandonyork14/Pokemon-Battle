import React, { useState, useEffect, useContext } from 'react';
import CardContent from './CardContents';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {MyPokemon} from '../App';



export default function PokemonCard(props) {
  const {capturedPokemon} = useContext(MyPokemon);
  const { pokemon } = props;
  const [backgroundColor, setBackgroundColor] = useState('');
  const {setCapturedPokemon} = useContext(MyPokemon);

  useEffect(() => {
    const primaryType = pokemon.types ? pokemon.types[0]: '';
    const color = typeColor[primaryType] || '';
    setBackgroundColor(color);
  }, [pokemon]);

  const addPokemonToTeam = (pokemon) => {
    if (capturedPokemon.length >= 6 || capturedPokemon.find((p) => p.name === pokemon.name)) {
      // If team is full or if this pokemon has already been added, do nothing
      return;
    }
    setCapturedPokemon((prevCapturedPokemon) => [...prevCapturedPokemon, pokemon]);
  };

  const releasePokemonFromTeam = (pokemon) => {
    setCapturedPokemon((prevCapturedPokemon) =>
      prevCapturedPokemon.filter((p) => p.name !== pokemon.name)
    );
  };

  const catchOrReleasePokemon = (pokemon) => {
    if (capturedPokemon.includes(pokemon)) {
      releasePokemonFromTeam(pokemon);
    } else {
      addPokemonToTeam(pokemon);
      console.log(pokemon);
    } 
  };

  const typeColor = {
    grass: "green",
    fire: "red",
    electric: "yellow",
    ground: "brown",
    rock: "brown",
    water: "blue",
    psychic: "purple",
    poison: "purple",
    dragon: "silver",
    steel: "silver",
    flying: "cyan",
    ice: "cyan",
    normal: "gray"
  }
  

    return (
      <div>
        <Card style={{ width: '18rem', backgroundColor }}>
          <Card.Img variant="top" src={pokemon.imageURL} />
          <Card.Body>
            <CardContent pokemon={pokemon} />
            <Link to="/">
              <Button variant="primary">Home</Button>
            </Link>
            <Button variant="primary" onClick={() => catchOrReleasePokemon(pokemon)}>
              Catch/Release
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
};
