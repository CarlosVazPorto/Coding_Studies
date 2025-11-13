import './CampoTexto.css';

const CampoTexto = (props) => {
    
    let valorDigitado = "";

    const aoDigitar = (evento) => {
        valorDigitado = evento.target.value;
        console.log(valorDigitado);
    };
    
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
                onChange={aoDigitar}
                required={props.required}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default CampoTexto;
