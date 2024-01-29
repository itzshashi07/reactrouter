import React from "react";
import Paragraph from "../Component/Paragraph/Paragraph";
import ContactMe from "../Image/contact.png";
import Textfield from "../Component/Textfield/Textfield";
import Button from "../Component/Button/Button";
// import { Outlet } from "react-router-dom";
const Contact = () => {
  return (
    <div className="mt-20">
      <div>
        <Paragraph
          ParagraphText="Contact Me "
          className="text-[44px] text-[#192A56] font-[600] text-center underline my-4"
        />
        <div className=" flex xl:flex-row flex-col xl:justify-between mt-12">
          <div className=" xl:w-[50%]  shadow-black shadow-2xl mx-4 mb-2 h-[600px] lg:h-[550px] border-[2px] border-[#192A56] flex flex-row justify-center">
            <div>
              <Paragraph
                ParagraphText="Hi I am shashi you can contact me through this contact form . "
                className="text-[24px] text-[#192A56] font-[600] text-center my-4"
              />
              <div className="flex flex-row justify-center ">
                <div>
                <Textfield
                placeholder="fullName "
                className="lg:w-[700px]  w-[300px] h-[60px] border-[2px] border-[#192A56] rounded-[14px] outline-none  placeholder:text-[20px] placeholder:text-center placeholder:text-[#000] mt-4 "
              />
              <Textfield
                placeholder="Contact No "
                className="lg:w-[700px]  w-[300px] h-[60px] border-[2px] border-[#192A56] rounded-[14px] outline-none  placeholder:text-[20px] placeholder:text-center placeholder:text-[#000] mt-6 "
              />
              <Textfield
                placeholder="Description "
                className="lg:w-[700px]  w-[300px] h-[200px] border-[2px] border-[#192A56] rounded-[14px] outline-none  placeholder:text-[20px] placeholder:text-center placeholder:text-[#000]  mt-6"
              />
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <Button
                  ClassName="w-[300px] h-[60px] bg-[#192A56] text-[20px] text-[#fff] font-bold mt-6  "
                  buttonText="Submit "
                />
              </div>
            </div>
          </div>

          <div className=" hidden w-[50%] xl:flex flex-row justify-center mt-4 ">
            <img className="w-[60%]" src={ContactMe} alt="Contact Me" />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Contact;
