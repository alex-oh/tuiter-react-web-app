import { getUsers, createUser } from "./service";
import { useState, useEffect } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    // more efficient call of async function
    const loadUsers = async () => {
        const users = await getUsers();
        setUsers(users);
    };
    // useEffect(() => {
    //     const promise = getUsers();
    //     promise.then((data) => {
    //         console.log(data);
    //         setUsers(data);
    //     });
    // }, []);

    // call the async function loadUsers defined above
    useEffect(() => {
        loadUsers();
    }, []);
    // ------------------------------------------------//
    const [username, setUsername] = useState("edward");
    const handleAdd = async () => {
        // something should happen after clicking 'add'
        // alert("add " + username);
        const users = await createUser(username);
        setUsers(users);
    };

    return (
        <div>
            <h3>Users</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="float-end btn btn-success"
                        onClick={handleAdd}
                    >
                        Add
                    </button>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className="form-control w-75"
                        placeholder="username"
                    />
                </li>
                {users.map((user) => (
                    <li key={user._id} className="list-group-item">
                        {user.username}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Users;
