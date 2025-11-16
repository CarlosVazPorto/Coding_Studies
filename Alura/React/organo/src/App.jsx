import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Team';

function App() {

  const times = [
    {
      nome: 'Programação',
      corFundos: 'var(--programacao-fundos)',
      corDestaques: 'var(--programacao-destaques)'
    },
    {
      nome: 'Front-End',
      corFundos: 'var(--frontend-fundos)',
      corDestaques: 'var(--frontend-destaques)'
    },
    {
      nome: 'Data Science',
      corFundos: 'var(--datascience-fundos)',
      corDestaques: 'var(--datascience-destaques)'
    },
    {
      nome: 'Devops',
      corFundos: 'var(--devops-fundos)',
      corDestaques: 'var(--devops-destaques)'
    },
    {
      nome: 'UX e Design',
      corFundos: 'var(--ux-fundos)',
      corDestaques: 'var(--ux-destaques)'
    },
    {
      nome: 'Mobile',
      corFundos: 'var(--mobile-fundos)',
      corDestaques: 'var(--mobile-destaques)'
    },
    {
      nome: 'Inovação e Gestão',
      corFundos: 'var(--inovacao-fundos)',
      corDestaques: 'var(--inovacao-destaques)'
    },
  ]

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

        {times.map(time => <Time name={time.nome} />)}

      </div>
    </>
  );
};

export default App;
