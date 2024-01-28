import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className="bg-purple-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="1000"

            href="https://in.linkedin.com/in/ankit-prajapathi-a-388596244?trk=public_profile_browsemap" target="_blank"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaLinkedin className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>LinkedIn</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="https://api.whatsapp.com/send/?phone=3938292321&text&type=phone_number&app_absent=0" target="_blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://www.instagram.com/_ankit_praju" target="_blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://twitter.com/ANKITPRAJAPATH3?t=ZeKrlHN8ioaVMpFCXiQDkg&s=09" target="_blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaTwitter className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Twitter</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          <p>| ©2024 Copyright Ankit - All Rights Reserved |</p>
          <a href="#"></a> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
