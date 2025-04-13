import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "../../store/auth";
import "./navbar.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isLoggedIn } = useAuth();

    return (
        <header>
            <div className="container">
                {/* Logo */}
                <div className="logo-brand">
                    <NavLink to="/">Jkcoder01</NavLink>
                </div>

                {/* Menu Button */}
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX className="close" /> : <FiMenu className="menu" />}
                </div>

                {/* Navigation Menu */}
                <nav>
                    <ul className={menuOpen ? "active" : ""}>
                        <li>
                            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
                        </li>

                        <li>
                            <NavLink to="/service" onClick={() => setMenuOpen(false)}>Service</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                        </li>

                        {isLoggedIn ? (
                            <li>
                                <NavLink to="/logout" onClick={() => setMenuOpen(false)}>Logout</NavLink>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/register" onClick={() => setMenuOpen(false)}>Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
