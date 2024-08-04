// src/pages/About.jsx
import React from 'react';
import { Banner } from '../components/Banner';

export const About = () => {
  return (
    <>
      <Banner />
      <h1>About Page</h1>
      <p>
        Bienvenido a nuestra página de pronóstico del tiempo. Este proyecto está desarrollado en React y tiene como objetivo proporcionar datos meteorológicos precisos y actualizados basados en las condiciones climáticas actuales.
        Además, integramos noticias relevantes vinculadas al clima actual para que puedas mantenerte informado sobre los eventos en todo el mundo vinculados al clima local.
      </p>
      
      <h2>APIs Utilizadas</h2>
      <p>
        Hemos utilizado la API de noticias (News API) y la API de clima (Weather API) para obtener los datos necesarios.
      </p>
      
      <h3>News API</h3>
      <p>
        News API se utiliza para obtener noticias dinámicamente basadas en las condiciones climáticas actuales. Integramos la temperatura, el viento y la lluvia para filtrar los artículos de noticias relevantes. Puedes encontrar más información sobre la News API en su <a href="https://newsapi.org/">sitio oficial</a>.
      </p>
      
      <h3>Weather API</h3>
      <p>
        La Weather API se utiliza para obtener datos meteorológicos actuales, incluyendo temperatura, viento y condiciones de lluvia. Estos datos se utilizan para personalizar la experiencia del usuario mostrando noticias relevantes. Más información sobre la Weather API está disponible en su <a href="https://www.weatherapi.com/">sitio oficial</a>.
      </p>
      
      <h2>Componentes Utilizados</h2>
      <p>
        El proyecto está compuesto por varios componentes React. Aquí hay una breve descripción de algunos de ellos:
      </p>
      
      <ul>
        <li>
          <strong>Banner</strong>: Un componente reutilizable que muestra un banner en la parte superior de la página.
        </li>
        <li>
          <strong>Home</strong>: La página principal que muestra las noticias y el pronóstico del tiempo.
        </li>
        <li>
          <strong>Info</strong>: Esta página de información.
        </li>
        <li>
          <strong>Card</strong>: Un componente genérico que se utiliza para mostrar noticias individuales.
        </li>
      </ul>
      
      <h2>Tecnologías Utilizadas</h2>
      <p>
        Este proyecto utiliza una variedad de tecnologías modernas de desarrollo web, incluyendo:
      </p>
      
      <ul>
        <li>
          <strong>React</strong>: Una biblioteca de JavaScript para construir interfaces de usuario.
        </li>
        <li>
          <strong>Tailwind CSS</strong>: Un framework CSS para estilizar los componentes.
        </li>
        <li>
          <strong>React Router</strong>: Para manejar la navegación entre diferentes páginas.
        </li>
      </ul>
      
      <h2>Configuración del Proyecto</h2>
      <p>
        Puedes encontrar la configuración del proyecto en el archivo <code>package.json</code>, que incluye todas las dependencias y scripts necesarios para ejecutar y construir el proyecto.
      </p>
      
      <h2>Enlaces Relevantes</h2>
      <p>
        Aquí tienes algunos enlaces relevantes para profundizar en las tecnologías y APIs utilizadas en este proyecto:
      </p>
      
      <ul>
        <li><a href="https://reactjs.org/">React</a></li>
        <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
        <li><a href="https://reactrouter.com/">React Router</a></li>
        <li><a href="https://newsapi.org/">News API</a></li>
        <li><a href="https://www.weatherapi.com/">Weather API</a></li>
      </ul>
      
      <h2>Cómo Ejecutar el Proyecto</h2>
      <p>
        Para ejecutar este proyecto localmente, sigue estos pasos:
      </p>
      
      <ol>
        <li>Clona el repositorio desde GitHub.</li>
        <li>Ejecuta <code>npm install</code> para instalar todas las dependencias.</li>
        <li>Ejecuta <code>npm start</code> para iniciar la aplicación en modo de desarrollo.</li>
      </ol>
      
      <p>
        Si tienes alguna pregunta o problema, no dudes en abrir un issue en el repositorio de GitHub.
      </p>
      
      <h2>Contribuciones</h2>
      <p>
        Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue las pautas de contribución disponibles en el repositorio.
      </p>
    </>
  );
};
