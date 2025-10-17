import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Services</span> <br />
        Data-Driven Solutions <br />
        for Business Growth
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div 
          data-aos="fade-right" 
          data-aos-anchor-placement="top-center" 
          data-aos-delay="100"
        >
          <ServiceCard 
          icon="/images/s1.png" 
          name="Business Analysis" 
          description="Analyzing business processes and requirements to optimize operations and drive growth." 
        />
        </div>
        <div 
          data-aos="fade-right" 
          data-aos-anchor-placement="top-center" 
          data-aos-delay="200"
        >
          <ServiceCard 
          icon="/images/s2.png" 
          name="Data Analysis & Visualization" 
          description="Transforming raw data into actionable insights using Power BI, Tableau, and Python." 
        />
        </div>
        <div 
          data-aos="fade-right" 
          data-aos-anchor-placement="top-center" 
          data-aos-delay="300"
        >
          <ServiceCard 
          icon="/images/s3.png" 
          name="Machine Learning Solutions" 
          description="Building predictive models and ML solutions to solve complex business problems." 
        />
        </div>
        <div 
          data-aos="fade-right" 
          data-aos-anchor-placement="top-center" 
          data-aos-delay="400"
        >
          <ServiceCard 
          icon="/images/s4.png" 
          name="Web Development" 
          description="Creating responsive web applications with modern frameworks like React and Next.js." 
        />
        </div>
        
      </div>
    </div>
  );
};

export default Services;
