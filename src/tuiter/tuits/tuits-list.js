import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../services/tuits-thunks";

const TuitsList = () => {
    const { tuits, loading } = useSelector((state) => state.tuits);
    const dispatch = useDispatch();

    // invoke find tuits thunk to fetch tuits and put into reducer store
    useEffect(() => {
        dispatch(findTuitsThunk());
    }, []);
    return (
        <ul className="list-group">
            {loading && <li className="list-group-item">Loading...</li>}
            {tuits.map((tuit) => (
                <TuitItem key={tuit._id} tuit={tuit} />
            ))}
        </ul>
    );
};
export default TuitsList;
