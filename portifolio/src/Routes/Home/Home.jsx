import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import "./HomeCSS/Home.css"

function Home() {
    // Estado para controlar o hover das divs
    const [isHovered, setIsHovered] = useState({
        divOne: false,
        divTwo: false,
        divThree: false,
    });

    // Estado para controlar a animação de carregamento.
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        // Define o estado de carregamento como verdadeiro ao montar o componente.
        setIsLoad(true)
        // Após um atraso de 1600ms, define o estado de carregamento como falso.
        setTimeout(() => {setIsLoad(false)}, 1600)
    }, []);

    // Função para lidar com o hover das divs.
    const handleHover = (whoIsHovered) => {
        if(whoIsHovered === "divOne"){
            setIsHovered({
                divOne: !isHovered.divOne,
                divTwo:false,
                divThree: false,
            });
        }else if(whoIsHovered === "divTwo"){
            setIsHovered({
                divOne: false,
                divTwo:!isHovered.divTwo,
                divThree: false,
            });
        }else if(whoIsHovered === "divThree"){
            setIsHovered({
                divOne: false,
                divTwo:false,
                divThree: !isHovered.divThree,
            });
        }else {
            setIsHovered({
                divOne: false,
                divTwo:false,
                divThree: false,
            });
        }
    }
    return(
        <main>
            <section className="section_home">
                <article className="article_home_title">
                    <h1 className="h1_home_title">
                        
                        {/* Links para as páginas e divs com hover */}
                        <Link to="/about"
                        className="link_home">
                            <div
                                onMouseEnter={() => handleHover("divOne")}
                                onMouseLeave={() => handleHover("")}
                                className={isLoad ? "animate_one" : "div_home_one"}
                            >
                                {!isHovered.divOne ? "Hello" : "About"}
                            </div>
                        </Link>
                        <Link to="/work" className="link_home">
                            <div
                                onMouseEnter={() => handleHover("divTwo")}
                                onMouseLeave={() => handleHover("")}
                                className={isLoad ? "animate_two" : "div_home_two"}
                            >
                                {!isHovered.divTwo ? "I am" : "Work"}
                            </div>
                        </Link>
                        <Link to="/contact"
                        className="link_home">
                            <div
                                onMouseEnter={() => handleHover("divThree")}
                                onMouseLeave={() => handleHover("")}
                                className={isLoad ? "animate_three" : "div_home_three"}
                            >
                                {!isHovered.divThree ? "Bruno" : "Contact"}
                            </div>
                        </Link>
                    </h1>
                </article>

                <article className={`article_home_photo ${isLoad ? "animate_photo" : ""}`}></article>

                <article>
                    <p className="p_home_indication">Tap Anywhere</p>
                </article>
            </section>
        </main>
    )
}

export default Home