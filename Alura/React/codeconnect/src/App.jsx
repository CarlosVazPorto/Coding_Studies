import './App.css';
import BarraDePesquisa from './componentes/BarraDePesquisa';
import Sidebar from './componentes/SIdebar';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <BarraDePesquisa />
    </div>
  );
};

export default App
