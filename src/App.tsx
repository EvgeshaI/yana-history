import React from 'react';
import './App.css';
import {Start} from "./Start/Start";
import {Facts} from "./Facts/Facts";
import {MyServices} from "./Services/MyServices";
import {Reviews} from "./Reviews/Reviews";

function App() {
  return (
    <div className="App">
        <Start/>
        <Facts/>
        <MyServices/>
        <Reviews/>
    </div>
  );
}

export default App;
