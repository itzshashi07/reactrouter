import React from 'react'

const Paragraph = (props) => {
  return (
    <div>
      <p className={props.className}> {props.ParagraphText} </p>
    </div>
  )
}

export default Paragraph
