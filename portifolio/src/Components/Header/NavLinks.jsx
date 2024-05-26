import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./HeaderCSS/NavLinks.css";

function NavLinks({onData, NavPosition}) {
  // Função para manipular o clique em um link, que chama a função onData com false
  const handleLinkClickNav = () => {
    onData(false);
  };
  return (
    <article
      // Define a classe CSS com base no valor de NavPosition para mostrar ou ocultar o menu de navegação.
      className={NavPosition ? "nav_links_article_on" :
         "nav_links_article_off"}
      >
        {/* Links para as diferentes páginas */}
        <Link onClick={handleLinkClickNav} 
        // Define a classe CSS com base em NavPosition para destacar ou desativar o link
        className={
          NavPosition || NavPosition === "null"
          ? "links links_on"
          : "links links_off"
        }
        to="/"
        >
          <p>Home</p>
        </Link>
        <Link onClick={handleLinkClickNav}
        className={
          NavPosition || NavPosition === "null"
          ? "links links_on"
          : "links links_off"
        }
        to="/about"
        >
          <p>About</p>
        </Link>
        <Link onClick={handleLinkClickNav}
        className={
          NavPosition || NavPosition === "null"
          ? "links links_on"
          : "links links_off"
        }
        to="/work"
        >
          <p>Work</p>
        </Link>
        <Link onClick={handleLinkClickNav}
        className={
          NavPosition || NavPosition === "null"
          ? "links links_on"
          : "links links_off"
        }
        to="/contact"
        >
          <p>Contact</p>
        </Link>
    </article>
  )
};

export default NavLinks;
