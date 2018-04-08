import React, { Component } from 'react'

class JSONFields extends Component {

  constructor (props) {
    super(props)
    this.state = {fields: [], json: ''}
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

    this.setState({json: obj})

    this.props.method(obj)
  }

  addField () {
    var field = (
      <div>
        <input type="text" className="keys elements" onChange={this.buildJSON}/> : <input type="text" className="values" onChange={this.buildJSON}/>
      </div>
    )
    this.setState(function (prev) {
      return { 
        fields: prev.fields.concat(field)
      }
    })
  }

  render () {
    return (
      <div className="content">
        <span className="element">{"{"}</span>
          {this.state.fields}
        <span className="element">{"}"}</span>
        <br/>
        <input type="button" value="+" onClick={this.addField} />
        <div className="code">
          <pre>
            <code>{JSON.stringify(this.state.json)}</code>
          </pre>
        </div>
      </div>
    )
  }

}

export default JSONFields