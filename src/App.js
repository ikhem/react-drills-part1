import React, { Component } from 'react';
import GreenBox from './GreenBox'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'React Drill',
      flag: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  handleChange(event){
    var newTitle = event.target.value;

    this.setState({ title: newTitle })
  }

  updateTitle(pTitle){
    this.setState({ title: pTitle, flag: true })
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.title }</h1>
          <input onChange={this.handleChange} placeholder={ this.state.title } />
        <div className="Main">
          <GreenBox title={ this.state.title } handleClick={this.updateTitle} flag={this.state.flag}/>
          <GreenBox title={ this.state.title } handleClick={this.updateTitle} flag={this.state.flag}/>
        </div>
      </div>
    );
  }
}

export default App;
