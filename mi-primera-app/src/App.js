import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento.js'
import EventoB from './components/EventoB.js'

function App() {
  return (
    <div className="App">
      <Evento />
      <EventoB title="Py Pizza 03 - PyPuzzle"
        image="eve1"
        dateLiteral="09 de Diciembre de 2023 - 13:30 GMT-4"
        placeLiteral="Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia"
        description="
        ¡Hola Pythonista!
        Participa en este Evento Presencial de la comunidad Python La Paz
        ¿Cuánto conoces de Python?
        Aprende a trabajar en equipo resolviendo increíbles acertijo
        ¡Anímate a ser parte de esta actividad!
        "
        icono="face"
      />
      <EventoB title="MeetUp 11 - 3 Pitfalls de la Ingeniería de datos (donde no meter la pata)"
        image="eve2"
        dateLiteral="25 de Noviembre de 2023"
        placeLiteral="Online"
        description="
        ¡Hola Pythonista!
        Acompáñanos al MeetUp mensual de la comunidad Python La Paz

        En este MeetUp tendremos la participación de Valery Calderon Briz, Ingeniera en Telecomunicaciones actualmente trabajando como Ingeniera de datos Senior en One.Five
        Anteriormente Co-organizadora de Pyladies MX y Líder de la comunidad Python Guatemala
        ha impartido conferencias y talleres en diversas PyCon en múltiples países.
        "
        icono="face"
      />
      <EventoB title="MeetUp 05 - ¿Cuando escucho música de Bad Bunny?"
        image="eve3"
        dateLiteral="26 de Noviembre del 2022"
        placeLiteral="Online"
        description="
        En este MeetUp tendremos la participación de Juan De Dios
         Santos con una charla super interesante sobre Bad Bunny y Machine Learning
        Bad Bunny es un cantante que se está apoderando del mundo y de la música que
        escucho. Desde 2017, he estado registrando en una base de datos todas las 
        canciones que he reproducido en Spotify. De todas estas canciones, 4000 pertenecen
        a Bad Bunny. Con toda esta evidencia, me pregunté ¿Cuándo escucho su música? En esta 
        charla explicaré cómo contesté esta pregunta utilizando Python, visualización de datos,
        machine learning, y series temporales.
        "
        icono="face"
      />
    </div>
  );
}

export default App;