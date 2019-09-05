import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import styled from 'styled-components';
import api from './service/api';

// import { Container } from './styles';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PokemonName = styled.Text`
  font-size: 15px;
  margin-top: 30px;
`;

const PokemonImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export default function Index() {
  // const [pokemon, setPokemon] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonImageUri, setPokemonImageUri] = useState('');

  async function loadPokemonName() {
    const response = await api.get('pokemon', {
      params: {
        offset: 0,
        limit: 150,
      },
    });
    setPokemonList(response.data.results);
  }

  useEffect(() => {
    loadPokemonName();
  }, []);

  return (
    <Container>
      <ScrollView>
        {pokemonList.map(pokemon => (
          <PokemonName key={pokemon.name}>{pokemon.name}</PokemonName>
        ))}
      </ScrollView>
    </Container>
  );
}
