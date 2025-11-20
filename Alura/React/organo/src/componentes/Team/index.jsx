import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    return (
        <section 
            className='time'
            style={ { backgroundColor: props.corFundos } }
        >
            
            <h3 
            style={ { borderColor: props.corDestaques } }
            >
                {props.name}
            </h3>
        
            
            
        </section>
    );
};

export default Time;
