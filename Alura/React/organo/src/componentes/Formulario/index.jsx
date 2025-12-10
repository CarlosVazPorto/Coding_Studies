import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
    const [corTime, setCorTime] = useState(`#${genRanHex(6)}`);
    
    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoCadastrarColaborador({
            nome,
            cargo,
            imagem,
            time,
            id: uuidv4(),
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
        
    };

    return (
        <section className='formulario'>
            {/*Novo Colaborador*/}
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    label="Nome" 
                    placeholder="Digite seu nome"
                    required={true}
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <Campo
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    required={true}
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Times"
                    itens={props.times}
                    required={true}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao> 
                    Criar card de colaborador
                </Botao>
            </form>

            {/*Novo Time*/}
            <form 
                onSubmit={(evento) => {
                    evento.preventDefault();
                    props.cadastrarTime({ nome: nomeTime, cor: corTime });
                    setNomeTime('');
                    setCorTime(`#${genRanHex(6)}`);
                }}
            >
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo
                    label="Nome do time" 
                    placeholder="Digite o nome do time"
                    required
                    valor={nomeTime}
                    aoAlterar={valor => setNomeTime(valor)}
                />
                <Campo
                    type='color'
                    label="Cor"
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
