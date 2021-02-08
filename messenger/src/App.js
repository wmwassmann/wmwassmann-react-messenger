import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Messenger from './components/Messenger/Messenger';


function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Navbar/>
          <div>
          <Route exact path='/' component={Home} />
          <Route exact path='messenger' component={Messenger} />
          </div>

        </div>
      </Switch>
    </Router>
  );
}

export default App;
