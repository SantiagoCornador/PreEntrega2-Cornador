import { useState } from 'react'

import NavBar from './Componentes/Navbar/Navbar';
import Titulo from './Componentes/Titulo/Titulo'
import Footer from './Componentes/Footer/Footer';

 //import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] =  useState(0)

  const titulo = 'Tienda SC'
  const subtitulo = 'Los mejos buzos'

  const addCount = () => {
    setCount(count + 1) 
}
  return (
    <div>
      
      <NavBar />

      <Titulo titulo= {titulo} subtitulo= {subtitulo} />

      <label>
                <strong>{ count }</strong>
            </label>
            <button onClick={addCount}> + 1 </button>

      <Footer />

    </div>
  )

}

export default App