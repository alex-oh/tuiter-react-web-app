import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

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
    const dispatch = useDispatch();

    return (
        <div class="wd-tuit-icons">
            <div class="wd-tuit-icon">
                <i class="far fa-comment"></i> {tuit.replies}
            </div>
            <div class="wd-tuit-icon">
                <i class="fas fa-retweet"></i> {tuit.retuits}
            </div>
            <div class="wd-tuit-icon">
                <i
                    class={`${
                        tuit.liked ? "wd-liked-tuit fa" : "far"
                    } fa-heart`}
                    onClick={() =>
                        dispatch(
                            updateTuitThunk({ ...tuit, likes: tuit.likes + 1 })
                        )
                    }
                ></i>{" "}
                <span className="ms-2">{tuit.likes}</span>
            </div>
            <div class="wd-tuit-icon">
                <i
                    class={`${tuit.disliked ? "fas" : "far"} fa-thumbs-down`}
                    onClick={() =>
                        dispatch(
                            updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 })
                        )
                    }
                />
                <span className="ms-2">{tuit.dislikes}</span>
            </div>
            <div class="wd-tuit-icon">
                <i class="far fa-share-square"></i>
                <span className="ms-2">{tuit.retuits}</span>
            </div>
        </div>
    );
};

export default TuitStats;
