import React from "react";
import Paragraph from "../Component/Paragraph/Paragraph";
import Person from "../Image/person.png";
import { Outlet } from "react-router-dom";
function Homepage() {
  
  return (
    <div>
      <div className="flex flex-row justify-center mt-6 ">
        <img className="h-[300px]" src={Person} alt="Person" />
      </div>

      <Paragraph
        ParagraphText="Hi I am shashi . How can i help you? "
        className=" lg:text-[40px] text-[30px] font-[600] text-[#000] text-center mt-[30px] "
      />
      <Outlet/>

    </div>
  );
}

export default Homepage;
