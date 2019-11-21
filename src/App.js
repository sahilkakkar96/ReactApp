import React from 'react';
import {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Info from './Info';

class  App extends Component {

  state ={
    value: ''
  }

  changeValue1 = () => {
    this.setState({
      value: 'John Legend'
    });
  }
  changeValue2 = () => {
    this.setState({
      value: 'Ariana Grande'
    });
  }
  changeValue3 = () => {
    this.setState({
      value: 'Bruno Mars'
    });
  }
  render() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> */}
      <div><Menu></Menu></div>
      <div><Info name={this.state.value} changedValue1= {this.changeValue1} changedValue2= {this.changeValue2} changedValue3= {this.changeValue3}></Info></div>
      
    </div>
  );
}
}

export default App;
