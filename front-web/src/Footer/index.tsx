import './style.css';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior.
            <div className="footer-icons">
                <a href="https://linkedin.com/in/joão-paulo-araújo-braz-518841203" target="_new"><LinkedInIcon /></a>
                <a href="https://www.instagram.com/jparaujobraz/" target="_new"><InstagramIcon /></a>
            </div>
        </footer>
    )
}

export default Footer;