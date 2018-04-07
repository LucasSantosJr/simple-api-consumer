import React, { Component } from 'react'

class MyURL extends Component {
  constructor (props) {
    super(props)
    this.updateURL = this.updateURL.bind(this)
  }

  updateURL () {
    this.props.method(document.querySelector('input#url').value)
  }

  render () {
    return (
      <label>http://
        <input type="text" id="url" onChange={this.updateURL}/>
      </label>
    )
  }
}

export default MyURL