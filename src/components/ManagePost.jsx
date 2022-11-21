import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addPost, editPost, getPosts, getUsers } from "../thunk/thunk";

const ManagePost = () => {
    const { id, action } = useParams();

    const navigate = useNavigate();

    let posts = useSelector((state) => state.posts);
    let users = useSelector((state) => state.users);

    const [post, setPost] = useState({ title: "", body: "", userId: "" });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getUsers());
    }, [id]);

    useEffect(() => {
        if (id) {
            setPost(posts.find((post) => post.id === Number(id)));
        }
    }, [posts]);

    const validateSchema = Yup.object().shape({
        title: Yup.string().required(),
        body: Yup.string().required(),
    });

    const handleChange = (e) => {
        if (e.target.name === "author") {
            setPost({
                ...post,
                userId: users.find((user) => user.name === e.target.value).id,
            });
        } else {
            setPost({
                ...post,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (values) => {
        if (action === "edit") {
            dispatch(
                editPost({
                    id: values.id,
                    data: values,
                })
            );
            navigate("/");
        } else {
            dispatch(addPost(values));
            navigate("/");
        }
    };

    const handleDelete = (id) => {
        console.log(id);
    };

    return (
        <div className="container w-50">
            <h1>{action === "edit" ? "Edit Post" : "Add a new post"}</h1>
            <Formik
                initialValues={post}
                enableReinitialize
                validationSchema={validateSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <h3>Post Title:</h3>
                    <Field
                        className="w-100"
                        name="title"
                        onChange={handleChange}
                        value={post?.title || ""}
                    />
                    <ErrorMessage
                        name="title"
                        component="div"
                        className="error"
                    />
                    <br />
                    <br />

                    <h3>Author:</h3>
                    <Field
                        className="w-100"
                        name="author"
                        onChange={handleChange}
                        as="select"
                        value={
                            users.find((user) => user.id === post?.userId)?.name
                        }
                    >
                        {users.map((user, index) => (
                            <option value={user.name} key={index}>
                                {user.name}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage
                        name="author"
                        component="div"
                        className="error"
                    />
                    <br />
                    <br />

                    <h3>Content:</h3>
                    <Field
                        className="w-100"
                        name="body"
                        onChange={handleChange}
                        value={post?.body || ""}
                    />
                    <ErrorMessage
                        name="body"
                        component="div"
                        className="error"
                    />
                    <br />
                    <br />
                    <button type="submit" className="btn btn-success w-100">
                        Save Post
                    </button>
                    <br />
                    <br />
                    {action === "edit" && (
                        <button
                            className="btn btn-danger w-100"
                            onClick={() => handleDelete(post?.id)}
                        >
                            Delete post
                        </button>
                    )}
                </Form>
            </Formik>
        </div>
    );
};

export default ManagePost;
