import React, {useState} from 'react';
import  Header  from "./components/header";
import  Resume from "./components/resume";
import  Experience from "./components/experience";
import  Projects from "./components/projects";
import  Footer from "./components/footer";
import './index.css'; 

function App() {
  const [mostrarEsp, setMostrarEsp] = useState(true);

  const cambiarAespanol = () => {
    setMostrarEsp(true);
  };

  const cambiarAingles = () => {
    setMostrarEsp(false);
  };

  return (
    <>
    <Header mostrarEsp={mostrarEsp} cambiarAespanol={cambiarAespanol} cambiarAingles={cambiarAingles} />
    <Resume mostrarEsp={mostrarEsp} />
    <Experience mostrarEsp={mostrarEsp} />
    <Projects mostrarEsp={mostrarEsp} />
    <Footer mostrarEsp={mostrarEsp} />
  </>
  )
}

export default App
