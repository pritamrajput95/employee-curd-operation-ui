import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import ListEmpComponents from './components/ListEmpComponents';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import CreateEmpComponents from './components/CreateEmpComponents';
import UpdateEmpComponents from './components/UpdateEmpComponents';
 
function App() {
  
  return (
    <div>
      <Router>
        <div className='header'>
        <HeaderComponents />
        </div>
        
        <div className="container">
          {/* This route will match the base path and /emp/employees */}
           <Switch>
          <Route te exact path={['/', '/employees']} component={ListEmpComponents} />
          <Route exact path={['/', '/add']} component={CreateEmpComponents} />
          <Route exact path='/update/:id' component={UpdateEmpComponents} />

          </Switch>
        </div>
        <div className='footer'>
        <FooterComponents />
        </div>
      </Router>
    </div>
  );
}

export default App;
