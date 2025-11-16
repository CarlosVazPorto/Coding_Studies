import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Team';

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
        <Time
          nome="Programação" 
        />
        <Time
          nome="Front-End" 
        />
        <Time
          nome="Data Science" 
        />
        <Time
          nome="Devops" 
        />
      </div>
    </>
  );
};

export default App;
