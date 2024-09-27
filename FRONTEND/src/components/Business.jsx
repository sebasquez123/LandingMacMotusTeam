import React from "react";
import { Link } from "react-scroll";


const Bussines = ({ imagenes }) => {

    const propuesta = imagenes?.propuesta?.[0] || {};

    const imagen = {
        imagen1: propuesta.imagen1 || 'img/nofound.jpg',
        imagen2: propuesta.imagen2 || 'img/nofound.jpg'
    }

    return (
        <>
            <div id="business" className="container-fluid about py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight' }}>
                            <div className=" rounded position-relative overflow-hidden justify-content-center row">
                                <img src={imagen.imagen1} className="img-fluid  w-100" style={{ borderRadius: '0px 30px 0px 30px' }} alt="introduccion1" />
                                <img src={imagen.imagen2} className="img-fluid  w-100" style={{ borderRadius: '0px 0px 30px 30px' }} alt="introduccion2" />
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: ' 0.2s', animationName: 'fadeInLeft' }}>
                            <div>
                                <h2 className="color1 fw-bold">Cual es el plan? </h2>
                                <h1 className="display-5 mb-4">Propuestas corporativas</h1>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>Diseñamos planes y propuestas para generar un vinculo de colaboracion y beneficio para todo aquel interesado en apoyar el equipo MacMotus y reportar su marca a nivel internacional.
                                </p>
                                <div className="row g-3">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><i className="fas fa-strikethrough fa-3x color3"></i></div>
                                            <div className="ms-4">
                                                <h4>Logotipo integrado</h4>
                                                <p style={{ textAlign: 'justify' }}>Adoptamos el logo y damos mencion y reconocimiento de apoyo en todo el proceso.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><i className="fas fa-volume-up fa-3x color3"></i></div>
                                            <div className="ms-4">
                                                <h4>Atribución publica</h4>
                                                <p style={{ textAlign: 'justify' }}>Generamos material, contenido , promocion y divulgacion de la organización en terminos de sus politicas.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="d-flex">
                                            <i className="fas fa-people-carry fa-3x me-4 color3"></i>
                                            <div>
                                                <h4>Colaboracion y logistica eventual</h4>
                                                <p style={{ textAlign: 'justify' }}> Retribuimos con colaboracion de talento humano para eventos de interes y otras consideraciones.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}><p>Si deseas participar puedes escribir a nuestro whatsapp, enviar un mail, o llenar el formulario en el siguiente boton.</p></div>
                <div className="d-flex justify-content-center " ><Link className="btn botonletras rounded-pill py-2 px-4" to="donar" smooth={true} duration={300}>Participar</Link></div>

            </div>

        </>
    )
}
export default Bussines;
