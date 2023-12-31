import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
    profileThunk,
    logoutThunk,
    updateUserThunk,
} from "../services/auth-thunks";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = async () => {
        dispatch(updateUserThunk(profile));
    };
    const loadProfile = async () => {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
    };
    useEffect(() => {
        loadProfile();
    }, []);
    return (
        <div>
            <h1>Profile Screen</h1>
            currentUser:
            <pre>{JSON.stringify(currentUser, null, 2)}</pre>
            profile:
            <pre>{JSON.stringify(profile, null, 2)}</pre>
            {currentUser && (
                <div>
                    <div>
                        <label>First Name</label>
                        <input
                            className="form-control"
                            type="text"
                            value={profile.firstName}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    firstName: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>{" "}
                    <div>
                        <label>Last Name</label>
                        <input
                            className="form-control"
                            type="text"
                            value={profile.lastName}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    lastName: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                </div>
            )}{" "}
            <button
                onClick={() => {
                    dispatch(logoutThunk());
                    setProfile();
                    navigate("../login");
                }}
            >
                {" "}
                Logout
            </button>
            <button onClick={save}>Save </button>
        </div>
    );
}
export default ProfileScreen;
