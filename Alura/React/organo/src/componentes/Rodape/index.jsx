import './Rodape.css';

const Rodape = () => {
    return (
        
        <footer className='footer'>
            
            <section>
                <ul>
                    <li>
                        <a 
                            href="facebook.com"
                            target="_blank"
                        >
                            <img src="src/assets/imagens/facebook-logo.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="twitter.com" 
                            target="_blank"
                        >
                            <img src="src/assets/imagens/twitter-logo.png" alt="X" />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="instagram.com" 
                            target="_blank"
                        >
                            <img src="src/assets/imagens/instagram-logo.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            
            <section>
                <img src="src/assets/imagens/organo-logo.png" alt="Organo" />
            </section>

            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>

        </footer>
    );
}

export default Rodape;
