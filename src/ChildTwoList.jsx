import React, { Component } from 'react'
import { SelectionsContext } from './ParentContainer'

export default class ChildTwoList extends Component {

  state = {
    list: [
      { id: 1, name: "Square", color: "hotpink" },
      { id: 2, name: "Circle", color: "limegreen" },
      { id: 3, name: "Triangle", color: "papayawhip" },
    ] // this data could come from an API or DB (database)
  }

  render() {
    return (
      <div>
        <SelectionsContext.Consumer>
          {
            value => (
              this.state.list.map(elem => {
                return <button
                  key={elem.id}
                  //onClick calls the parent method trough the prop and sends type and value
                  onClick={() => value.changeSelections('add', elem)}
                >
                  Draw a {elem.name}
                </button>
              })
            )
          }
        </SelectionsContext.Consumer>
      </div>
    )
  }
}
