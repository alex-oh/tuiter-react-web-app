import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
import { useSelector } from "react-redux";

function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let {currentUser} = useSelector((state) => state.user)
    const handleLogin = async () => {
        try {
            currentUser = dispatch(loginThunk({ username, password }));
            // if dispatch is successful, then navigate to the profile page
            currentUser && navigate("../profile");
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div>
            <h1>Login Screen</h1>
            currentUser:
            <pre>{JSON.stringify(currentUser, null, 2)}</pre>
            <div className="mt-2">
                <label>Username</label>
                <input
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className="mt-2">
                <label>Password</label>
                <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button className="btn btn-primary mt-2" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}
export default LoginScreen;
