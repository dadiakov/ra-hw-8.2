import React from 'react';
import './App.css';
import GetData from './components/GetData';
import GetError from './components/GetError';
import ShowLoading from './components/ShowLoading';

export default function App() {
  return (
    <React.Fragment>
      <GetData />
      <GetError />
      <ShowLoading />
    </React.Fragment>
  );
}