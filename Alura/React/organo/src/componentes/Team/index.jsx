import './Time.css';

const Time = (props) => {

    const css = {
            backgroundColor: props.corFundos
        };

    return (
        <section 
            className='time'
            style={css}
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
