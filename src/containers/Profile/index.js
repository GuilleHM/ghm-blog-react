import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';

const Profile = (prop) => {
    return (
        <React.Fragment>
            <div className="profileMainPic"><span>Perfil</span></div>
            <Card>
                <main className="about">
                    <h1 className="lg-heading">Sobre mí</h1>
                    <p className="sm-heading">¡Bienvenido a mi blog! Deja que te cuente algunas cosas...</p>
                    <div className="about-info">
                        <img src={require("../../assets/secondaryPagesImages/yo9.png")} alt="Guillermo Huerta"
                            className="bio-image" />
                        <div className="bio">
                            <h2>Biografía</h2>
                            <p>Me llamo Guillermo Huerta y soy un ingeniero electrónico con más de 16 años de experiencia laboral. Después de trabajar para varias empresas multinacionales, implementando proyectos relacionados con la automatización industrial en más de 20 paises,  decidí reorientar mi carrera profesional hacia los fascinantes mundos de la ciencia de los datos y el desarrollo web.</p>
                            <p>Me gusta trabajar en un entorno colaborativo y multicultural, aumentando la compresión colectiva sobre los fenómenos bajo estudio y con el objetivo de generar un impacto positivo real.</p>
                            <p>He creado este sitio web como escaparate de algunos pequeños proyectos que he creado y que están relacionados con diversos ámbitos de la programación. ¡Espero que te gusten!</p>
                        </div>
                        <div className="exp-edu-int">
                            <div className="personalInfo">
                                <img src={require("../../assets/secondaryPagesImages/intereses.jpg")} alt="Guillermo Huerta" />
                                <h2>Intereses Profesionales</h2>
                                <hr></hr>
                                <h3>Inteligencia Artificial</h3>
                                <h3>Visualización de Datos</h3>
                                <h3>Desarrollo Web</h3>
                                <h3>Fabricación Aditiva (Impresión 3D)</h3>
                                <h3>Internet de las Cosas</h3>
                                <h3>Neurociencia</h3>
                            </div>
                            <div className="personalInfo">
                                <img src={require("../../assets/secondaryPagesImages/experiencia.jpg")} alt="Guillermo Huerta" />
                                <h2>Experiencia</h2>
                                <hr></hr>
                                <h3>Ingeniero de Campo</h3>
                                <h4>EOS GmbH (Oct'15 - Oct'18)</h4>
                                <h3>Ingeniero de Campo</h3>
                                <h4>GE (Mar'08 - Ago'14)</h4>
                                <h3>Ingeniero de Producto</h3>
                                <h4>GE (Abr'02 - Feb'08)</h4>
                                <h3>Beca de Ingeniería Automática</h3>
                                <h4>Abengoa (Sep'01 - Mar'02)</h4>
                            </div>
                            <div className="personalInfo">
                                <img src={require("../../assets/secondaryPagesImages/formacion.jpg")} alt="Guillermo Huerta" />
                                <h2>Formación</h2>
                                <hr></hr>
                                <h3>Máster en Análisis de Datos Masivos</h3>
                                <h4>UNIR (Nov'16 - Nov'19)</h4>
                                <h3>Ingeniería Técnica Industrial Electrónica</h3>
                                <h4>UCA (Sep'97 - Jun'01)</h4>
                                <h3>Experto en Aplicaciones DMLS</h3>
                                <h4>EOS GmbH (Ene'17 - Mar'17)</h4>
                                <h3>Experto en Sistemas de Transferencia</h3>
                                <h4>GE (Sep'12 - Ene'13)</h4>
                            </div>
                        </div>
                        <div className="preFooter">
                            <h2>Más sobre mi formación y carrera profesional en mi perfil de <a
                                href="https://www.linkedin.com/in/guillermo-h-a6639aa8/"
                                target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </h2>
                        </div>
                    </div>
                </main>
            </Card>
        </React.Fragment>
    );
}

export default Profile;
