import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Navigation from './Navigation';
import Home from './Home';
import Menu from './Menu';
import Location from './Location';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='rope'>
            <h1>Connies Country Western Pub</h1>
            <p>Negril, Jamaica</p>
            <p className='motto'>"10 square feet of Texas"</p>
          </div>
        </header>
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/location' component={Location} />
        <Route path='/about' component={About} />
        <p className='sig'>Website by <a href="mailto:jamesonbrown@neolivity.com">Jameson Brown</a></p>
      </div>
    );
  }
}

export default App;
