import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './Colaborador.css';

const Colaborador = ({ corDestaques, aoDeletar, aoFavoritar, ...props }) => {
    const favoritar = () => {
        aoFavoritar(props.colaborador.id);
    }
    
    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                className='deletar'
                size={25}
                onClick={() => aoDeletar(props.id)}
            />
            <div 
                className='cabecalho'
                style={ { backgroundColor: corDestaques } }
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
                <div className='favoritar'>
                    {props.favorito 
                        ? 
                        <AiFillHeart
                            size={30} 
                            onClick={favoritar}
                        /> 
                        : 
                        <AiOutlineHeart 
                            size={30}
                            onClick={favoritar}
                        />}
                </div>
            </div>
        </div>
    );
};

export default Colaborador;
