import React from "react";



const Competition = ({ imagenes, textos }) => {


    const competenciaimg = imagenes?.competencia?.[0] || {};
    const competenciatxt = textos?.competencia?.[0] || {};

    let txt = {};

    for (let i = 1; i < 5; i++) {
        const item = `titulo${i}`;
        const elemento = (competenciatxt?.[item]?.[0] || {});
        txt[item] = elemento;

    }

    const imagen = {
        imagen1: competenciaimg.imagen1 || 'img/nofound.jpg',
    }
    return (
        <>
            <div id="competition" className="container-fluid feature pb-5">
                <div style={{ width: '100%', height: '830px', position: 'absolute', zIndex: '-1000', overflow: 'hidden', left: '0' }}> <img src={imagen.imagen1} style={{ height: '100%', width: '100%', objectFit: 'cover', opacity: '20%' }} alt="sf" /></div>

                <div className="container pb-4">
                    <div className="text-center mx-auto pb-5 pt-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '80%', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <h2 className="color1 fw-bold "> En que consiste!?</h2>
                        <h1 className="display-5 mb-4 color3">La modalidad de la competencia</h1>
                        <p className="mb-0 color3 " style={{ textAlign: 'justify' }}>El reglamento SAE contiene las normas y lineamientos que deben seguir los equipos para participar en tan prestigiosa competencia. El evento se llevara a cabo en Mexico para el mes de abril del año 2025, en una de las pistas de Queretaro, donde participaran equipos y espectadores de todo el mundo.
                        </p>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                            <div className="feature-item p-4 " style={{ flexDirection: 'column', display: 'flex', justifyContent: 'normal', minHeight: '410px' }}>
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-pencil-alt fa-4x color3"></i>
                                </div>
                                <h4>{txt.titulo1.titulo}</h4>

                                <p className="mb-4" style={{ textAlign: 'justify', fontSize: '12px' }} dangerouslySetInnerHTML={{ __html: txt.titulo1.texto }}></p>
                                <div style={{ height: '100%' }}></div>
                            </div>
                            <div style={{ position: 'relative', left: '30px', bottom: '15px' }}>
                                <i className="fas fa-quote-right fa-2x color1"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                            <div className="feature-item p-4  " style={{ flexDirection: 'column', display: 'flex', justifyContent: 'normal', minHeight: '410px' }}>
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-paper-plane fa-4x color3"></i>
                                </div>
                                <h4>{txt.titulo2.titulo}</h4>

                                <p className="mb-4" style={{ textAlign: 'justify', fontSize: '12px' }} dangerouslySetInnerHTML={{ __html: txt.titulo2.texto }}></p>
                                <div style={{ height: '100%' }}></div>
                            </div>
                            <div style={{ position: 'relative', left: '30px', bottom: '15px' }}>
                                <i className="fas fa-quote-right fa-2x color1"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                            <div className="feature-item p-4  " style={{ flexDirection: 'column', display: 'flex', justifyContent: 'normal', minHeight: '410px' }}>
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-ruler fa-4x color3"></i>
                                </div>
                                <h4>{txt.titulo3.titulo}</h4>

                                <p className="mb-4" style={{ textAlign: 'justify', fontSize: '12px' }} dangerouslySetInnerHTML={{ __html: txt.titulo3.texto }}></p>
                                <div style={{ height: '100%' }}></div>
                            </div>
                            <div style={{ position: 'relative', left: '30px', bottom: '15px' }}>
                                <i className="fas fa-quote-right fa-2x color1"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                            <div className="feature-item p-4" style={{ flexDirection: 'column', display: 'flex', justifyContent: 'normal', minHeight: '410px' }}>
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-file-word fa-4x color3"></i>
                                </div>
                                <h4>{txt.titulo4.titulo}</h4>

                                <p className="mb-4" style={{ textAlign: 'justify', fontSize: '12px' }} dangerouslySetInnerHTML={{ __html: txt.titulo4.texto }}></p>
                                <div style={{ height: '100%' }}></div>
                            </div>
                            <div style={{ position: 'relative', left: '30px', bottom: '15px' }}>
                                <i className="fas fa-quote-right fa-2x color1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center " ><a className="btn botonletras rounded-pill py-2 px-4" href="https://www.instagram.com/aerodesign.mx?igsh=MXBjYWRwdjkwa2dmcg==" target="blank">Saber mas</a></div>
            </div >
        </>
    )
}
export default Competition;