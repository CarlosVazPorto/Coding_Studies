import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    return (
        
        (props.colaboradores.length > 0) && 
        
        <section 
            className='time'
            style={ { 
                backgroundColor: props.corFundos, 
                backgroundImage: 'url(src/assets/imagens/fundo.png)'
            } }
        >
            
            <h3 
            style={ { borderColor: props.corDestaques } }
            >
                {props.nome}
            </h3>

            <div className='colaboradores'>
                {props.colaboradores.map( 
                    (colaborador, indice) => {
                        return (
                            <Colaborador 
                                corDestaques={props.corDestaques}
                                key={indice}
                                nome={colaborador.nome}
                                cargo={colaborador.cargo}
                                imagem={colaborador.imagem}
                                aoDeletar={colaborador.aoDeletar}
                            />
                        );
                    }
                )};
            </div>
            
        </section>
    );
};

export default Time;
