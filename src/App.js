import React, { Component } from 'react';
import './App.css';
import  Index from './components/WeatherFinder/index';


class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">
                    Weather Finder Application
                </h1>
            </header>
            <div>
                <Index/>
            </div>
        </div>
    )
  }
}

export default App;
