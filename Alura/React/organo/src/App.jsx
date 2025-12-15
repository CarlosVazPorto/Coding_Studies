import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      corFundos: '#D9F7E9',
      corDestaques: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      corFundos: '#E8F8FF',
      corDestaques: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      corFundos: '#F0F8E2',
      corDestaques: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      corFundos: '#FDE7E8',
      corDestaques: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      corFundos: '#FAE9F5',
      corDestaques: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      corFundos: '#FFF5D9',
      corDestaques: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      corFundos: '#FFEEDF',
      corDestaques: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[6].nome
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  const aoAdicionarNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }; 

  const aoDeletarColaborador = (id) => {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
  };

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.corDestaques = cor;
      }
      return time;
    }));
  };

  const cadastrarTime = (novoTime) => {
    setTimes([ ...times, { ...novoTime, id: uuidv4() } ]);
  }

  const resolverFavorito = (id) => {
    setColaboradores(colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      };
      return colaborador;
    }));
  }

  return (
    <>
      <div>
        <Banner />
        <Formulario 
          cadastrarTime={cadastrarTime}
          times={times.map(time => time.nome)}
          aoCadastrarColaborador={colaborador => aoAdicionarNovoColaborador(colaborador)}
        />

        <section className='times'>
          <h1>
            Minha organização
          </h1>

          {times.map((time, indice) => 
            <Time 
              key={indice}
              time={time}
              nome={time.nome} 
              corFundos={time.corFundos}
              corDestaques={time.corDestaques}
              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
              aoDeletar={aoDeletarColaborador}
              mudarCor={mudarCorDoTime}
              aoFavoritar={resolverFavorito}
            />
          )}
        </section>

        <Rodape />

      </div>
    </>
  );
};

export default App;
