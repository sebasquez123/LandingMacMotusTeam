import React from "react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
const Curiosities = ({ imagenes, textos }) => {

    const sabiasqueimg = imagenes?.sabiasque?.[0] || {};
    const sabiasquetxt = textos?.sabiasque?.[0] || {};

    let txt = {};
    for (let i = 1; i < 4; i++) {
        const item = `titulo${i}`;
        const elemento = (sabiasquetxt?.[item]?.[0] || {});
        txt[item] = elemento;
    }

    const imagen = {
        imagen1: sabiasqueimg.imagen1 || 'img/nofound.jpg',
        imagen2: sabiasqueimg.imagen2 || 'img/nofound.jpg',
        imagen3: sabiasqueimg.imagen3 || 'img/nofound.jpg',
        imagen4: sabiasqueimg.imagen4 || 'img/nofound.jpg',
    }

    const [ref, setRef] = useState("");
    const [transition, setTransition] = useState("fd-in");
    const [imagesrc, setimagesrc] = useState('img/nofound.jpg');
    const [ready, setReady] = useState(false);



    useEffect(() => {
        if (imagenes?.sabiasque?.[0]) {
            const imagen = imagenes.sabiasque[0].imagen1;
            setimagesrc(imagen || 'img/nofound.jpg');
            setReady(true);
        }
    }, [imagenes]);


    const buscarimagen = (imagens) => {

        setTransition("fd-out");
        setTimeout(() => {

            if (ref !== imagens) {
                setRef(imagens);
                setimagesrc(imagens);
            }
            else if (ref === imagens) {

                setRef(""); setimagesrc(ready ? imagen.imagen1 : 'img/nofound.jpg');
            }
            setTransition("fd-in");

        }, 500);
    }






    return (
        <>
            <div className="container-fluid faq-section pb-5">
                <div className="container pb-5 overflow-hidden">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <h2 className="color1 fw-bold">Sabias Que?</h2>
                        <h1 className="display-5 mb-4">Hay algunas cosas que no sabias!</h1>
                        <p className="mb-0">El mundo está lleno de datos sorprendentes y hechos poco conocidos que pueden cambiar nuestra perspectiva.
                        </p>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                            <div className="accordion accordion-flush bg-light rounded p-3" id="accordionFlushSection">
                                <div id="item1" className="accordion-item rounded-top">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" onClick={() => buscarimagen(imagen.imagen2)}>
                                            <strong>{txt.titulo1.pregunta}</strong>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body">{txt.titulo1.respuesta}</div>
                                    </div>
                                </div>
                                <div id="item2" className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" onClick={() => buscarimagen(imagen.imagen3)}>
                                            <strong>{txt.titulo2.pregunta}</strong>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body">{txt.titulo2.respuesta}</div>
                                    </div>
                                </div>
                                <div id="item3" className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button id="botoncito" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" onClick={() => buscarimagen(imagen.imagen4)}>
                                            <strong>{txt.titulo3.pregunta}</strong>
                                        </button>

                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body">{txt.titulo3.respuesta}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight' }}>
                            <div className=" bg-transparent rounded">
                                <img id="imagensabiasque" src={imagesrc} className={`img-fluid w-100 rounded ${transition}`} alt="sabias que" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Curiosities;