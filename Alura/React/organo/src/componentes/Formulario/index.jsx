import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    
    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("O formulário foi enviado => ", nome, cargo, imagem, time);
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
                    required={true}
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Time"
                    itens={times}
                    required={true}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao> 
                    Criar card
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;
