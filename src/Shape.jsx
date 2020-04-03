import React from 'react'

const setStyle = elem => {
  let style = {}
  if (elem.name === "Triangle") {
    style.borderBottomColor = elem.color
  }
  else {
    style.background = elem.color
  }
  return style
}

const Shape = (props) => {
  return (
    <div
      className={`shape ${props.data.name}`}
      style={setStyle(props.data)}
    ></div>
  )
}

export default Shape
