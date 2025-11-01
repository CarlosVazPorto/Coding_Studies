import Capa_2 from "./assets/capa_2.png";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
import Usuario from "./assets/foto_usuario.svg";
import "./styles.css";

export default function Card() {
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={Capa_2} alt="Imagem do post" />
            </div>
            <div className="card__conteudo">
                <div className="conteudo__texto">
                    <h3>Titulo do post</h3>
                    <p>Resumo do post</p>
                </div>

                <div className="conteudo__rodape">
                    <ul>
                        <li>
                            <img src={Code} alt="Códigos" />
                            123
                        </li>
                        <li>
                            <img src={Share} alt="Compartilhamentos" />
                            321
                        </li>
                        <li>
                            <img src={Chat} alt="Comentários" />
                            234
                        </li>
                    </ul>

                    <div className="rodape_usuario">
                            <img src={Usuario} alt="Ícone do usuário" />
                            @zezinho
                    </div>
                </div>
            </div>
        </article>
    );
};
