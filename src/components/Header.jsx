const Header = props => {
    
    const buttonClickHandler = () => {
        let showAccountform = true;
        props.passData(showAccountform);
    }
    return <header className="header">
        <a href="#" className="logo">
            {" "}
            ASOSE{" "}
        </a>
        <nav className="navbar">
            <div id="close-navbar" className="fas fa-times" />
            <a href="home.html">home</a>
            <a href="about.html">about</a>
            <a href="courses.html">courses</a>
            <a href="contact.html">contact</a>
        </nav>
        <div className="icons">
            <div id="account-btn" onClick={buttonClickHandler} className="fas fa-user" />
            <div id="menu-btn" className="fas fa-bars" />
        </div>
    </header>;
}
export default Header;