import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores }) => {
    return (

        colaboradores.length > 0 && <section className='time'>
            <h3>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} />)}
            </div>
        </section>

    )
}

export default Time