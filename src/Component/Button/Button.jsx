import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className={props.ClassName}  onClick={props.handleClick} >{props.buttonText} </button>
    </div>
  )
}

export default Button
