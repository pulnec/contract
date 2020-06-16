import React, { useEffect, useContext } from 'react';
import './App.css';
import WOW from 'wowjs';
import { GenContext } from './GenContext';
import { useHistory } from "react-router-dom";

function App() {

  let history = useHistory();
  const { courses, setSelected } = useContext(GenContext);
 
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  },[])

  const toContract = (uuid) => {
    setSelected(uuid);
    history.push('/contract')
  }

  return (
    <div className="App">
        
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">


        <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"/></a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#header">Inicio <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#services">Servicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#pricing">Precios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#contact">Contacto</a>
                </li>
            </ul>
            <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a href="#grupomj">
                        <i className="fas fa-circle fa-stack-2x facebook"></i>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a href="#grupomj">
                        <i className="fas fa-circle fa-stack-2x twitter"></i>
                        <i className="fab fa-instagram fa-stack-1x"></i>
                    </a>
                </span>
            </span>
        </div>
    </nav>

    <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h1><span className="turquoise">MJ Consulting Group</span> Consultoria</h1>
                            <p className="p-large">Como obtener tu licencia clase B (auto particular) y C en chile (moto)</p>
                            <a className="btn-solid-lg page-scroll" href="#services">Saber mas</a>
                        </div>
                    </div>
                    <div className="col-lg-6 wow bounce">
                        <div className="image-container">
                            <img className="img-fluid" src="images/header-teamwork.svg" alt="alternative"/>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 
    </header> 
   

  
    <div id="services" className="cards-1">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Servicio de asesoramiento y capacitación</h2>
                    <p className="p-heading p-large">
                        Contamos con un servicio de asesoramiento y capacitación para la obtención de la licencia de conducir en Chile, si eres imigrante y cuentas con los minimos requisitos podemos ayudarte.
                    </p>
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-12">

                    <div className="card wow fadeInLeft" data-wow-delay="2s">
                        <img className="card-image" src="images/services-icon-1.svg" alt="alternative"/>
                        <div className="card-body">
                            <h4 className="card-title">Clases Online</h4>
                            <p>Como parte de la capacitación que te brindaremos incluye clases teóricas por profesor con credencial semep el cual te orientara y explicara cada una de las preguntas que te pueden aparecer en la prueba teórica de la municipalidad.</p>
                        </div>
                    </div>
   
                    <div className="card wow fadeInLeft" data-wow-delay="1.5s">
                        <img className="card-image" src="images/services-icon-2.svg" alt="alternative"/>
                        <div className="card-body">
                            <h4 className="card-title">Sala Psicotécnica</h4>
                            <p>contamos con equipo de última tecnología para practicas psicotécnicas de uso ilimitado.</p>
                        </div>
                    </div>
                    <div className="card wow fadeInLeft" data-wow-delay="1s">
                        <img className="card-image" src="images/services-icon-3.svg" alt="alternative"/>
                        <div className="card-body">
                            <h4 className="card-title">Evaluaciones</h4>
                            <p>Tenemos las herramientas y plataformas necesarias para las evaluaciones de ensayo y así estar 100% preparado al momento de rendir los exámenes en la municipalidad.</p>
                        </div>
                    </div>
                    <div className="card wow fadeInLeft" data-wow-delay="0.5s">
                        <img className="card-image" src="images/moto.svg" alt="alternative"/>
                        <div className="card-body">
                            <h4 className="card-title">Presentación en la municipalidad</h4>
                            <p>Te apoyaremos en todo el proceso de la obtención de tu licencia de conducir y te facilitaremos nuestros implementos en el momento de tu presentación practica en la municipalidad.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div> 
 
    <div className="basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2>Requisitos para la obtención de una licencia de conducir</h2>
                        <p>Si eres inmigrante debes cumplir con estos requisitos para poder realizar la evaluación para obtención de la licencia de conducir</p>
                        <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">Requisitos</a>
                    </div> 
                </div> 
                <div className="col-lg-6 wow bounceInRight" data-wow-delay="0.5s">
                    <div className="image-container">
                        <img className="img-fluid" src="images/details-1-office-worker.svg" alt="alternative" />
                    </div> 
                </div> 
            </div> 
        </div>
    </div> 


	<div id="details-lightbox-1" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="container">
            <div className="row">
                <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
                <div className="col-lg-12">
                    <h3>Requisitos para inscribirse:</h3>
                    <hr/>
                    <h5>Licencia de conducir</h5>
                    <p>Debes cumplir con los siguientes requisitos para poder inscribirte, estos son importante y necesarios para poder presentar la evaluación</p>
                    <ul className="list-unstyled li-space-lg">
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Carnet fisico vigente o vencida 2019-2020</div>
                        </li>
                        <li className="media">
                            <div className="media-body"><b>Vencidos 2019-2020 deben tener:</b></div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Comprobante de visa en tramite</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Comprobante de prorroga</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Comprobante de extencion visa en tramite</div>
                        </li>
                        <li className="media">
                            <div className="media-body"><b>Documentos de estudio (solo 1 de los mencionados a continuacion):</b></div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Titulo original de estudio con o sin apostilla puede ser bachiller, tsu o universitario</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Fondo negro original</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Escaner digitalizado full color del titulo (Importante con apostilla)</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Notas certificadas originales</div>
                        </li>
                        <li className="media">
                            <div className="media-body"><b>Requisitos para presentar en la municipalidad</b></div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Certificado oftalmologico en caso de tener problemas de vista</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Certificado medico en caso de tener problemas de hipertension, presion arterial o auditivos.</div>
                        </li>
                    </ul>
                    <a className="btn-outline-reg mfp-close as-button" href="#screenshots">Cerrar</a>
                </div> 
            </div> 
        </div>
    </div> 



	<div id="details-lightbox-2" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="container">
            <div className="row">
                <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
                <div className="col-lg-8">
                    <div className="image-container">
                        <img className="img-fluid" src="images/details-lightbox-2.svg" alt="alternative" />
                    </div> 
                </div>
                <div className="col-lg-4">
                    <h3>Search To Optimize</h3>
                    <hr/>
                    <h5>Core feature</h5>
                    <p>The emailing module basically will speed up your email marketing operations while offering more subscriber control.</p>
                    <p>Do you need to build lists for your email campaigns? It just got easier with Evolo.</p>
                    <ul className="list-unstyled li-space-lg">
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">List building framework</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Easy database browsing</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">User administration</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Automate user signup</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Quick formatting tools</div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i><div className="media-body">Fast email checking</div>
                        </li>
                    </ul>
                    <a className="btn-solid-reg mfp-close page-scroll" href="#request">REQUEST</a> <a className="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
                </div>
            </div> 
        </div> 
    </div>
  



    <div id="pricing" className="cards-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Nuestras opciones de precio</h2>
                    <p className="p-heading p-large">
                        Tenemos 2 modalidades de precios la individual que es para una sola persona y la grupal que permita la inscripción de 3 personas a un menor costo individual.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
    
                { courses.length > 0 &&
                    courses.map((e,i) => (
                    <div key={i} className="card wow flipInY" data-wow-delay="0.8s">
                        <div className="card-body">
                            <div className="card-title" style={{ fontSize: 16 }}>{e.name}</div>
                            <div className="card-subtitle">{e.descripction}</div>
                            <hr className="cell-divide-hr"/>
                            <div className="price">
                            <span className="currency">$</span><span className="value">{e.price}</span>
                            </div>
                            <hr className="cell-divide-hr" />
                            <div className="button-wrapper">
                                <button onClick={ () => toContract(i) } className="btn-solid-reg">Inscribirme</button>
                            </div>
                        </div>
                    </div>
                    ))
                 }
                
                </div> 
            </div>
        </div> 
    </div> 
   
    <div className="slider-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 wow bounceInLeft" data-wow-delay="0.5s">
                    <div className="image-container">
                        <img className="img-fluid" src="images/testimonials-2-men-talking.svg" alt="alternative" />
                    </div> 
                </div> 
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2>Requisitos para la obtención de una licencia de conducir</h2>
                        <p>Si eres inmigrante debes cumplir con estos requisitos para poder realizar la evaluación para obtención de la licencia de conducir</p>
                        <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">Requisitos</a>
                    </div> 
                </div> 
            </div> 
        </div>
    </div> 
  

    <div id="contact" className="form-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Información de contacto</h2>
                    <ul className="list-unstyled li-space-lg">
                        <li className="address">Puedes comunicarte con nosotros a traves de estos medios</li>
                        <li><i className="fas fa-map-marker-alt"></i>Providencia 0000 </li>
                        <li><i className="fas fa-phone"></i><a className="turquoise" href="tel:003024630820">+200000000000</a></li>
                        <li><i className="fas fa-envelope"></i><a className="turquoise" href="mailto:office@evolo.com">info@grupomj.cl</a></li>
                    </ul>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-6">
                    <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d575.811562755819!2d-70.66812290499358!3d-33.44849876841961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5af1cac1e55%3A0xbdbfebb7e963506f!2sColegio%20Nacional%20de%20Pod%C3%B3logos%20de%20Chile%20Ag!5e0!3m2!1ses!2scl!4v1590095226277!5m2!1ses!2scl" allowFullScreen></iframe>
                    </div>
                </div> 
                <div className="col-lg-6">
                    
                  
                    <form id="contactForm" data-toggle="validator" data-focus="false">
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="cname" required />
                            <label className="label-control" htmlFor="cname">Nombre</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="cemail" required />
                            <label className="label-control" htmlFor="cemail">Correo</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" id="cmessage" required></textarea>
                            <label className="label-control" htmlFor="cmessage">Mensaje</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">Enviar mensaje</button>
                        </div>
                        <div className="form-message">
                            <div id="cmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </form>
               

                </div> 
            </div> 
        </div> 
    </div> 
   


   
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer-col">
                        <h4>Sobre Grupo MJ</h4>
                        <p>Somos una auto escuela, que te preparara para la obtención de tu licencia de conducir en chile</p>
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="footer-col last">
                        <h4>Redes sociales</h4>
                        <span className="fa-stack">
                            <a href="#grupomj">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#grupomj">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> 
                </div> 
            </div> 
        </div>
    </div>   

    <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-small">Copyright © 2020 <a href="https://grupomj.cl">Grupo MJ</a> - Todos los derechos reservados</p>
                </div> 
            </div>
        </div> 
    </div> 
    </div>
  );
}

export default App;
