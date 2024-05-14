import "./FooterCSS/Footer.css"

function LinksFooter() {
  return (
    <div>
        <a 
            target="_blank" 
            rel="noreferrer"
            href="https://www.linkedin.com/in/bpmendes/"
        ></a>
        <img 
            className="links_footer" 
            src="public\linkedin.png" 
            alt="Bruno Mendes - Profile linkedin" />
        <a 
            target="_blank" 
            rel="noreferrer" 
            href="https://github.com/bmendestec/"
        ></a>
        <img 
            className="links_footer" 
            src="public\github.png" 
            alt="Bruno Mendes - Profile github" />        
    </div>
  )
};

export default LinksFooter;
