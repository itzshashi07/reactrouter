import React from 'react'

const Textfield = (props) => {
  return (
    <div>
      <input placeholder={props.placeholder} onChange={props.handleChange} className={props.className}/>
    </div>
  )
}

export default Textfield
