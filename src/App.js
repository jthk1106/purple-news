import React from 'react';
import './App.css';
import moment from 'moment';
import News from './News';

function App() {
  return (
    <div className="App">
      <div className="container-fluid main-container">
        <div className="row justify-content-center">
          <div className="jumbotron header justify-content-center">
            <h1 className="display-4 title">purple news</h1>
            <p>reading between the party lines</p>
            <hr className="my-4 title-divider"/>
            <div className='date'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
          </div>
        </div>
        <div className="row justify-content-around">
            <News source={'CNN'} color='red'></News>
            <News source={'Fox'} color='dodgerblue'></News>
        </div>
      </div>
    </div>
  );
}

export default App;
