import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";



import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaDocker } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import { FaFilePowerpoint } from "react-icons/fa";


const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-text-yellow-500  sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-cyan-500 font-bold text-2xl  w-[100%]"> Here are my skills.</p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={85} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={75} />
                <ProgressBar
                  logo={<IoLogoJavascript />}
                  name={"Javascript"}
                  value={60}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={50} />
                <ProgressBar
                  logo={<SiMysql />}
                  name={"MYSQL"}
                  value={80}
                />

                <ProgressBar logo={<FaGit />} name={"Git"} value={75} />
                <ProgressBar logo={<FaPython />} name={"Python"} value={80} />
                <ProgressBar logo={<SiSelenium />} name={"Selenium"} value={40} />
                <ProgressBar logo={<SiPowerbi/>} name={"PowerBi"} value={30} />
                <ProgressBar logo={<SiCanva />} name={"Canva"} value={90} />
                <ProgressBar logo={<FaFileExcel />} name={"Excel"} value={82} />
                <ProgressBar logo={<FaFilePowerpoint/>} name={"Powerpoint"} value={80} />
                <ProgressBar logo={<IoLogoNodejs/>} name={"Node Js"} value={40} />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"white"}
                white={"black"}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMysql />}
                black={"white"}
                white={"black"}
                skill={"MYSQL"}
              />

              <SkillBox
                logo={<FaDocker/>}
                black={"white"}
                white={"black"}
                skill={"Docker"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<FaGit/>}
                black={"black"}
                white={"white"}
                skill={"Git"}
              />
           
              <SkillBox
                className=""
                logo={
                  <FaJava />
                }
                black={"black"}
                white={"white"}
                skill={"Java"}
              />
              <SkillBox
                className=""
                logo={
                  <IoLogoJavascript />
                }
                black={"black"}
                white={"white"}
                skill={"JavaScript"}
              />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Skills;
