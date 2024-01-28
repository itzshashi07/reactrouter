import React from "react";
import Paragraph from "../Component/Paragraph/Paragraph";
import about from "../Image/about.png";
import { useLocation ,useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const About = () => {

  // let location=useLocation();
  // console.log(location.state.data)

  let text =
    "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content. The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.";
  return (
    <div>
      <Paragraph
        ParagraphText="About me"
        className="text-[44px] font-[600] text-[#192A56] underline my-4 text-center"
      />
      <div>
        <div className="  flex flex-col xl:flex-row xl:justify-between">
          <div className=" xl:w-[50%] md:w-[700px] w-[360px] shadow-black shadow-2xl mx-6 md:px-6 px-2 h-[580px] md:h-[700px] border-[2px] border-[#192A56] ">
            <Paragraph
              ParagraphText="Its About  Shashi "
              className="  lg:text-[44px] text-[30px] font-[600] text-[#192A56] my-4 text-center"
            />
            <Paragraph
              ParagraphText={text}
              className=" text-[16px] md:text-[24px]  font-[400] text-[#000] mt-14 "
            />
          </div>

          <div className= "  hidden w-[50%] xl:flex flex-row justify-center mt-22" >
            <img src={about} alt="about" />
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default About;
