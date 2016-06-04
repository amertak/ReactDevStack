import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'

require('../style/style.scss')

class Sample extends Component {
  constructor() {
    super()
    
    this.state = {
      counter: 0,
    }
    this.addCount = this.addCount.bind(this)
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      })
    }, 500)
  }
  componentDidUnmout() {
    clearInterval(this.interval)
  }
  addCount() {
    this.setState({
      counter: this.state.counter + 100,
    })
  }
  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.addCount}>Add</button>
      </div>
    )
  }
}

render(<Sample />, document.getElementById('app'))
