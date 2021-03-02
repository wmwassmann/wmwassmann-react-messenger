import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './pages/css/style.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Login from './components/Login/App';


function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Navbar/>
          <div>
          <Route exact path='/l' component={Home} />
          <Route exact path='/p' component={Profile} />
          <Route exact path='/' component={Login} />
          </div>

        </div>
      </Switch>
    </Router>
  
  );
}

export default App;
