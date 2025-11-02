import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './componentes/Sidebar';
import BarraDePesquisa from './componentes/BarraDePesquisa';
import Filtro from './componentes/Filtro';
import Ordenacao from './componentes/Ordenacao';
import Card from './componentes/Card';

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes")
      .then(resposta => resposta.json())
      .then(dados => setDados(dados));
  }, []);

  console.log(dados);

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <Card />
      </div>
    </div>
  );
};

export default App
