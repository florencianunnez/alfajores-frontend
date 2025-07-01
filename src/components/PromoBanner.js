import React from 'react';
import '../assets/styles.css';

const PromoBanner = () => {
    return (
        <div className="promo-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/banner2.jpg" alt="Delicious Alfajores" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>¡Descubre nuestros Alfajores!</h2>
                        <p>Deliciosos, suaves y llenos de sabor. Perfectos para cualquier ocasión.</p>
                        <button className="btn btn-primary">Ver Catálogo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;