import { useState } from "react";
//import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";
import './CreateAccount.css';

function CreateAccount() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    return (
        <form className = "form">
            <h3>Create A New Account</h3>
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
            <label className="label">Password Confirmation</label>
            <input
            type="text" 
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <p><a href="https://www.w3.org/">Already have an account? Click here to login</a></p>
            <div className="form-group">
            <button className="btn btn-primary btn-block">
              <span>Login</span>
            </button>
          </div>
        </form>
    )
}
export default CreateAccount;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<CreateAccount />);