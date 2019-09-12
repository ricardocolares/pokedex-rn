import React from 'react';
import { ScrollView } from 'react-native';

import Routes from './routes';

// import { Container } from './styles';

export default function Index() {
  return (
    <React.Fragment>
      <ScrollView>
        <Routes />
      </ScrollView>
    </React.Fragment>
  );
}
