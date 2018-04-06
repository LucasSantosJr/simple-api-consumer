import React, { Component } from 'react'

class HttpMethods extends Component {
  constructor (props) {
    super(props)
    this.state = {methods: ['GET', 'POST']}
  }

  render () {
    return (
      <div>
        <select>
          {
            this.state.methods.map(function (method, index){
             return <option value={method} index={index}>{method}</option>
            })
          }
        </select>
      </div>
    )
  } 
}

export default HttpMethods;