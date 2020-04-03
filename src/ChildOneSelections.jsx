import React, { Component } from 'react'
import './Shapes.css'
import Shape from './Shape'
import { SelectionsContext } from './ParentContainer'

export default class ChildOneSelections extends Component {

  render() {
    return (
      <div>
        <SelectionsContext.Consumer>
          {
            value => (
              value.selections.map( (elem, index) => {
                return(
                  <div key={index}>
                    <button
                      onClick={() => value.changeSelections('remove', index)}
                    >
                      X
                    </button>
                    <Shape data={elem} />
                  </div>
                )
              })
            )
          }
        </SelectionsContext.Consumer>
      </div>
    )
  }
}