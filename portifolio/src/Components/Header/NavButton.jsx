import "./HeaderCSS/NavButton.css";

function NavButton(onData, NavPosition) {
  // Função para manipular o clique no botão de navegação.
  const handleClickNav = () => {
    // Se NavPosition for nulo ou indefinido, chama onData(true) para abrir o menu, caso contrário, chama onData(false) para fechar o menu.
    if(!NavPosition || NavPosition === null) {
      onData(true);
    } else {
      onData(false);
    }

  }

  return (
    <>
    {/* Componente de botão de navegação */}
    <article onClick={handleClickNav}
      className="menu_article_nav">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <>
        {/* Ícone de Menu Aberto (X) */}
        <line x1="10" y1="10" x2="30" y2="30" stroke="#000" strokeWidth="3" />
        <line x1="30" y1="10" x2="10" y2="30" stroke="#000" strokeWidth="3" />
      </>
    </svg>
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <>
        {/* Ícone de Menu Fechado (Hamburger) */}
        <rect x="10" y="12" width="20" height="2" fill="#000" />
        <rect x="10" y="18" width="20" height="2" fill="#000" />
        <rect x="10" y="24" width="20" height="2" fill="#000" />
      </>
    </svg>
    </article>
    </>
  )
};

export default NavButton;
