import React from 'react';
import { Provider } from 'react-redux';

import SuperheroList from './components/superhero-list';
import SuperheroDetail from './components/superhero-detail';

import './App.scss';
import store from './store';

const App = () => (
  <Provider store={store}>
    <SuperheroList />
    <SuperheroDetail />
  </Provider>
);

export default App;
