import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'


const Formulario = ({aoCadastrar, times}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [descricao, setDescricao] = useState('')
    const [time, setTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, cargo, imagem, descricao, time )
        aoCadastrar({
            nome,
            cargo,
            imagem,
            descricao,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setDescricao('')
        setTime('')
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <div>
                <h1>NOVO VÍDEO</h1>
                <h2>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</h2>
                <h3>Criar Card</h3>
                </div>
                <div className='divform'>
                <CampoTexto
                    obrigatorio={true}
                    label='Título'
                    placeholder='Diga o título do vídeo '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Categoria'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label='Vídeo' 
                    placeholder='Digite o link do vídeo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto 
                    obrigatorio={true}
                    label='Imagem' 
                    placeholder='O link é obrigatório '
                    aoAlterado={valor => setImagem(valor)}/>
                <CampoTexto 
                    obrigatorio={true}
                    label='Descrição' 
                    placeholder='Sobre o que é este vídeo? '
                    aoAlterado={valor => setDescricao(valor)}/>
               </div>
               <div>
                <Botao texto='GUARDAR' />
                <Botao texto='LIMPAR' />  
               </div>
            </form>
        </section>
    )
}

export default Formulario