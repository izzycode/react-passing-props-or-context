import React, { useContext } from 'react'
import Shape from './Shape'
import { SelectionsContext } from './ParentContainer'

const ChildOneSelections = () => {
  const context = useContext(SelectionsContext)

  return (
    <div>
        {
          context.selections.map((elem, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => context.changeSelections('remove', index)}
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

export default ChildOneSelections