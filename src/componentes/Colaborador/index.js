import './colaborador.css'
import Botao from '../Botao'


const Colaborador = ({ colaborador }) => {
    return (<div className="colaborador">
        <div className="cabecalho">
            <img src={colaborador.imagem} alt={colaborador.titulo} />
        </div>
        <div className="rodape">
            <img className='imagemrodape' src="/imagens/lixeira.png" alt="Logotipo Lixeira" />
            <Botao texto='DELETAR' />
            <img className='imagemrodape' src="/imagens/editar.png" alt="Logotipo Editar" />
            <Botao texto='EDITAR' />
        </div>
    </div>)
}

export default Colaborador