
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <img src="/imagens/logo.png" alt="Logotipo AluraFlix" />
       </section>
       <section>
        <p>
            Cher Oliboni Luza 2024
        </p>
       </section>
       <section>
       <ul> 
            <li>
                <a href="https://github.com/CherLuza" target="_blank" rel="noopener noreferrer">
                    <img src="/imagens/github.png" alt="Logotipo Github" />
                </a> 
            </li>
        </ul>
       </section>       
    </footer>)
}

export default Rodape