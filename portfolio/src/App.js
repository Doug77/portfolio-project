import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './components/mainPage/MainPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ MainPage } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
