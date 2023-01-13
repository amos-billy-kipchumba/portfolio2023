import React from "react";
import { TbBrandFacebook, TbBrandTwitter, TbBrandInstagram, TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";
const Footer = () => {
  var currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto p-4 flex flex-wrap gap-2 items-center justify-between">
      <div className="flex flex-wrap md:flex font-bold">
        <a href="" className="mr-2 text-blue text-[1.5rem] hover:text-red-400">
          <TbBrandTwitter />
        </a>
        <a href="" className="mr-2 text-blue text-[1.5rem] hover:text-red-400">
          <TbBrandFacebook />
        </a>
        <a href="" className="mr-2 text-blue  text-[1.5rem] hover:text-red-400">
          <TbBrandInstagram />
        </a>

        <a href="" className="mr-2 text-blue  text-[1.5rem] hover:text-red-400">
          <TbBrandLinkedin />
        </a>

        
        <a href="https://github.com/amos-billy-kipchumba" target='_blank' className="mr-2 text-blue  text-[1.5rem] hover:text-red-400">
          <TbBrandGithub />
        </a>
      </div>
      <div className="text-[1rem] text-blue">
        &#169; { currentYear } All rights deserved.
      </div>
    </div>
  );
};

export default Footer;
