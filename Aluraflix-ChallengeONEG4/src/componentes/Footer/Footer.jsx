import logo from './Logo.png';
import './Footer.css'

const Footer = () => {
    return < div className="pie">
        <a className='logo__pie'><img src={logo} /></a>
        <h5>Desarrollado por Gauna Agustin | Oracle Next Education | 2024</h5>
    </ div>
}

export default Footer;