import React, { Component } from 'react';
import Search from './components/search';
import ResultList from './components/resultList';
import SideList from './components/sideList';
import './App.css';


class App extends Component {
  render() {
    return (
    <div className = "container">
    <div className="row">
    <div className="col-md-8">
    
    <Search />

    <ResultList />
  </div>
  <div className="col-md-4">
  
      <SideList />
  
  </div>
  </div>
  </div>
    );
  }
}

export default App;
