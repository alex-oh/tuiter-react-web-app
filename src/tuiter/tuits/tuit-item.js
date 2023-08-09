import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../services/tuits-thunks";
import TuitStats from "./tuit-stats";
import "./tuit.css";
import "../../vendors/fontawesome/css/all.css";
import { BsXLg } from "react-icons/bs";

const TuitItem = ({
    tuit = {
        topic: "Space",
        userName: "SpaceX",
        time: "2h",
        title: `Tesla CyberTruck lands on Mars and
    picks up the Curiosity rover on its 6' bed`,
        image: "tesla.png",
    },
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    };
    return (
        <li className="list-group-item">
            {" "}
            <div class="wd-tuit">
                <div className="row">
                    <div className="col-2">
                        <img
                            class="wd-profile-img"
                            src={`/images/users/${tuit.image}`}
                        />
                    </div>
                    <div className="col-9 p-0">
                        <b>{tuit.userName}</b>{" "}
                        <i class="fas fa-certificate"></i>{" "}
                        <span class="grey-text">
                            {tuit.handle} • {tuit.time}
                        </span>
                        <p>{tuit.tuit}</p>
                        <TuitStats key={tuit._id} tuit={tuit} />
                    </div>
                    <div className="col-1">
                        <BsXLg
                            className="float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}
                        />
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
