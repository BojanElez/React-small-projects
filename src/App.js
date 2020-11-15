  
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Accordion from './Pages/Accordion/Accordion';
import Menu from './Pages/Menu/Menu';
import Home from './Pages/HomePage/Home';
import Review from './Pages/Review/Review';
import TourPage from './Pages/Tours/TourPage';
import Tabs from './Pages/Tabs/Tabs';

function App() {
  return (
    <>
      <Router>
        <section>
          <nav>
              <ul className="menuItems">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/accordion">Accordion</Link></li>
                <li><Link to="/review">Review</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/tourpage">Tour Page</Link></li>
                <li><Link to="/tabs">Tabs</Link></li>
              </ul>
            </nav>
        </section>
        <Switch>
          <Route path="/tabs">
            <Tabs />
          </Route>
          <Route path="/tourpage">
            <TourPage />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/accordion">
            <Accordion />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;