import React from "react";
import Paragraph from "../Component/Paragraph/Paragraph";
import loginImg from "../Image/login.png";
import Textfield from "../Component/Textfield/Textfield";
import Button from "../Component/Button/Button";
import { useReducer } from "react";
// import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";

const initialvalue = {
    Name: "",
    Email: "",
    Password: "",
};

const Loginreducer = (state, action) => {
    if (action.type === "Name") {
        return {
            ...state,
            Name: action.payload,
        };
    } else if (action.type === "Email") {
        return {
            ...state,
            Email: action.payload,
        };
    } else if (action.type === "Password ") {
        return {
            ...state,
            Password: action.payload,
        };
    }
};

const Login = () => {
    let navigate = useNavigate();

    const [state, dispatch] = useReducer(Loginreducer, initialvalue);

    const formData = (e, data) => {
        if (data === "Name") {
            dispatch({
                type: "Name",
                payload: e.target.value,
            });
        } else if (data === "Email") {
            dispatch({
                type: "Email",
                payload: e.target.value,
            });
        } else if (data === "Password") {
            dispatch({
                type: "Password ",
                payload: e.target.value,
            });
        }
    };
    const redirect = () => {
        let data = {
            Name: state.Name,
            Email:state.Email,
        };
     
        navigate("/Profile",{state:data});
  
    
        
    };
    return (
        <div className="flex flex-row justify-center">
            <div className="  md:w-[800px] lg:w-[70%]  w-[400px] shadow-black shadow-2xl mx-4 h-[800px] border-[2px] border-[#192A56] mt-4 md:mt-12  ">
                <Paragraph
                    ParagraphText="Login Here"
                    className="text-[44px] font-[600] text-[#192A56] underline my-4 text-center"
                />
                <div className="flex flex-row justify-center">
                    <div>
                        <div className="flex flex-row justify-center">
                            <img
                                src={loginImg}
                                alt="LoginImage"
                                className="w-[150px] h-[150px] "
                            />
                        </div>
                        <Paragraph
                            ParagraphText="FullName *"
                            className="text-[24px] font-[600] text-[#000]  my-4 text-left"
                        />
                        <Textfield
                            placeholder="Full Name.. "
                            handleChange={(e) => formData(e, "Name")}
                            className=" md:w-[700px] w-[300px] h-[60px] border-[2px] border-[#192A56] rounded-[14px] outline-none  placeholder:text-[20px] placeholder:text-center placeholder:text-[#000] mt-4 "
                        />
                        <Paragraph
                            ParagraphText="Email *"
                            className="text-[24px] font-[600] text-[#000]  my-4 text-left"
                        />
                        <Textfield
                            placeholder="Email.. "
                            handleChange={(e) => formData(e, "Email")}
                            className=" md:w-[700px] w-[300px] h-[60px] border-[2px] border-[#192A56] rounded-[14px] outline-none  placeholder:text-[20px] placeholder:text-center placeholder:text-[#000] mt-4 "
                        />
                        <Paragraph
                            ParagraphText="Password *"
                            className="text-[24px] font-[600] text-[#000]  my-4 text-left"
                        />
                        <Textfield
                            placeholder="Password.. "
                            handleChange={(e) => formData(e, "Password")}
                            className=" md:w-[700px] w-[300px] h-[60px] border-[2px] border-[#192A56] rounded-[14px] outline-none  placeholder:text-[20px] placeholder:text-center placeholder:text-[#000] mt-4 "
                        />
                        <div className="flex flex-row justify-center">
                            <Button
                                ClassName="w-[300px] h-[60px] bg-[#192A56] text-[20px] text-[#fff] font-bold mt-6   rounded-[14px]"
                                buttonText="Login "
                                handleClick={redirect}
                            />
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    );
};

export default Login;
