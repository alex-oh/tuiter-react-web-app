import Nav from "../nav";
import { Routes, Route } from "react-router";
import Assignment4 from "./a4";
import Assignment3 from "./a3";
import Assignment5 from "./a5";

function Labs() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Assignment5 />} />
                <Route path="a3" element={<Assignment3 />} />
                <Route path="a4" element={<Assignment4 />} />
                <Route path="a5" element={<Assignment5 />} />
            </Routes>
        </div>
    );
}
export default Labs;
