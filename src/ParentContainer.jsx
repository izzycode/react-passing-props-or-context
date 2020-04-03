/* eslint-disable default-case */
import React, { Component, createContext } from 'react'
import ChildOneSelections from './ChildOneSelections'
import ChildTwoList from './ChildTwoList'

const SelectionsContext = createContext()

class ParentContainer extends Component {

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
        <SelectionsContext.Provider value={{
          selections: this.state.selections,
          changeSelections: this.changeSelections
        }}>
          <ChildTwoList/>
          <ChildOneSelections/>
        </SelectionsContext.Provider>
      </div>
    )
  }
}

export default ParentContainer
export { SelectionsContext }