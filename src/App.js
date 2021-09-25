import React from 'react';
import './App.css';
import Homepage from './pages/homepage.component';
import './pages/homepage.styles.scss';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (<h1>hats page</h1>)


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/hats' component={HatsPage} />
    </Switch>
  );
}

export default App;
