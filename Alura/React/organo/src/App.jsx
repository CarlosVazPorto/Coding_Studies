import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoAdicionarNovoColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }; 

  return (
    <>
      <div>
        <Banner />
        <Formulario 
          aoCadastrarColaborador={colaborador => aoAdicionarNovoColaborador(colaborador)}
        />
      </div>
    </>
  );
};

export default App;
