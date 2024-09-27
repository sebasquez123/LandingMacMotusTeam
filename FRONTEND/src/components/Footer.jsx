import React from "react";
import { Link } from "react-scroll";

const Footer = ({ textos }) => {


    const contactotxt = textos?.contacto?.[0] || {};


    const txt = {

        facebookurl: contactotxt.facebookurl || 'texto no encontrado',
        instagramurl: contactotxt.instagramurl || 'texto no encontrado',
        whatsappurl: contactotxt.whatsappurl || 'texto no encontrado'
    }

    return (
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeIn' }}>
            <div className="container py-5 border-start-0 border-end-0" style={{ border: '1px solid', borderColor: 'rgb(255, 255, 255, 0.08)' }}>
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-4"></div>

                    <div className="col-md-6 col-lg-6 col-xl-2">
                        <div className="footer-item">
                            <h4 className="text-white mb-4">Links rapidos</h4>
                            <Link to="intro" smooth={true} duration={300} style={{ cursor: 'pointer' }}><i className="fas fa-angle-right me-2" ></i> Inicio</Link>
                            <Link to="explore" smooth={true} duration={300} style={{ cursor: 'pointer' }}><i className="fas fa-angle-right me-2"></i> Sobre nosotros</Link>
                            <Link to="avances" smooth={true} duration={300} style={{ cursor: 'pointer' }}><i className="fas fa-angle-right me-2"></i> Avances</Link>
                            <Link to="competition" smooth={true} duration={300} style={{ cursor: 'pointer' }}><i className="fas fa-angle-right me-2"></i> Competencia</Link>
                            <Link to="business" smooth={true} duration={300} style={{ cursor: 'pointer' }}><i className="fas fa-angle-right me-2"></i> Propuestas</Link>

                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item">
                            <h4 className="text-white mb-4">Contact Info</h4>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-map-marker-alt color4 me-3"></i>
                                <p className="text-white mb-0">Cra. 27 #10-02 Universidad Tecnologica de Pereira</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-envelope color4 me-3"></i>
                                <p className="text-white mb-0">macmotusteam@gmail.com</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa fa-phone-alt color4 me-3"></i>
                                <p className="text-white mb-0">(+57) 3044626822</p>
                            </div>
                            <br />
                            <div className="d-flex ">
                                <a className="btn btn-md-square btn-light rounded-circle me-2" href={txt.facebookurl} target='blank'><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-md-square btn-light rounded-circle mx-2" href={txt.instagramurl} target='blank'><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-md-square btn-light rounded-circle ms-2" href={txt.whatsappurl} target='blank'><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Footer;