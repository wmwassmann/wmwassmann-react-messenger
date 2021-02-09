import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './pages/css/style.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Messenger from './pages/Messenger/Messenger';
import Login from './components/Login/App';


function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Navbar/>
          <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/m' component={Messenger} />
          <Route exact path='/l' component={Login} />
          </div>

        </div>
      </Switch>
    </Router>
  
  );
}

export default App;
