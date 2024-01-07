'use client'

import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from 'next/link'

const Navbar = () => {
  let Links = [
    { name: "Accueil", link: "/" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Frais", link: "/tickets" },
    { name: "Utilisateurs", link: "/users" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 font-sora">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center  
      text-gray-800"
        >
          tailwindcss
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {!open ? <MenuIcon className="h-7" /> : <XIcon className="h-7" />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button>Get Started</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;