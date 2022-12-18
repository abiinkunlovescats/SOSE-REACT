import React,{ useState} from "react";
import AccountForm from "./AccountForm";
import { Link } from "react-router-dom";
function Header() {
    const [isOpen, setIsOpen] = useState(true)
    return <React.Fragment>
    <header className="header">
        <Link to="/" className="logo">
            {" "}
            ASOSE{" "}
        </Link>
        <nav className="navbar">
            <div id="close-navbar" className="fas fa-times" />
            <Link to='/'>Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/contacts">Contact</Link>
        </nav>
        <div className="icons">
            <div id="account-btn" onClick={() => setIsOpen(false)} className="fas fa-user" />
            <div id="menu-btn" className="fas fa-bars" />
        </div>
    </header>
    {isOpen ? null : <AccountForm/>}
    </React.Fragment>;

}
export default Header;