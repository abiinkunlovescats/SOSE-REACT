import { useRef } from "react";

export default function AccountForm(showAccountform) {
    return <div  className={"active account-form"}>
        <div id="close-form" className="fas fa-times" />
        <div className="buttons">
            <span className="btn active login-btn">login</span>
            <span className="btn register-btn">register</span>
        </div>
        <form className="login-form active" action="">
            <h3>login now</h3>
            <input type="email" placeholder="Enter your email" className="box" />
            <input
                type="password"
                placeholder="Enter your password"
                className="box" />
            <div className="flex">
                <input type="checkbox" name="" id="remember-me" />
                <label htmlFor="remember-me">remember me</label>
                <a href="#">forgot password?</a>
            </div>
            <input type="submit" defaultValue="login now" className="btn" />
        </form>
        <form className="register-form" action="">
            <h3>register now</h3>
            <input type="Name" placeholder="Enter your name" className="box" />
            <input type="Email" placeholder="Enter your email" className="box" />
            <input
                type="Password"
                placeholder="Enter your password"
                className="box" />
            <input type="submit" defaultValue="register now" className="btn" />
        </form>
    </div>;
}