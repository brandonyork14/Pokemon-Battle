import React, { useState } from 'react';
import PokemonCard from './Card';
import {useContext} from 'react';
import {MyPokemon} from '../App';

export default function PokemonTeam() {
    const {capturedPokemon} = useContext(MyPokemon);
    

  return (
    <div>
      <h1>My Pokemon Team</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {capturedPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            onRelease={() => releasePokemonFromTeam(pokemon)}
            onCatch={() => catchOrReleasePokemon(pokemon)}
          />
        ))}
      </div>
    </div>
  );
}