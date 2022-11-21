import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPosts, getUsers } from "../thunk/thunk";

const PostDetail = () => {
    const reactionEmoji = {
        thumbsUp: "👍",
        wow: "😮",
        heart: "❤️",
        rocket: "🚀",
        coffee: "☕",
    };

    const { id } = useParams();

    const posts = useSelector((state) => state.posts);
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getUsers());
    }, []);

    const post = posts.find((post) => post.id === Number(id));

    return (
        <div className="container w-50 border border-secondary rounded-3 p-4 my-3">
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            <div className="d-flex justify-content-between">
                <Link to={`/view/${post?.id}/edit`}>Edit post</Link>
                <p>by {users.find((user) => user.id === post?.userId)?.name}</p>
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
    );
};

export default PostDetail;
