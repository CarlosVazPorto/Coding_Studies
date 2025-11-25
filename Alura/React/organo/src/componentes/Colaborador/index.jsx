import { AiFillCloseCircle } from "react-icons/ai";
import './Colaborador.css';

const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                className='deletar'
                size={25}
                onClick={props.aoDeletar}
            />
            <div 
                className='cabecalho'
                style={ { backgroundColor: props.corDestaques } }
            >
                <img 
                    src={props.imagem} 
                    alt={props.nome} 
                />
            </div>
            <div className='rodape'>
                <h4>
                    {props.nome}
                </h4>
                <h5>
                    {props.cargo}
                </h5>
            </div>
        </div>
    );
};

export default Colaborador;
