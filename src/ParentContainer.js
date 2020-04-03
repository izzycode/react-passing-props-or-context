/* eslint-disable default-case */
import React, { Component } from 'react'
import ChildOneSelections from './ChildOneSelections'
import ChildTwoList from './ChildTwoList'

export default class ParentContainer extends Component {

  state = {
    selections: []
  }

  changeSelections = (type, value) => {
    switch (type) {
      case 'add': // takes value as a whole object
        this.setState({ selections: [...this.state.selections, value] })
        break
      case 'remove': // takes value as an index position
        let tempSelections = [...this.state.selections] // clone the state's value because you should never mutate the state directly
        tempSelections.splice(value, 1)
        this.setState({ selections: tempSelections })
    }
  }

  render(){
    return (
      <div>
        <ChildTwoList changeSelections={this.changeSelections}/>
        <ChildOneSelections selections={this.state.selections} changeSelections={this.changeSelections}/>
      </div>
    )
  }
}
