import React from "react";




const Intro = ({ imagenes }) => {


    const introduccion = imagenes?.introduccion?.[0] || {};

    const imagen = {
        imagen1: introduccion.imagen1 || 'img/nofound.jpg',
        imagen2: introduccion.imagen2 || 'img/nofound.jpg'
    }


    return (
        <>
            <div id="intro" className="container-fluid about py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: ' 0.2s', animationName: 'fadeInLeft' }}>
                            <div>
                                <h2 className="color1 fw-bold">Que es todo esto!?</h2>
                                <h1 className="display-5 mb-4">La oportunidad de ver todo desde arriba!</h1>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>Somos un equipo de aeromodelismo que va más allá de construir aviones: diseñamos sueños, perfeccionamos habilidades y enfrentamos desafíos que nos elevan, literalmente, a nuevas alturas. Este libro es más que una simple presentación: es un portal hacia nuestra misión, nuestras metas y nuestras aspiraciones como equipo y como pais. Aquí descubrirás cómo la ciencia, el arte y la tecnología se combinan para crear algo increible. Únete a nuestro viaje y vuela con nosotros mientras revolucionamos el cielo una vez más.
                                </p>
                                <div className="row g-3">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><i className="fas fa-lightbulb fa-3x color3"></i></div>
                                            <div className="ms-4">
                                                <h4>Ciencia y Tecnología</h4>
                                                <p>Con ciencia y tecnología construimos herramientas para cultivar el exito!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><i className="fas fa-flag fa-3x color3"></i></div>
                                            <div className="ms-4">
                                                <h4>Prestigio nacional</h4>
                                                <p>Mas alla de ganar, es generar reconocimiento! </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="d-flex">
                                            <i className="fas fa-graduation-cap fa-3x me-4 color3"></i>
                                            <div>
                                                <h4>Cultura, trabajo y educación</h4>
                                                <p>La colaboracion y el compromiso con la comunidad y el sector empresarial es caracteristico de nuestro enfoque profesional. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight' }}>
                            <div className=" rounded position-relative overflow-hidden justify-content-center row">
                                <img src={imagen.imagen1} className="img-fluid  w-100" style={{ borderRadius: '30px' }} alt="introduccion1" />
                                <img src={imagen.imagen2} className="img-fluid  w-75" alt="introduccion2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Intro;