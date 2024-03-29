import { headerLogo, shoeshopLogo} from "../assets/images";

import { close, hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import React, {useState} from "react";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img 
                   src={shoeshopLogo}
                   alt="Logo" 
                   width={130}
                   height={29}
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {
                navLinks.map((item, index) => (
                <li key={index}>
                    <a 
                 
                      href={item.href}
                      className="font-monserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
                      >
                        {item.label}
                      </a>
                </li>
              ))}
            </ul>
            <div className="hidden max-lg:block">
              <img 
                src={toggle ? close : hamburger} 
                alt="Hamburger" 
                width={25}
                height={25}
                className="object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />

                <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className={`font-montserrat font-medium cursor-pointer text-[16px] ${
                    active === item.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(item.title);
                  }}
                >
                    <a 
                 
                 href={item.href}
                 className="font-monserrat leading-normal text-lg text-white hover:text-coral-red"
                 >
                   {item.label}
                 </a>
              
                </li>
              ))}
            </ul>
          </div>
            </div>
        </nav>
    </header>
  )
}

export default Nav