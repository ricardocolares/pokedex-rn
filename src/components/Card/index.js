import React from 'react';

import { Container, PokemonImage, PokemonName } from './styles';

export default function Card({ data }) {
  return (
    <Container>
      <PokemonImage
        source={{
          uri: data
            ? data.img
            : 'http://www.serebii.net/pokemongo/pokemon/001.png',
        }}
      />
      <PokemonName />
    </Container>
  );
}
