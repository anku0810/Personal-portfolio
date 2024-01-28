import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Ankit_Resume.pdf";



const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-lime-300 to-teal-400 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Ankit Prajapathi
              <div>
              <h2
              // data-aos="fade-up"
              className=" text-black font-bold text-3xl"
            > Welcome to my portfolio😊
            </h2>
            </div>
            </h2>
            <p className="Text"><b>Greetings from  Anku 🌟 Delighted to virtually meet you! 
              I'm Ankit, a passionate full-stack web developer and UI/UX design enthusiast, 
              currently navigating the realms of B.Tech in Information Technology at 
              Chennai Institute of Technology. 🚀 As a meticulous tech enthusiast, my zest for 
              life is fueled by a profound curiosity for cutting-edge technologies. 🌐 Proficient in 
              Python, C, and Java, I dance with coding challenges on platforms like CodeChef and Leetcode,
              honing my logic-building skills. 🚴‍♂️ When not immersed in code, I channel my love for bikes and 
              space exploration, weaving a unique tapestry of experiences.</b>
            </p>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-purple-600 text-4xl font-bold sm:text-3xl"
            />
           
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href=""
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-red-500"
            >
              <span><a  href="https://in.linkedin.com/in/ankit-prajapathi-a-388596244?trk=public_profile_browsemap" target="_blank">Hire Me</a></span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-red-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/anku0810" target="_blank">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://in.linkedin.com/in/ankit-prajapathi-a-388596244?trk=public_profile_browsemap" target="_blank">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_ankit_praju/" target="_blank">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://m.facebook.com/profile.php/?id=100013555248948&name=xhp_nt_" target="_blank">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ANKITPRAJAPATH3?t=ZeKrlHN8ioaVMpFCXiQDkg&s=09"target="_blank">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className=" h-[70%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src="https://i.postimg.cc/HsCXj1CW/Whats-App-Image-2024-01-28-at-11-10-56-08d8aac1.jpg"
              // src={mine}
              alt="mine"
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div data-aos="zoom-in" data-aos-duration="1000"  className=" relative cursor-pointer">
                <img
                  className=" w-[150px] md:w-[100px] circle-text   "
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay
                  className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
