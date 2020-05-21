import React from 'react'
import './style.css';
import Card from '../../components/UI/Card';

const ContactUS = (props) => {
  return (
    <React.Fragment>
      <div className="contactMainPic"><span>Contacto</span></div>
      <Card>
        <main className="contact">
          <div className="contactFormContainer">
            <p id="subscribirse" className="sm-heading">Puedes usar el siguiente formulario para subscribirte</p>
            <form className="contactForm" action="mailto:guillehm1@gmail.com" method="GET" encType="text/plain">
              <h1>Para: GuilleHM</h1>
              <div id="from">
                <label htmlFor="name">Remite:</label>
                <input type="text" id="name" name="subject" placeholder="Escribe tu nombre"></input>
              </div>
              <div id="reply">
                <label htmlFor="mail">Correo:</label>
                <input type="email" id="mail" name="user_email" placeholder="Introduce tu correo"></input>
              </div>
              <div id="message">
                <label htmlFor="msg">Tu mensaje (opcional):</label>
                <textarea id="msg" name="body" rows="7" defaultValue="¡Hola!&#10;Quiero subscribirme a tu blog."></textarea>
              </div>
              <div className="button">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
          <div className="contactMedia">
            <p className="sm-heading">O contactar conmigo mediante</p>
            <div className="boxes">
              <div>
                <a href="https://www.linkedin.com/in/guillermo-h-a6639aa8/"
                  target="_blank" rel="noopener noreferrer" title="GuilleHM en LinkedIn"><i className="fab fa-linkedin fa-2x"></i></a>
              </div>
              <div>
                <a href="mailto:guillehm1@gmail.com"
                  target="_blank" rel="noopener noreferrer" title="E-mail de GuilleHM"><i className="fas fa-at fa-2x"></i></a>
              </div>
              <div>
                <a href="https://github.com/GuilleHM"
                  target="_blank" rel="noopener noreferrer" title="GuilleHM en GitHub"><i className="fab fa-github fa-2x" ></i></a>
              </div>
            </div>
          </div>

        </main>
      </Card>
    </React.Fragment>
  );
}

export default ContactUS