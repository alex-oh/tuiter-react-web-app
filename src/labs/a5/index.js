import Users from "./users";
import Login from "./users/login";
import Profile from "./users/profile";
import Register from "./users/register";
import { Link, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import { useSelector } from "react-redux";

function Assignment5() {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div>
            <h1>Assignment 5</h1>
            <pre>{JSON.stringify(currentUser, null, 2)}</pre>
            {currentUser ? (
                <Link to="profile">Profile</Link>
            ) : (
                <>
                    <Link to="register">Register</Link> |{" "}
                    <Link to="login">Login</Link>
                </>
            )}
            | | <Link to="users">Users</Link>
            <Routes>
                <Route path="/" element={<Navigate to="/labs/a5/login" />} />
                <Route path="profile" element={<Profile />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="users" element={<Users />} />
            </Routes>
        </div>
    );
}

export default Assignment5;
