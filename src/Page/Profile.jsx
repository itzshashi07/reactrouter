import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Paragraph from "../Component/Paragraph/Paragraph";
import ProfileImg from "../Image/profile.png";
import Button from "../Component/Button/Button";
const Profile = () => {

  let Navigate=useNavigate();
  const redirect1=()=>{
    Navigate("/Login")
  }

  let location = useLocation();
  console.log(location);
  return (
    <div className="flex flex-row justify-center">
      <div className="  md:w-[800px] lg:w-[70%]  w-[400px] shadow-black shadow-2xl mx-4 h-[800px] border-[2px] border-[#192A56] mt-4 md:mt-12  ">
        <Paragraph
          ParagraphText="Welcome to profile page "
          className="text-[44px] font-[600] text-[#192A56] my-4 underline text-center"
        />
        <div className="flex flex-row justify-center ">
          <img src={ProfileImg} alt="ProfileImg" />
        </div>
        <Paragraph
          ParagraphText={`FullName: ${location.state.Name}`}
          className="text-[30px] font-[600] text-[#192A56]  mx-8 my-4 text-left"
        />
        <Paragraph
          ParagraphText={`Email: ${location.state.Email}`}
          className="text-[30px] font-[600] text-[#192A56] mx-8 my-4 text-left"
        />

        <div className="flex flex-row justify-center">
          <Button
            ClassName="  w-[300px] h-[60px] bg-[#192A56] text-[20px] text-[#fff] font-bold mt-6   rounded-[14px]"
            buttonText="Logout"
            handleClick={redirect1}

          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
