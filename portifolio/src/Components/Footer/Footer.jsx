import LinksFooter from './LinksFooter';
import {Link} from 'react-router-dom'
import "./FooterCSS/Footer.css"

function Footer() {
    return (
        <footer>
            <section className="social_section_footer">
                <article className="title_article_footer">
                    <h2>Bruno Mendes</h2>
                    <p>
                        A Fullstack Web Developer
                        proficient in both frontend and 
                        backend
                        technologies, creating seamless
                        websites and web applications
                        that
                        contribute to the overall
                        success of the product.
                    </p>
                </article>

                <article className="social_article_footer">
                    <h2>SOCIAL</h2>
                    <LinksFooter />
                </article>
            </section>

            <hr />

            <section className="copyright_section_footer">
                <p>
                    © Copyright 2024. Made by {" "} 
                    <Link className="copyright_lonk_footer" to="/">
                        Bruno Mendes
                    </Link>
                </p>
            </section>
        </footer>
    )
}

export default Footer