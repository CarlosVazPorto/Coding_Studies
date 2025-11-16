import './Colaborador.css';

const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img 
                    src='https://github.com/carlosvazporto.png' 
                    alt='Foto do Carlos' 
                />
            </div>
            <div className='rodape'>
                <h4>
                    Carlos Vaz Porto
                </h4>
                <h5>
                    Desenvolvedor
                </h5>
            </div>
        </div>
    );
};

export default Colaborador;
