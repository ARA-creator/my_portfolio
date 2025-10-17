"use client";

import React from "react";
import { 
  SiPython,
  SiTensorflow,
  SiMysql,
  SiJavascript,
  SiReact,
  SiTableau
} from "react-icons/si";
import { 
  FaChartBar, 
  FaBrain, 
  FaDatabase,
  FaChartLine,
  FaFileExcel
} from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";

import Tilt from 'react-parallax-tilt';

const skills = [
  { name: "Python", icon: <SiPython />, percentage: 92 },
  { name: "Data Analysis", icon: <FaChartBar />, percentage: 90 },
  { name: "Machine Learning", icon: <FaBrain />, percentage: 87 },
  { name: "Power BI", icon: <FaChartLine />, percentage: 88 },
  { name: "Excel/SPSS", icon: <FaFileExcel />, percentage: 95 },
  { name: "SQL", icon: <FaDatabase />, percentage: 89 },
  { name: "TensorFlow", icon: <SiTensorflow />, percentage: 82 },
  { name: "Tableau", icon: <SiTableau />, percentage: 85 },
  { name: "JavaScript", icon: <SiJavascript />, percentage: 85 },
  { name: "React.js", icon: <SiReact />, percentage: 83 }
]

const Skills = () => {
  return <div className="text-white pt-16 pb-16">
    <h1 className="text-center text-2xl md:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
    </h1>
    <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill, i) => {
            return (
            <Tilt key={skill.name} scale={1.5} transitionSpeed={400} >
                <div 
                  data-aos="flip-right" 
                  data-aos-anchor-placement="top-center" 
                  data-aos-delay={i * 100}
                  className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                    <div className="text-5xl mb-4 text-gray-300">
                        {skill.icon}
                    </div>
                    <p className="text-2xl font-semibold">{skill.percentage}%</p>
                    <p className="text-pink-400 mt-1">{skill.name}</p>
                </div>
            </Tilt>
            );
    })}
    </div>
  </div>;
};

export default Skills;
