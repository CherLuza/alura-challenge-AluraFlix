import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Inicio from './paginas/Inicio'
import NovoVideo from './paginas/NovoVideo'
import Rodape from "./componentes/Rodape";

function App() {

  return (
    <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/NovoVideo' element={<NovoVideo />} />
          <Route path='*' element={<div>Página não encontrada</div>} />
        </Routes>
        <Rodape />

    </BrowserRouter>  
  );
}

export default App;
