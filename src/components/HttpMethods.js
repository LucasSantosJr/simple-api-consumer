import React, { Component } from 'react'

class HttpMethods extends Component {
  constructor (props) {
    super(props)
    this.updateMethod = this.updateMethod.bind(this)
  }

  updateMethod () {
    this.props.method(document.querySelector('select').value)
  }

  render () {
    return (
      <div>
        <select onChange={this.updateMethod}>
          <option value="GET" index="1">GET</option>
          <option value="POST" index="2">POST</option>
        </select>
      </div>
    )
  } 
}

export default HttpMethods;