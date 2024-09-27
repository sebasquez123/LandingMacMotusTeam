import React from "react";
import { Link } from "react-scroll";




const Progress = ({ imagenes, textos }) => {

    const avancesimg = imagenes?.avances?.[0] || {};
    const avancestxt = textos?.avances?.[0] || {};

    let txt = {};
    for (let i = 1; i < 4; i++) {
        const item = `titulo${i}`;
        const elemento = (avancestxt?.[item]?.[0] || {});
        txt[item] = elemento;
    }


    const imagen = {
        imagen1: avancesimg.imagen1 || 'img/nofound.jpg',
        imagen2: avancesimg.imagen2 || 'img/nofound.jpg',
        imagen3: avancesimg.imagen3 || 'img/nofound.jpg',
    }


    return (
        <>


            <div id="avances" className="container-fluid service pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <h2 className="color1 fw-bold">Como va eso!?</h2>
                        <h1 className="display-5 mb-4">Avances del proyecto aeromodelo</h1>
                        <p className="mb-0" style={{ textAlign: 'justify' }}>Nuestro principal proposito es que el proyecto salga a flote con los mejores resultados, utilizando las mejores tecnicas. Para eso contamos con laboratorios y espacios de trabajo especializados, ademas contamos con la provision de proveedores como TecnoHobbies y Maderas de Occidente. A continuacion te presentamos los avances del proyecto.
                        </p>

                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                            <div className="service-item">
                                <div className="service-img">
                                    <img src={imagen.imagen1} className="img-fluid rounded-top w-100" alt="Imagess" />
                                </div>
                                <div className="rounded-bottom p-4 limit-text">
                                    <a href="/" className="h4 d-inline-block mb-4 letras" onClick={(e) => e.preventDefault()} >{txt.titulo1.titulo}</a>
                                    <p className="mb-4" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: txt.titulo1.texto }}></p>
                                    <Link className="btn botonletras rounded-pill py-2 px-4" to="donar" smooth={true} duration={300}>Saber Mas</Link>                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                            <div className="service-item">
                                <div className="service-img">
                                    <img src={imagen.imagen2} className="img-fluid rounded-top w-100" alt="Imagse" />
                                </div>
                                <div className="rounded-bottom p-4 limit-text">
                                    <a href="/" className="h4 d-inline-block mb-4 letras" onClick={(e) => e.preventDefault()}>{txt.titulo2.titulo}</a>
                                    <p className="mb-4" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: txt.titulo2.texto }}></p>
                                    <Link className="btn botonletras rounded-pill py-2 px-4" to="donar" smooth={true} duration={300}>Saber Mas</Link>                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                            <div className="service-item">
                                <div className="service-img">
                                    <img src={imagen.imagen3} className="img-fluid rounded-top w-100" alt="Images" />
                                </div>
                                <div className="rounded-bottom p-4 limit-text">
                                    <a href="##" className="h4 d-inline-block mb-4 letras" onClick={(e) => e.preventDefault()}>{txt.titulo3.titulo}</a>
                                    <p className="mb-4" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: txt.titulo3.texto }}></p>
                                    <Link className="btn botonletras rounded-pill py-2 px-4" to="donar" smooth={true} duration={300} >Saber Mas</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )

}
export default Progress;
