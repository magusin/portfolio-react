import React from 'react';
import logo from "../../image/logo.png";
import "./nav.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

const Nav = () => {

  function refreshPage(){ 
    window.location.reload(); 
}
  return (
    <>
      <div className="block lg:hidden fixed right-2 top-2">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-white border-gray-600 h-12 bg-black"
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
        className="hidden fixed bg-black h-full items-center text-white lg:block z-20"
        id="nav-content"
      >
        <div className="">
          <img alt="logo" className="text-center logo" src={logo} />
        </div>

        <div className="flex-col lg:items-center my-8">
          <ul className="content-center list-reset lg:flex-col items-center">
            <li className="border-t-2 border-light-blue-500 border-opacity-100 text-center">
              <Link
                className="inline-block text-gray-300 no-underline hover:text-green-100 hover:text-underline py-2 px-4"
                to="/home"
              >
                Accueil
              </Link>
            </li>
            <li className="border-t-2 border-light-blue-500 border-opacity-100 text-center">
              <Link
                className="inline-block text-gray-300 no-underline hover:text-green-100 hover:text-underline py-2 px-4"
                to="/skills"
              >
                Skills
              </Link>
            </li>
            <li className="border-t-2 border-light-blue-500 border-opacity-100 text-center">
              <Link
                className="inline-block text-gray-300 no-underline hover:text-green-100 hover:text-underline py-2 px-4"
                to="/projet"
              >
                Projet
              </Link> 
            </li>
            <li className="border-t-2 border-light-blue-500 border-opacity-100 text-center">
            {/* <Link
                className="inline-block text-gray-300 no-underline hover:text-green-100 hover:text-underline py-2 px-4"
                to="/about-me"
                onClick={ refreshPage }
              >
                About Me
              </Link>  */}
  
              <a href="/about-me" className="inline-block text-gray-300 no-underline hover:text-green-100 hover:text-underline py-2 px-4" onClick={refreshPage}>About-Me</a> 
             
             
            </li>
            <li className="border-t-2 border-b-2 border-light-blue-500 border-opacity-100 text-center">
              <Link
                className="inline-block text-gray-300 no-underline hover:text-green-100 hover:text-underline py-2 px-4"
                to="/contact"
              >
                Contact
              </Link> 
            </li>
          </ul>
        </div>
        <div className="flex justify-around">
          <a href="https://www.linkedin.com/in/dev-hugo-jacques/" target="_blank" rel="noreferrer"> <LinkedInIcon /> </a>
          <a href="https://github.com/magusin" target="_blank" rel="noreferrer"> <GitHubIcon /> </a>
          <a href="mailto:hugo.jacques71@gmail.com" target="_blank" rel="noreferrer"> <MailIcon /> </a>
          <a href="tel:0764450382" target="_blank" rel="noreferrer">  <PhoneIcon /> </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
