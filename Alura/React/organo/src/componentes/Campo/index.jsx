import './Campo.css';

const Campo = (props) => {
    
    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value);
    };
    
    return (
        <div className="campo">
            <label>
                {props.label}
            </label>
            <input 
                value={props.valor}
                onChange={aoDigitar}
                required={props.required}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Campo;
