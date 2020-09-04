import React from 'react';
import './App.css';
import News from './News';

function App() {
  return (
    <div className="App">
      <div className="container main-container">
        <div className="row justify-content-center">
          <div className="jumbotron header">
            <h1 className="display-4 title">purple news</h1>
            <hr className="my-4 title-divider"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          </div>
        </div>
        <div className="row justify-content-around">
            <News source={'CNN'} color='red'></News>
            <News source={'Fox'} color='blue'></News>
        </div>
      </div>
    </div>
  );
}

export default App;
