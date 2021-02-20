import React from 'react'
import Home from "./Home";
import Stuffs from "./Stuffs";
import Contact from "./Contact";
import './main.css'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
export default function main() {
  return (
    <div>
      <h1>Simple SPA</h1>
      <Router>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stuffs">Stuff</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="content">
          <Switch>
            <Route path="/stuffs">
              <Stuffs/>
            </Route> 
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch> 
        </div>
      </Router>  
    </div>
  )
}
