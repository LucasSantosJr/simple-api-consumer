import React, { Component } from 'react'

class JsonFields extends Component {

  constructor () {
    super()
    this.state = {fields: []}
    this.addField = this.addField.bind(this)
    this.buildJSON = this.buildJSON.bind(this)
  }

  buildJSON () {

    let obj = {},
    keys = document.querySelectorAll('input.keys'),
    values = document.querySelectorAll('input.values'),
    size = keys.length

    for (let i = 0; i < size; ++i) {
      obj[keys[i].value] = values[i].value
    }
    console.log(obj)
  }

  addField () {
    var field = (
      <div>
        <input type="text" className="keys"/> : <input type="text" className="values"/>
      </div>
    )
    this.setState(function (prev) {
      return { fields: prev.fields.concat(field)}
    })
  }

  render () {
    return (
      <div className="content">
        <span>{"{"}</span>
          {this.state.fields}
          <span>{"}"}</span>
          <br/>
        <input type="button" value="+" onClick={this.addField}/>
        <input type="button" value="build" onClick={this.buildJSON}/>
      </div>
    )
  }

}

export default JsonFields