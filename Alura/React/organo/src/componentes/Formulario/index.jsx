import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');
    
    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoCadastrarColaborador({
            nome,
            cargo,
            imagem,
            time
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
        
    };

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    label="Nome" 
                    placeholder="Digite seu nome"
                    required={true}
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    required={true}
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    required={false}
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Time"
                    itens={props.times}
                    required={true}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao> 
                    Criar card de colaborador
                </Botao>
            </form>

            <form 
                onSubmit={(evento) => {
                    evento.preventDefault();
                    props.cadastrarTime({ nome: nomeTime, cor: corTime });
                }}
            >
                <h2>Preencha os dados para criar um novo time</h2>
                <CampoTexto
                    label="Nome do time" 
                    placeholder="Digite o nome do time"
                    required
                    valor={nomeTime}
                    aoAlterar={valor => setNomeTime(valor)}
                />
                <CampoTexto 
                    label="Cor"
                    placeholder="Escolha a cor do time"
                    required
                    valor={corTime}
                    aoAlterar={valor => setCorTime(valor)}
                />
                <Botao> 
                    Criar um novo time
                </Botao>
            </form>
        
        </section>
    );
};

export default Formulario;
