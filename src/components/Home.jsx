import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts, getUsers } from "../thunk/thunk";

const Home = () => {
    const posts = useSelector((state) => state.posts);
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getUsers());
    }, []);

    const reactionEmoji = {
        thumbsUp: "👍",
        wow: "😮",
        heart: "❤️",
        rocket: "🚀",
        coffee: "☕",
    };

    return (
        <div>
            {Array.from(posts).map((post, index) => (
                <div
                    className="container w-50 border border-secondary rounded-3 p-4 my-3"
                    key={index}
                >
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/view/${post.id}`}>View post</Link>
                        <p>
                            by{" "}
                            {
                                users.find((user) => user.id === post.userId)
                                    ?.name
                            }
                        </p>
                        <p>1 minutes ago</p>
                    </div>
                    <div className="d-flex">
                        <div className="mx-2">
                            {reactionEmoji.thumbsUp}
                            <span>0</span>
                        </div>
                        <div className="mx-2">
                            {reactionEmoji.wow}
                            <span>0</span>
                        </div>
                        <div className="mx-2">
                            {reactionEmoji.heart}
                            <span>0</span>
                        </div>
                        <div className="mx-2">
                            {reactionEmoji.rocket}
                            <span>0</span>
                        </div>
                        <div>
                            {reactionEmoji.coffee}
                            <span>0</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
