import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router, Route,
  Link
} from 'react-router-dom'
import './App.css';
import Artigo from './artigo';

/* function App() {
  
  return (
    <div className="App">
      <Artigo />
    </div>
  );
} */

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/artigos/:slug' component={Artigo} />  
      </Router>
    )
  }
}

export default App;
