import React from 'react'
import ReactDOM from 'react-dom/client'

const Footer = () => {
    return (
        <div className="footer">
            <a className='footer__links' href="https://twitter.com/GrimFunk69" target="_blank"><i className="fa-brands fa-twitter footer__social-icons"></i></a>
            <a className='footer__links' href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook footer__social-icons"></i></a>
            <a className='footer__links' href="https://www.instagram.com/theinfamousfinch/" target="_blank"><i className="fa-brands fa-instagram footer__social-icons"></i></a>
            <a className='footer__links' href="https://github.com/TheInfamousGrim" target="_blank"><i className="fa-brands fa-github footer__social-icons"></i></a>
        </div>
    )
}

export default Footer;