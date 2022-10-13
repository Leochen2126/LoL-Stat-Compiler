import { useState } from "react";
import './LoginAccount.css';

function LoginAccount() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form className = "form">
            <h3>Login</h3>
            <label className="label">Username</label>
            <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <label className="label">Password</label>
            <input
            type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <p><a href="https://www.w3.org/">W3C</a></p>
        </form>
    )
}
export default LoginAccount;