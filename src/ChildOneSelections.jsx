import React, { Component } from 'react'
import './Shapes.css'
import Shape from './Shape'

export default class ChildOneSelections extends Component {

  render() {
    return (
      <div>
        {
          this.props.selections.map( (elem, index) => {
            return(
              <div key={index}>
                <button
                  onClick={ () => this.props.changeSelections('remove', index) }
                >
                  X
                </button>
                <Shape data={elem} />
              </div>
            )
          })
        }
      </div>
    )
  }
}