import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
    <div className = "container">
    <div className="row">
    <div className="col-md-8">
    <form className="form-horizontal">
      <fieldset>

      <legend>Nearby places</legend>
        <div className="col-md-10">
        
        
        <div className="form-group">
      <label htmlfor="exampleInputEmail1">Places</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search here"/>
      
    </div>
    </div>
    <div className="col-md-2">
      <button className="btn btn-primary">Search</button>
    </div>
    </fieldset>  
  </form>
  <ul>
    <li>Kandy</li>
    <li>Colombo</li>
  </ul>
  </div>
  <div className="col-md-4">
  
  <h2>saved places</h2>
  
  </div>
  </div>
  </div>
    );
  }
}

export default App;
