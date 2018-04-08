import React, { Component } from 'react'

class Request extends Component {
  constructor (props) {
    super(props)
    this.state = {result: ''}
    this.fetchData = this.fetchData.bind(this)
  }

   async fetchData () {
     let options = {
       method: this.props.settings.method
     }
    if (options.method === 'POST') {
      options.body = JSON.stringify(this.props.settings.json)
    }
    
    try {
      let response = await  (await fetch(`http://${this.props.settings.url}`, options)).json()
      this.setState({result: response})
    } catch (err) {
      this.setState({result: err.message})
    }

  }

  render () {
    return (
      <div>
        <input type="button" value="request" onClick={this.fetchData}/>
        <div>
        {JSON.stringify(this.state.result)}
        </div>
      </div>
    )
  }
}

export default Request