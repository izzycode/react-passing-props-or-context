/* eslint-disable default-case */
import React, { useState, createContext } from 'react'
import ChildOneSelections from './ChildOneSelections'
import ChildTwoList from './ChildTwoList'

const SelectionsContext = createContext()

const ParentContainer = () => {

  const [selections, setSelections] = useState([])

  const changeSelections = (type, value) => {
    switch (type) {
      case 'add': // takes value as a whole object
      setSelections([...selections, value])
      break
      case 'remove': // takes value as an index position
      let tempSelections = [...selections] // clone the state's value because you should never mutate the state directly
      tempSelections.splice(value, 1)
      setSelections(tempSelections)
    }
  }

  return (
    <div>

      <SelectionsContext.Provider value={{
        selections,
        changeSelections
      }}>
        <ChildTwoList/>
        <ChildOneSelections/>
      </SelectionsContext.Provider>
    </div>
  )
}

export default ParentContainer
export { SelectionsContext }