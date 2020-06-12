import React, { Component } from 'react'

export default class completeTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      complete: false
    }
  }

  render() {
    return (
      <div>
        <h4>Complete Tasks</h4>
        <div>
          <label htmlFor="complete">Complete?</label>
          <input type="checkbox" id="complete" value="complete" checked={ this.state.complete } onChange={ this.onCompleteChange }></input>
        </div>
      </div>
    )
  }
}
