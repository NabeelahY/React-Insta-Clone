import React, { Component } from 'react';
import './App.css';
import dummyData from './components/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar />
        </header>
      </div>
    );
  }
}

export default App;
