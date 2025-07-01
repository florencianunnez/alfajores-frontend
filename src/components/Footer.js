import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';

const Footer = () => {
    return (
        <footer className="footer-custom d-flex flex-column flex-md-row justify-content-between align-items-center p-3">
            <div className="footer-logo mb-3 mb-md-0">
                <img src="/images/logo-capricho.png" alt="Logo" className="footer-logo-img" />
            </div>
            <div className="footer-email text-center mb-3 mb-md-0 flex-grow-1">
                <p className="m-0 fw-bold fs-5">contacto@capricho.com</p>
            </div>
            <div className="footer-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52510.51347064198!2d-58.73265687985171!3d-34.657049217275265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf7809861d5d%3A0x6bc97859fd9d3d86!2sItuzaing%C3%B3%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1751342154734!5m2!1ses!2sar"
                    width="320"
                    height="220"
                    style={{ border: 0, borderRadius: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Capricho"
                ></iframe>
            </div>
        </footer>
    );
};

export default Footer;