import React from 'react'
import NotfoundImg from '../Image/Notfound.png'
import Paragraph from '../Component/Paragraph/Paragraph'
const Notfound = () => {
  return (
    <div>
    
    <div className="flex flex-row justify-center mt-6">
        <img src={NotfoundImg} alt="NotfoundImg" />
      </div>
      <Paragraph
        ParagraphText=" 404 Error Page Not Found "
        className=" text-[40px] font-[600] text-[#000] text-center mt-[30px] "
      />

    </div>
  )
}

export default Notfound
