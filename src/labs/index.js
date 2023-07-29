import Nav from "../nav";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import Assignment4 from "./a4";
import Assignment3 from "./a3";

function Labs() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Assignment3 />} />
                <Route path="a3" element={<Assignment3 />} />
                <Route path="a4" element={<Assignment4 />} />
            </Routes>
        </div>
    );
}
export default Labs;
