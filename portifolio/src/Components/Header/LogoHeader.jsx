import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderCSS/LogoHeader.css";

function LogoHeader() {
  // Define um estado chamado changeColor para controlar a animação de mudança de cor do logotipo
  const [changeColor, setChangeColor] = useState(false);

  // Função chamada quando o mouse entra no logotipo para ativar a animação de mudança de cor
  const handleMouseEnterLogo = () => {
    setChangeColor(true);
  };

  // Função chamada quando o mouse sai do logotipo para desativar a animação de mudança de cor
  const handleMouseLeaveLogo = () => {
    setChangeColor(false);
  };

  return (
    <article className="logo_article_header">
      <Link to="/">
        {/* Ícone  do logotipo em formato SVG */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          onMouseOver={handleMouseEnterLogo}
          onMouseOut={handleMouseLeaveLogo}
          className="logo_header"
        >
          {/* Monitor */}
          <rect x="30" y="20" rx="10" ry="10" width="140" height="100" fill="#808080" stroke="#000000" strokeWidth="2"/>
          {/* Tela */}
          <rect x="40" y="30" width="120" height="80" fill={"#D3D3D3"} />
          {/* Suporte */}
          <rect x="85" y="120" width="30" height="10" fill="#000000"/>
          {/* Base */}
          <rect x="70" y="130" width="60" height="10" fill="#000000" stroke="#000000" strokeWidth="2"/>
          {/* Botão */}
          <circle cx="155" cy="115" r="5" fill={"#d82020"} />
        </svg>        
        <div className={
          changeColor
          ? "logo_box_one_header change_logo_enter"
          : "logo_box_one_header change_logo_out"
        }></div>
        <div className="logo_box_two_header"></div>
      </Link>
    </article>
  )
};

export default LogoHeader;
