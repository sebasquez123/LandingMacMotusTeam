import React from 'react';
import { Link } from "react-scroll";
import { useEffect, useState } from 'react';

const cursor = { cursor: 'pointer' }
const Header = ({ constants, imagenes, textos }) => {

    const headerimg = imagenes?.header?.[0] || {};
    const headertxt = textos?.header?.[0] || {};
    const contacto = textos?.contacto?.[0] || {};

    const imagen = {
        logo: headerimg.logo || 'img/nofound.jpg',
        titulo: headerimg.titulo || 'img/nofound.jpg',
        inicio: headerimg.inicio || 'img/nofound.jpg',
    }
    const txt = {
        titulo1: headertxt.titulo1 || 'Texto No encontrado',
        titulo2: headertxt.titulo2 || 'Texto No encontrado',
        titulo3: headertxt.titulo3 || 'Texto No encontrado',
        video: headertxt.video || 'Texto No encontrado',
        facebookurl: contacto.facebookurl || 'texto no encontrado',
        instagramurl: contacto.instagramurl || 'texto no encontrado',
        whatsappurl: contacto.whatsappurl || 'texto no encontrado'
    }

    const renderizarNavBar = () => {
        return constants.map((item, index) => {
            return (
                <Link key={index} to={item.path} smooth={true} duration={300} style={cursor} className="nav-item nav-link" >{item.name}</Link>
            )
        })
    }

    const [vision, setVision] = useState(true);
    const [desplazo, setDesplazo] = useState(true);

    useEffect(() => {
        const cambio = setInterval(() => {
            setVision(!vision);
            setDesplazo(!desplazo);
        }, 2000);

        return () => clearInterval(cambio);
    }, [vision, desplazo]);

    return (
        <>
            <div >
                <div id="header" className="container-fluid position-relative p-0 " >
                    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm" >
                        <Link to="header" smooth={true} duration={300} className="navbar-brand p-0 navbar-nav " style={cursor}>
                            <h1 id="tituloss" >
                                <img src={imagen.titulo} style={{ width: '60%' }} alt="fuente-soft-type-jersey" border="0" /></h1>
                        </Link>

                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                {renderizarNavBar()}
                            </div>
                            <Link to="donar" smooth={true} duration={300} style={cursor} className="btn botonletras rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Donar</Link>
                        </div>
                    </nav >



                    <div className="header-carousel-item position-relative d-flex  justify-content-center " style={{ height: '850px', overflow: 'hidden' }}>
                        <img id="initimg" src={imagen.inicio} className={`img-fluid ${vision ? 'aparecer' : 'desaparecer'} ${desplazo ? 'desplazarup' : 'desplazardown'}`} style={{ width: '110%', height: '110%', position: 'absolute' }} alt="Imagenes" />
                        <div className='background3' style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', zIndex: '-1' }}></div>

                        <div className="animated fadeInUp" style={{ marginTop: '100px' }}>
                            <div id="logocentro" className="d-flex justify-content-center mb-4" ><img src={imagen.logo} alt="logo" style={{ width: '15%', height: '15%' }} /></div>

                            <div className="text-center">
                                <h4 className="color2 text-uppercase fw-bold mb-4" >{txt.titulo1}</h4>
                                <h1 className="display-4 text-uppercase text-white mb-4">{txt.titulo2}</h1>
                                <p className="mb-5 p-5 fs-5 color4" dangerouslySetInnerHTML={{ __html: txt.titulo3 }}></p>
                                <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                                    <a href={txt.video} className="btn btn-light  rounded-pill py-3 px-4 px-md-5 me-2" target='blank'><i className="fas fa-play-circle me-2"></i> Ver video</a>
                                    <Link to="donar" smooth={true} duration={300} style={cursor} className="btn botonletras rounded-pill py-3 px-4 px-md-5 ms-2" >Escribenos</Link>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="text-white me-2">Siguenos en:</h2>
                                    <div className="d-flex justify-content-end ms-2">
                                        <a className="btn btn-md-square btn-light rounded-circle me-2" href={txt.facebookurl} target='blank'><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-md-square btn-light rounded-circle mx-2" href={txt.instagramurl} target='blank'><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-md-square btn-light rounded-circle ms-2" href={txt.whatsappurl} target='blank'><i className="fab fa-whatsapp"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div >
            </div>
        </>
    )
}

export default Header;