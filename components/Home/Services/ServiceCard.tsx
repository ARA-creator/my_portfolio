import React from "react";
import Image from "next/image";
type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ icon, name, description }: Props) => {
  return (
    <div className="flex flex-col items-center bg-[#14134145] rounded-3xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:scale-105">
      <Image src={icon} alt="img" width={60} height={60} className="mb-4" />
      <h1 className="mt-6 text-xl md:text-2xl font-bold text-white text-center">
        {name}
      </h1>
      <p className="text-center text-gray-300 mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
