import React, { Component } from "react";
import logo from "../logo.png";
import "./nav.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

const Nav = () => {
  return (
    <>
      <div class="block lg:hidden fixed right-2 top-2">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-white border-gray-600 h-12 bg-black"
        >
			
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <nav
        className="hidden fixed bg-black h-full items-center text-white lg:block"
        id="nav-content"
      >
        <div className="">
          <img alt="logo" className="text-center logo" src={logo} />
        </div>

         <div className="flex-col lg:items-center my-8"> 
          <ul className="content-center list-reset lg:flex-col items-center">
            <li className="border-t-2 border-light-blue-500 border-opacity-100 text-center">
              <a
                className="inline-block text-gray-300 no-underline hover:text-green-100 hover:text-underline py-2 px-4"
                href="#"
              >
                Accueil
              </a>
            </li>
            <li className="border-t-2 border-light-blue-500 border-opacity-100 text-center">
              <a
                className="inline-block text-gray-300 no-underline hover:text-green-100 hover:text-underline py-2 px-4"
                href="#"
              >
                Skills
              </a>
            </li>
            <li className="border-t-2 border-light-blue-500 border-opacity-100 text-center">
              <a
                className="inline-block text-gray-300 no-underline hover:text-green-100 hover:text-underline py-2 px-4"
                href="#"
              >
                Projet
              </a>
            </li>
            <li className="border-t-2 border-b-2 border-light-blue-500 border-opacity-100 text-center">
              <a
                className="inline-block text-gray-300 no-underline hover:text-green-100 hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
          </ul>
        </div>
			<div className="flex justify-around">
			<LinkedInIcon src="" />
          <GitHubIcon />
          <MailIcon />
          <PhoneIcon />
			</div>
   
      </nav>
    </>
  );
};

export default Nav;
