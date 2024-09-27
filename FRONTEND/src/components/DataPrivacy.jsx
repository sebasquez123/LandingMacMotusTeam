import React from "react";
import { Link } from 'react-router-dom';

const cursor = { cursor: 'pointer' }

const DataPrivacy = ({ constants, bodyimg }) => {

    const headerimg = bodyimg?.datos?.header?.[0] || {};

    const imagen = {
        titulo: headerimg.titulo || 'img/nofound.jpg',
    }


    return (
        <>
            <div >
                <div className=" position-relative p-0 ">
                    <nav className=" background3" style={{ position: 'relative', width: '100%', height: '70px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 50px 0px 50px' }} >
                        <Link to="/" className="navbar-brand p-0 navbar-nav " style={cursor}>
                            <h1 id="tituloss" >
                                <img src={imagen.titulo} style={{ width: '60%' }} alt="fuente-soft-type-jersey" border="0" /></h1>
                        </Link>

                        <div >
                            <div className=" ms-auto py-0 mt-2  ">
                                <Link to="/" style={cursor} className="nav-link letricas">Volver al Inicio</Link>
                            </div>
                        </div>
                    </nav >
                    <main style={{ margin: '100px 100px 30px 100px' }}>
                        <div className="d-flex justify-content-center flex-column">
                            <h1>Politicas de privacidad</h1>
                            <h3 className="color1">Privacidad de datos personales</h3>
                            <strong style={{ textAlign: 'justify' }}>La Constitución Política de Colombia estableció en el artículo 15 el derecho de protección de datos personales como el derecho de toda persona para conocer, actualizar, rectificar y/o cancelar la información y datos personales que de ella se hayan recolectado y/o se traten en bases de datos públicas o privadas.
                                Mediante la Ley 1581 del 17 de octubre de 2012, el Congreso de la República reglamentó el ya mencionado derecho al establecer las Disposiciones Generales para la Protección de Datos Personales en Colombia, igualmente reglamentada por los Decretos 1377 de 2013 y 886 de 2014 (hoy incorporados en el Decreto único 1074 de 2015), entre otros.
                                MACMOTUS se compromete a proteger y respetar su privacidad. Puede visitar MACMOTUS en la web sin decirnos quién es ni revelarnos información personal. Su información consignada se almacena en un servidor seguro hasta la finalizacion de la campaña y nunca se venderá a terceras partes ni se utilizará para enviar materia publicitaria o anuncios, sin su consentimiento.
                                Si decide facilitarnos información personal a través del aplicativo que pueda usarse para ponernos en contacto con usted, es nuestra intención hacerle saber cómo vamos a utilizar esta información. Si nos comunica que no desea que dicha información se utilice para contactos posteriores, respetaremos sus deseos.</strong>
                        </div>

                    </main>
                </div>
            </div>
        </>
    )
}

export default DataPrivacy;