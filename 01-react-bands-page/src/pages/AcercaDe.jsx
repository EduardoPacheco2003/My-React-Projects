import reactLogo from "../assets/react.svg";
import javascriptLogo from "../assets/javascript.svg";
import cssLogo from "../assets/css3.svg";
import htmlLogo from "../assets/html5.svg";
import reduxLogo from "../assets/redux.svg";
import apiLogo from "../assets/api.svg";

const AcercaDe = () => {
  return (
    <>
      <section className="vh-100">
        <h2>Acerca De:</h2>
        <p>
          Esta pagina esta hecha para practicar mis conceptos de React, HTML,
          CSS y Javascript.
        </p>
        <p>
          Complementando el uso de estado global con
          <b> redux/toolkit y react-redux</b> y el manejo de rutas con{" "}
          <b>React Router v6.</b>
        </p>
        <p>
          Finalmente he usado la API de <i>Genius</i> para mostrar la
          información de las bandas de esta página.
        </p>
        <h3>Tecnologías usadas:</h3>
        <section className="cards">
          <article className="card">
            <img src={reactLogo} alt="React" />
            <h5>React</h5>
            <p>
              React (también llamada React.js o ReactJS) es un framework
              Javascript de código abierto diseñada para crear interfaces de
              usuario con el objetivo de facilitar el desarrollo de aplicaciones
              en una sola página. Es mantenido por Facebook y la comunidad de
              software libre.
            </p>
            <cite>
              <a
                href="https://es.wikipedia.org/wiki/React"
                target="_blank"
                rel="noreferrer"
              >
                React-Wikipedia
              </a>
            </cite>
          </article>
          <article className="card">
            <img src={javascriptLogo} alt="JavaScript" />
            <h5>JavaScript</h5>
            <p>
              <small className="d-block">No debe confundirse con Java.</small>
              JavaScript (abreviado comúnmente JS) es un lenguaje de
              programación interpretado, dialecto del estándar ECMAScript. Se
              define como orientado a objetos, basado en prototipos, imperativo,
              débilmente tipado y dinámico.
            </p>
            <cite>
              <a
                href="https://es.wikipedia.org/wiki/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                JavaScript-Wikipedia
              </a>
            </cite>
          </article>
          <article className="card">
            <img src={cssLogo} alt="css" />
            <h5>CSS</h5>
            <p>
              CSS (siglas en inglés de Cascading Style Sheets), en español
              «Hojas de estilo en cascada», es un lenguaje de diseño gráfico
              para definir y crear la presentación de un documento estructurado
              escrito en un lenguaje de marcado. Es muy usado para establecer el
              diseño visual de los documentos web, e interfaces de usuario
              escritas en HTML o XHTML
            </p>
            <cite>
              <a
                href="https://es.wikipedia.org/wiki/CSS"
                target="_blank"
                rel="noreferrer"
              >
                CSS-Wikipedia
              </a>
            </cite>
          </article>
          <article className="card">
            <img src={htmlLogo} alt="HTML" />
            <h5>HTML</h5>
            <p>
              HTML, siglas en inglés de HyperText Markup Language (‘lenguaje de
              marcado de hipertexto’), hace referencia al lenguaje de marcado
              para la elaboración de páginas web. Es un estándar que sirve de
              referencia del software que conecta con la elaboración de páginas
              web en sus diferentes versiones, define una estructura básica y un
              código (denominado código HTML) para la definición de contenido de
              una página web, como texto, imágenes, videos, juegos, entre otros.
            </p>
            <cite>
              <a
                href="https://es.wikipedia.org/wiki/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                JavaScript-Wikipedia
              </a>
            </cite>
          </article>
          <article className="card">
            <img src={reduxLogo} alt="Redux" />
            <h5>Redux</h5>
            <p>
              Redux es una librería JavaScript de código abierto para el manejo
              del estado de las aplicaciones. Es comúnmente usada con otras
              librerías como React o Angular para la construcción de Interfaces
              de Usuario. Redux es una pequeña librería con una API simple y
              limitada, diseñada para ser un contenedor predecible del estado de
              la aplicación. Tiene un modo de operar similar al concepto reducer
              de la programación funcional.
            </p>
            <cite>
              <a
                href="https://es.wikipedia.org/wiki/Redux_(JavaScript)"
                target="_blank"
                rel="noreferrer"
              >
                Redux-Wikipedia
              </a>
            </cite>
          </article>
          <article className="card">
            <img src={apiLogo} alt="API Logo" />
            <h5>API</h5>
            <p>
              Una API (del inglés, application programming interface, en
              español, interfaz de programación de aplicaciones) es una pieza de
              código que permite a diferentes aplicaciones comunicarse entre sí
              y compartir información y funcionalidades. Una API es un
              intermediario entre dos sistemas, que permite que una aplicación
              se comunique con otra y pida datos o acciones específicas.
            </p>
            <cite>
              <a
                href="https://es.wikipedia.org/wiki/API"
                target="_blank"
                rel="noreferrer"
              >
                API-Wikipedia
              </a>
            </cite>
          </article>
        </section>
      </section>
    </>
  );
};

export default AcercaDe;
