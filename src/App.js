import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import List from './List';
function App() {
  let items = [
    {
      key:1,
     text: "App development with Java and Kotlin",
      
    },
    { key:2,
      text: "Web development Nodejs",
      
    },
    {key:3,
      text: "MERN stack ",
      
    },
    {key:4,
      text: "Machine Learning with python",
     
    },
  ];
  return (
    <div className="App">
     <List items={items}></List>
  
    </div>
  );
}

export default App;
