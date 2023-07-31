import React from "react";
import { useDispatch } from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import TuitStats from "./tuit-stats";
import "./tuit.css";
import "../../vendors/fontawesome/css/all.css";
import {BsXLg} from "react-icons/bs";

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
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            {" "}
            <div class="wd-tuit">
                <div class="wd-tuit-top">
                    <img
                        class="wd-profile-img"
                        src={`/images/users/${tuit.image}`}
                    />
                    <div class="wd-tuit-contents">
                        <b>{tuit.userName}</b>{" "}
                        <i class="fas fa-certificate"></i>{" "}
                        <span class="grey-text">
                            {tuit.handle} • {tuit.time}
                        </span>
                        <p>{tuit.tuit}</p>
                        <TuitStats key={tuit._id} tuit={tuit} />
                    </div>
                    <BsXLg className="float-end" 
                    onClick={() => deleteTuitHandler(tuit._id)}/>
                    <div class="wd-ellipsis-container">
                        <i class="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
