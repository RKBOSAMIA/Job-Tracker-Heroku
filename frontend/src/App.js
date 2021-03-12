import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './components/homepage';
import JobLists from './components/results';

class App extends React.Component {
    render(){
      return (
        <div className='App'>
          <Router>
            <Switch>
              <Route exact path="/" component={ HomePage }/>
              <Route exact path="/results"  component={ JobLists }/>
            </Switch>
          </Router>
        </div>
      );
  }
} 
export default App;
