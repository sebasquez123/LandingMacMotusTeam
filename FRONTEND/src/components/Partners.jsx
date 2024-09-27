import React from "react";
;


const Partners = ({ imagenes, textos }) => {

    const integrantes = imagenes?.integrantes?.[0] || {};
    const integrantestxt = textos?.integrantes?.[0] || {};

    let txt = {};

    for (let i = 1; i < 12; i++) {
        const integrantenumero = `integrante${i}`;
        const inter = (integrantestxt?.[integrantenumero]?.[0] || {});
        txt[integrantenumero] = inter;
    }


    const imagen = {

        integrante1: integrantes.integrante1 || 'img/nofound.jpg',
        integrante2: integrantes.integrante2 || 'img/nofound.jpg',
        integrante3: integrantes.integrante3 || 'img/nofound.jpg',
        integrante4: integrantes.integrante4 || 'img/nofound.jpg',
        integrante5: integrantes.integrante5 || 'img/nofound.jpg',
        integrante6: integrantes.integrante6 || 'img/nofound.jpg',
        integrante7: integrantes.integrante7 || 'img/nofound.jpg',
        integrante8: integrantes.integrante8 || 'img/nofound.jpg',
        integrante9: integrantes.integrante9 || 'img/nofound.jpg',
        integrante10: integrantes.integrante10 || 'img/nofound.jpg',
        integrante11: integrantes.integrante11 || 'img/nofound.jpg',
    }
    return (
        <>



            <div className="container-fluid team pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <h2 className="color1 fw-bold">Colaboradores</h2>
                        <h1 className="display-5 mb-4">Conoce nuestros profesionales</h1>
                        <p className="mb-0" style={{ textAlign: 'justify' }}>En <strong>MacMotus</strong>, somos más que un equipo; somos una familia unida por la pasión por la ingeniería y la aviación. Cada uno de nuestros miembros aporta una combinación única de talento, creatividad y dedicación. Desde diseñadores aeronáuticos hasta expertos en control y simulación,mentes brillantes y manos trabajadoras que hacen posible este proyecto.
                        </p>
                    </div>




                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

                        <div className="carousel-indicators" style={{ position: 'relative', top: '500px' }}>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">


                            <div className="carousel-item active" data-bs-interval="10000">



                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp blog-item" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <img src={imagen.integrante1} className="img-fluid" alt="" />
                                            </div>
                                            <div className="team-title">
                                                <h4 className="mb-0">
                                                    {txt.integrante1.nombre}
                                                </h4>
                                                <p className="mb-0">
                                                    {txt.integrante1.perfil}
                                                </p>
                                            </div>
                                            <hr />
                                            <div className="team-icon" style={{ textAlign: 'center' }}>
                                                {txt.integrante1.cargo}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp blog-item" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <img src={imagen.integrante2} className="img-fluid" alt="" />
                                            </div>
                                            <div className="team-title">
                                                <h4 className="mb-0">{txt.integrante2.nombre}</h4>
                                                <p className="mb-0">{txt.integrante2.perfil}</p>
                                            </div>
                                            <hr />
                                            <div className="team-icon" style={{ textAlign: 'center' }}>
                                                {txt.integrante2.cargo}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp blog-item" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <img src={imagen.integrante3} className="img-fluid" alt="" />
                                            </div>
                                            <div className="team-title">
                                                <h4 className="mb-0">{txt.integrante3.nombre}</h4>
                                                <p className="mb-0">{txt.integrante3.perfil}</p>
                                            </div>
                                            <hr />
                                            <div className="team-icon" style={{ textAlign: 'center' }}>
                                                {txt.integrante3.cargo}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp blog-item" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <img src={imagen.integrante4} className="img-fluid" alt="" />
                                            </div>
                                            <div className="team-title">
                                                <h4 className="mb-0">{txt.integrante4.nombre}</h4>
                                                <p className="mb-0">{txt.integrante4.perfil}</p>
                                            </div>
                                            <hr />
                                            <div className="team-icon" style={{ textAlign: 'center' }}>
                                                {txt.integrante4.cargo}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp blog-item" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <img src={imagen.integrante5} className="img-fluid" alt="" />
                                            </div>
                                            <div className="team-title">
                                                <h4 className="mb-0">{txt.integrante5.nombre}</h4>
                                                <p className="mb-0">{txt.integrante5.perfil}</p>
                                            </div>
                                            <hr />
                                            <div className="team-icon" style={{ textAlign: 'center' }}>
                                                {txt.integrante5.cargo}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp blog-item" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <img src={imagen.integrante6} className="img-fluid" alt="" />
                                            </div>
                                            <div className="team-title">
                                                <h4 className="mb-0">{txt.integrante6.nombre}</h4>
                                                <p className="mb-0">{txt.integrante6.perfil}</p>
                                            </div>
                                            <hr />
                                            <div className="team-icon" style={{ textAlign: 'center' }}>
                                                {txt.integrante5.cargo}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp blog-item" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <img src={imagen.integrante7} className="img-fluid" alt="" />
                                            </div>
                                            <div className="team-title">
                                                <h4 className="mb-0">{txt.integrante7.nombre}</h4>
                                                <p className="mb-0">{txt.integrante7.perfil}</p>
                                            </div>
                                            <hr />
                                            <div className="team-icon" style={{ textAlign: 'center' }}>
                                                {txt.integrante7.cargo}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp blog-item" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <img src={imagen.integrante8} className="img-fluid" alt="" />
                                            </div>
                                            <div className="team-title">
                                                <h4 className="mb-0">{txt.integrante8.nombre}</h4>
                                                <p className="mb-0">{txt.integrante8.perfil}</p>
                                            </div>
                                            <hr />
                                            <div className="team-icon" style={{ textAlign: 'center' }}>
                                                {txt.integrante8.cargo}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" >
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp blog-item" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <img src={imagen.integrante9} className="img-fluid" alt="" />
                                            </div>
                                            <div className="team-title">
                                                <h4 className="mb-0">{txt.integrante9.nombre}</h4>
                                                <p className="mb-0">{txt.integrante9.perfil}</p>
                                            </div>
                                            <hr />
                                            <div className="team-icon" style={{ textAlign: 'center' }}>
                                                {txt.integrante9.cargo}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp blog-item" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <img src={imagen.integrante10} className="img-fluid" alt="" />
                                            </div>
                                            <div className="team-title">
                                                <h4 className="mb-0">{txt.integrante10.nombre}</h4>
                                                <p className="mb-0">{txt.integrante10.perfil}</p>
                                            </div>
                                            <hr />
                                            <div className="team-icon" style={{ textAlign: 'center' }}>
                                                {txt.integrante10.cargo}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp blog-item" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <img src={imagen.integrante11} className="img-fluid" alt="" />
                                            </div>
                                            <div className="team-title">
                                                <h4 className="mb-0">{txt.integrante11.nombre}</h4>
                                                <p className="mb-0">{txt.integrante11.perfil}</p>
                                            </div>
                                            <hr />
                                            <div className="team-icon" style={{ textAlign: 'center' }}>
                                                {txt.integrante11.cargo}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{ width: '3%', position: 'relative', bottom: '0', top: '-280px', left: '0%' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z" /></svg>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style={{ width: '3%', position: 'relative', bottom: '0', top: '-325px', left: '97%' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" /></svg>
                </button>
            </div>

        </>
    )
}

export default Partners;