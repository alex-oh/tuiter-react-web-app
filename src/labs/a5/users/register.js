import { useState } from "react";
import { register, registerThunk } from "./service";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

function Register() {
    // user is a local state variable
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async (e) => {
        e.preventDefault();
        dispatch(registerThunk(user));
        navigate("/labs/a5/profile");
        // console.log(newUser);
        // setUser(newUser);
    };

    return (
        <div>
            <h1>Register</h1>
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
            <div>
                <label>Confirm Password</label>
                <input
                    className="form-control w-25"
                    type="password"
                    name="password2"
                    placeholder="Confirm Password"
                />
            </div>
            <input
                onClick={handleRegister}
                className="btn btn-primary"
                value="Register"
            />
            <h4>Current User</h4>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    );
}
export default Register;
