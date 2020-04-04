import React, { Component, useState, useContext } from 'react'
import { SelectionsContext } from './ParentContainer'

const initialState = [
  { id: 1, name: "Square", color: "hotpink" },
  { id: 2, name: "Circle", color: "limegreen" },
  { id: 3, name: "Triangle", color: "papayawhip" },
] // this data could come from an API or DB (database)

const ChildTwoList = () => {

  const [list, _setList] = useState(initialState);
  const context = useContext(SelectionsContext)

  return (
    <div>
      {
        list.map(elem => {
          return  <button
                    key={elem.id}
                    //onClick calls the parent method trough the context and sends type and value
                    onClick={() => context.changeSelections('add', elem)}
                  >
                    Draw a {elem.name}
                  </button>
        })
      }
    </div>
  )
}


export default ChildTwoList