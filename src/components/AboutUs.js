import React from 'react';
import '../assets/styles.css'; // Asegúrate de crear un archivo CSS para estilos específicos si es necesario

const AboutUs = () => {
    return (
        <div className="about-us container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src="/images/break-banner1.jpg" alt="About Us" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>Nosotros</h2>
                    <h5>Capricho - Alfajores Artesanales</h5>
                    <p>
                        En Capricho, nos dedicamos a la creación de alfajores artesanales de la más alta calidad. 
                        Nuestros alfajores son elaborados con ingredientes seleccionados y recetas tradicionales que 
                        garantizan un sabor único y delicioso. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;