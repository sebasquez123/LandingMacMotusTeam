import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <>

            <div class="container-fluid bg-light py-5">
                <div class="container py-5 text-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                            <i class="far fa-frown-open display-1 color2 mb-4" style={{ width: '80px', height: '80px' }}></i>
                            <h1 class="display-1">404</h1>
                            <h1 class="mb-4">Page Not Found</h1>
                            <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <Link class="btn botonletras rounded-pill py-3 px-5" to="/">Go Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Error;