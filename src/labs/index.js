import Nav from "../nav";
import { Routes, Route } from "react-router";
import Assignment4 from "./a4";
import Assignment3 from "./a3";
import Assignment5 from "./a5";
import store from "../store";
import { Provider } from "react-redux";

function Labs() {
    return (
        <Provider store={store}>
        <div>
            <Nav />
            <h1>Labs</h1>
            <Routes>
                <Route path="/" element={<Assignment5 />} />
                <Route path="a3" element={<Assignment3 />} />
                <Route path="a4" element={<Assignment4 />} />
                <Route path="/a5/*" element={<Assignment5 />} />
            </Routes>
        </div>
        </Provider>
    );
}
export default Labs;
