import React from 'react'
import './App.css';
import Headera from './Components/Headera';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Loggin from './Components/Loggin';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Headera/>
        <Switch>
          <Route path="/login">
            <Loggin/>
          </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
