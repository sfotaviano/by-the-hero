import React from 'react';
import Routes from './src/routes'
import { StatusBar } from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

StatusBar.setBarStyle('dark-content');
export default function App() {
  return (
    <Routes />
  );
}

