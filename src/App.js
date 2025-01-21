
import './App.css';
import Navbar from './components/header';
import AlinhadoComFoto from './components/principal_buttons';
import QuadradoComConteudo from './components/square_with_content';
import RedesSociais from './components/lista_redes_sociais';
import TextBlock from './components/descricao';
import Service from './page/servicePage';
import { Route, Routes } from 'react-router-dom';
import Home from './page/home';

const App= ()=> {
  return (
    <div className="App" style={{ background: "#F5F3F6" }}>
      <Navbar />
      {/* Configuração das rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service/>} />
      </Routes>
    </div>
  );
}

export default App;
