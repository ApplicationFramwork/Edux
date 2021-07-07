import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Index from "./components/home/Index";
function App() {
  return (
      <Router>
          <div>
              <Route path = "/" exact component = {Index}></Route>
          </div>
      </Router>
  );
}

export default App;
