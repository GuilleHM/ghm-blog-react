import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <p><span className='title'>Arte y Ciencia entre Datos</span><br /><span className='subtitle'>Blog creado por GuilleHM en San Fernando (Cádiz), España - 2020</span>
            </p>
            <p className='license'>Creación bajo licencia <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es"
                target="_blank" rel="noopener noreferrer">Creative
                Commons Attribution 4.0 International</a>
            </p>
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es"
                target="_blank" rel="noopener noreferrer"><img src={require("../../assets/icons/by-nc.svg")}
                    alt="by-nc_license" /></a>
        </footer>
    );
}

export default Footer;
