import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                <img src="/imagens/logo.png" alt="Logotipo AluraFlix" />
                <Link className='link' to='/'>
                    HOME
                </Link>
                <Link className='link' to='/NovoVideo'>
                    NOVO VÍDEO
                </Link>
            </nav>
        </header>
    )
}

export default Navbar