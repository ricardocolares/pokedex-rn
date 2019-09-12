import React, { useEffect, useState } from 'react';

import { Container, Title, List } from './styles';
import Card from '~/components/Card';
// import Background from '~/components/Background';
import api from '~/service/api';

export default function Home() {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    async function loadPokedex() {
      const response = await api.get();

      setPokedex(response.data.pokemon);
    }

    loadPokedex();
  }, []);
  return (
    <Container>
      <Title>Pokedex</Title>

      <List
        data={pokedex}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Card data={item} />}
      />
    </Container>
  );
}
