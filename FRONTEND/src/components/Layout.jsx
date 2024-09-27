import React from "react";
import { Link } from "react-scroll";
import Intro from './Intro';
import Explore from './Explore';
import Progress from './Progress';
import Business from './Business';
import Contact from './Contact';
import Header from "./header";
import Partners from "./Partners";
import Curiosities from "./Curiosities";
import Competition from "./Competition";
import Footer from "./Footer";
import Rights from "./Rights";
import Chatbot from './chatbot';
const Layout = ({ constants, bodyimg, bodytext }) => {

    const cuerpotext = bodytext?.datos?.[0] || {};
    const cuerpoimg = bodyimg?.datos || {};




    return (
        <>
            <header ><Header constants={constants} imagenes={cuerpoimg} textos={cuerpotext} /></header>

            <br />
            <main style={{ height: "100%", justifyContent: "center", alignContent: "center", position: 'relative' }}>
                <Intro imagenes={cuerpoimg} />
                <br />
                <Explore imagenes={cuerpoimg} textos={cuerpotext} />
                <br />
                <Partners imagenes={cuerpoimg} textos={cuerpotext} />
                <br />
                <Competition imagenes={cuerpoimg} textos={cuerpotext} />
                <br />
                <Progress imagenes={cuerpoimg} textos={cuerpotext} />
                <br />
                <Curiosities imagenes={cuerpoimg} textos={cuerpotext} />
                <br />
                <Business imagenes={cuerpoimg} />
                <br />
                <Contact textos={cuerpotext} />
            </main>
            <footer>
                <Footer textos={cuerpotext} />
                <Rights />
            </footer>
            <Link to="header" className="btn botonletras btn-lg-square rounded-circle back-to-top" smooth={true} duration={300}><i className="fa fa-arrow-up"></i></Link>
            <Chatbot />



        </>
    )
}

export default Layout;