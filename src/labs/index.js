import Lab3 from "./a3";
import Nav from "../nav";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";

function Labs() {
    return (
        <div>
            <Nav />
            <h1>Labs</h1>
            <Link to="lab3">Lab 3</Link>
            <Routes>
                <Route path="/" element={<Lab3 />} />
                <Route path="/lab3/*" element={<Lab3 />} />
            </Routes>
        </div>
    );
}
export default Labs;
