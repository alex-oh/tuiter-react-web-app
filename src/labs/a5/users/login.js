import { useState } from "react";
// import { login } from "./service";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "./service";

function Login() {
    // user is a local state variable
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginThunk(user));
        navigate("/labs/a5/profile");
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <label>Username</label>
                <input
                    className="form-control w-25"
                    value={user.username}
                    onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                    }
                    type="text"
                    name="username"
                    placeholder="Username"
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    className="form-control w-25"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                    type="password"
                    name="password"
                    placeholder="Password"
                />
            </div>
            <input
                onClick={handleLogin}
                className="btn btn-primary"
                value="Login"
            />
            <h4>Current User</h4>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    );
}
export default Login;
