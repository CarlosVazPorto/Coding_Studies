import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {

    return (
        
        (props.colaboradores.length > 0) && 
        
        <section 
            className='time'
            style={ { 
                backgroundColor: hexToRgba(props.corDestaques, 0.4), 
                backgroundImage: 'url(src/assets/imagens/fundo.png)'
            } }
        >
            
            <input 
                type='color' 
                className='input-cor' 
                value={props.corDestaques}
                onChange={(evento) => {
                    props.mudarCor(evento.target.value, props.time.id)
                }}
            />

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
                                aoDeletar={props.aoDeletar}
                            />
                        )
                    }
                )}
            </div>
            
        </section>
    );
};

export default Time;
