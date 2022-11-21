import axios from "axios";
import {
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    GET_POST,
    GET_USER,
} from "../redux/action";

export const getPosts = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get("http://localhost:3001/post");
            dispatch({
                type: GET_POST,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getUsers = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get("http://localhost:3001/users");
            dispatch({
                type: GET_USER,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const editPost = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(
                `http://localhost:3001/post/${payload.id}`,
                payload.data
            );
            dispatch({
                type: EDIT_POST,
                payload,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const addPost = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("http://localhost:3001/post", payload);
            dispatch({
                type: ADD_POST,
                payload,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deletePost = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.delete(`http://localhost:3001/post/${id}`);
            dispatch({
                type: DELETE_POST,
                payload: id,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
