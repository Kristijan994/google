import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Scripts from './components/Scripts';

class App extends Component {
  render() {
      return (
        <div>
          <Header />
          <Scripts />
        </div>
      );
  }
}

export default App;