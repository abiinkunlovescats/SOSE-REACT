import React,{ useState} from "react";
import AccountForm from "./AccountForm";
import Link from "next/link";
function Header() {
    const [isOpen, setIsOpen] = useState(true)
    return <React.Fragment>
    <header className="header">
        <Link href="/" className="logo">
            {" "}
            ASOSE{" "}
        </Link>
        <nav className="navbar">
            <div id="close-navbar" className="fas fa-times" />
            <Link href='/'>Home</Link>
            <Link href="/about">About</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/contacts">Contact</Link>
        </nav>
        <div className="icons">
            <div id="account-btn" onClick={() => setIsOpen(false)} className="fas fa-user" />
            <div id="menu-btn" className="fas fa-bars" />
        </div>
    </header>
    
    </React.Fragment>;

}
export default Header;