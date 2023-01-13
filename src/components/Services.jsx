import React from "react";
import { services, serviceFinishes } from "../Data";
const Services = () => {
  return (
    <div className="section" id="services">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold ">What I do</h2>
        <div className="w-14 h-[3px] bg-blue rounded-sm"></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex gap-4 p-4 hover:bg-slate-300 rounded-lg"
            >
              <div className="text-blue text-[2rem]">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="opacity-80 mt-4 text-[0.9rem]">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 mt-12 gap-4">
        {serviceFinishes.map((serviceFinish) => {
          return (
            <div
              className="text-center border border-solid border-grey p-8 rounded-md"
              key={serviceFinish.id}
            >
              <div className="flex justify-center text-blue mb-4 text-[1.5rem]">
                {serviceFinish.icon}
              </div>
              <div className="mb-4 text-[0.9rem] font-bold">
                {serviceFinish.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
