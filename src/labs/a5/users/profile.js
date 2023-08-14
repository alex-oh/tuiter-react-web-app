import React, { useState, useEffect } from "react";
import { profile, logout } from "./service";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { profileThunk, logoutThunk } from "./service";

function Profile() {
    const [currentUser, setCurrentUser] = useState({});
    const fetchUser = async () => {
        const {payload} = await dispatch(profileThunk());
        setCurrentUser(payload);
    };
    useEffect(() => {
        fetchUser();
    }, []);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        dispatch(logoutThunk());
        navigate("/labs/a5/login");
    };
    return (
        <div>
            <h1>Profile</h1>
            <pre>{JSON.stringify(currentUser, null, 2)}</pre>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Profile;
