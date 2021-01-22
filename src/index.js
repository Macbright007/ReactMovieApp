import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
//import App from './App';
import SearchMovies from './searchMovies';


class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Fliq~Movie Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
