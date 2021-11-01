import React from 'react';
import "./projet.css";

const Projet = () => {
  return (
    <>
      <div className="projet min-h-screen pt-4">
        <div className="projet-box place-content-center gap-4">
          <a
            href="https://nos-amis-les-animaux.fr/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="box box-1 flex justify-center items-center">
              <div class="titre text-3xl font-black">NALA</div>
            </div>
          </a>
          <a
            href="https://hugo-jacques.com/enigma/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="box box-2 flex justify-center items-center">
              <div class="titre text-3xl font-black">ENIGMA</div>
            </div>
          </a>
          <a href="https://hugo-jacques.com/" target="_blank" rel="noreferrer">
            <div className="box box-3 flex justify-center items-center">
              <div class="titre text-3xl font-black">CV</div>
            </div>
          </a>
          <div className="box box-1"></div>
          <div className="box box-1"></div>
          <div className="box box-1"></div>
        </div>
      </div>
    </>
  );
};

export default Projet;
