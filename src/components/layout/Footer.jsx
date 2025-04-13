import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                {/* Left: Email & Social Media */}
                <div className="footer-social">
                    <a href="mailto:jkcoder01@gmail.com?subject=Inquiry&body=Hello%20Jitendra,%0D%0A%0D%0AI would like to discuss..." className="email" rel="noopener noreferrer">
                        <FaEnvelope />
                    </a>
                    <a href="https://whatsapp.com/channel/0029VadmmCP9Gv7cNA06Mz2F" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.facebook.com/share/1XqeZdQon1/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/jkcoder01?igsh=eG9rdmRmcTZlM2Z1" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>

                {/* Right: Navigation */}
                <div className="footer-nav">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Jkcoder01 | All Rights Reserved.</p>
            </div>
        </footer>
    );
};
