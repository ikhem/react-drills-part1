import React, { Component } from 'react';
import './GreenBox.css';

class GreenBox extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: this.props.title
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({ title: event.target.value })
  }

  componentWillReceiveProps(props){
    if(props.flag){
       this.setState({ title: props.title})
    }
  }

  render(){
    return(
      <div className='box'>
        <div className='content'>
          <h2>{ this.state.title }</h2>
            <input onChange={this.handleChange} />
            <button onClick={this.props.handleClick.bind(null, this.state.title)}>Button</button>
        </div>
      </div>
    );
  }
}

export default GreenBox;