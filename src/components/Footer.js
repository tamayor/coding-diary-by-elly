import WhatsAppLogo from  '../images/WhatsAppButtonGreenSmall.svg';
import './Footer.css';
function Footer(){
    return(
        <footer>
            <p className="Footer--name">&copy;Elly Mar</p>
            <div className='connect'>
            <p>Connect with me:</p>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/+639684299892"> <img className="whatsapp" alt="Chat on WhatsApp" src={WhatsAppLogo} /></a>
            </div>
        </footer>
    )
}
export default Footer;