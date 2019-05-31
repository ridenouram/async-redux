import React from 'react';
import AllCharacters from '../containers/AllCharacters';
import { Provider } from 'react-redux';
import store from '../store';

export default function App() {
  return (
    <AllCharacters />
  );
}
