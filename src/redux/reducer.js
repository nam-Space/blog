import { ADD_POST, DELETE_POST, EDIT_POST, GET_POST, GET_USER } from "./action";

const initialState = {
    posts: [],
    users: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                posts: action.payload,
            };

        case GET_USER:
            return {
                ...state,
                users: action.payload,
            };

        case EDIT_POST:
            const id = action.payload.id;
            const postIndex = state.posts.findIndex((post) => post.id === id);
            state.posts[postIndex] = action.payload.data;
            console.log(state.posts);
            return state;

        case ADD_POST:
            return {
                ...state,
                posts: action.payload,
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload),
            };

        default:
            return state;
    }
};

export default rootReducer;
