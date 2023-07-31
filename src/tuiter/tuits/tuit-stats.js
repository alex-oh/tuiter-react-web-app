import React from "react";

const TuitStats = ({
    tuit = {
        topic: "Space",
        userName: "SpaceX",
        time: "2h",
        title: `Tesla CyberTruck lands on Mars and
    picks up the Curiosity rover on its 6' bed`,
        image: "tesla.png",
    },
}) => {
    return (
        <li className="list-group-item">
            {" "}
            <div class="wd-tuit-icons">
                <div class="wd-tuit-icon">
                    <i class="far fa-comment"></i> {tuit.replies}
                </div>
                <div class="wd-tuit-icon">
                    <i class="fas fa-retweet"></i> {tuit.retuits}
                </div>
                <div class="wd-tuit-icon">
                    <i class="far fa-heart"></i> {tuit.likes}
                </div>
                <div class="wd-tuit-icon">
                    <i class="far fa-share-square"></i>
                </div>
            </div>{" "}
        </li>
    );
};

export default TuitStats;