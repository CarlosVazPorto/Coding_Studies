import './App.css';
import BarraDePesquisa from './componentes/BarraDePesquisa';
import Sidebar from './componentes/Sidebar';
import Filtro from './componentes/Filtro';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <BarraDePesquisa />
      <Filtro />
    </div>
  );
};

export default App
