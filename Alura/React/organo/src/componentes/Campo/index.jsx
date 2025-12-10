import './Campo.css';

const Campo = ({ label, type = 'text', valor, aoAlterar, required = false, placeholder }) => {
    
    const aoDigitar = (evento) => {
        aoAlterar(evento.target.value);
    };
    
    return (
        <div className={`campo campo-${type}`}>
            <label>
                {label}
            </label>
            <input 
                type={type}
                value={valor}
                onChange={aoDigitar}
                required={required}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Campo;
