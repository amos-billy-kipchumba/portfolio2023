import React, { useEffect, useState } from "react";
import { navLinks } from "../Data";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import NavLinks from "./NavLinks";
import './Navbar.css'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isTop, setIsTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY > 20);
    });
  }, []);

  const [menu, setMenu] = useState(false);

  const handleShowMenu = () => {
    setMenu(!menu);
  }
  return (
    <div
      className={`${
        isTop ? "shadow-lg bg-ghostWhite transMe" : ""
      } fixed w-full top-0 left-0 z-20 transMe`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 bg-blue flex items-center justify-center text-white font-bold">
            aB
          </div>
          <p className="text-xl">
            Amos <span className="opacity-80">Billy</span>
          </p>
        </div>
        <div className="md:flex hidden items-center gap-6">
          {navLinks.map((navLink) => {
            return (
              <div key={navLink.id}>
                <a href={`#${navLink.href}`} className="text-[0.95rem]">
                  {navLink.text}
                </a>
              </div>
            );
          })}
        </div>

        {menu === false ?
        <HiMenuAlt3
          className="cursor-pointer text-3xl md:hidden"
          onClick={() => {
            setToggle(!toggle);
            handleShowMenu();
          }}
        />
        :
        <HiX
            className="cursor-pointer text-3xl md:hidden"
            onClick={() => {
              setToggle(!toggle);
              handleShowMenu();
            }}
          />
        }
      </div>
     

      {menu !== false ?
      <div className="flex flex-col w-[100%] justify-center text-center bg-ghostWhite gap-8 py-5 transMe">
        {navLinks.map((navLink) => {
          return (
            <div key={navLink.id} className="">
              <a href={`#${navLink.href}`} className="text-[0.95rem]" onClick={handleShowMenu}>
                {navLink.text}
              </a>
            </div>
          );
        })}
      </div>
      :
      null
     }

      {toggle && <NavLinks setToggle={setToggle} />}
    </div>
  );
};

export default Navbar;
