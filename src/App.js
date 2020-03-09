import React, { useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import TableComponent from './TableComponent';

function App() {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('hey');

    axios
      .get(`https://parseapi.back4app.com/classes/Comment`, {
        headers: {
          'X-Parse-Application-Id': process.env.REACT_APP_APP_ID,
          'X-Parse-REST-API-Key': process.env.REACT_APP_API_KEY,
          'X-Parse-Master-Key': process.env.REACT_APP_MASTER_KEY,
        },
        params: {
          limit: '100000000',
        },
      })
      .then((e) => {
        console.log('e', e);
        // this.setState({ list: e.data.results });
      })
      .catch((err) => console.log('in the error', err));

    // axios({
    //   method: 'GET',
    //   url: `https://parseapi.back4app.com/classes/_User/`,
    //   headers: {
    //     'X-Parse-Application-Id': process.env.REACT_APP_APP_ID,
    //     'X-Parse-REST-API-Key': process.env.REACT_APP_API_KEY,
    //     'X-Parse-Master-Key': process.env.REACT_APP_MASTER_KEY,
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((e) => {
    //     console.log('e', e);
    //     // this.setState({
    //     //   open: false,
    //     // });
    //     // window.location.reload();
    //   })
    //   .catch((err) => console.log(err.response));
    // Update the document title using the browser API
  });

  return (
    <div className="App">
      <header className="App-header">
        <TableComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
