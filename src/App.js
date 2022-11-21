import Layout from "./components/Layout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./components/PostDetail.jsx";
import ManagePost from "./components/ManagePost";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route
                path="/view/:id"
                element={
                    <Layout>
                        <PostDetail />
                    </Layout>
                }
            />
            <Route
                path="/view/:id/:action"
                element={
                    <Layout>
                        <ManagePost />
                    </Layout>
                }
            />
            <Route
                path="/view/management/:action"
                element={
                    <Layout>
                        <ManagePost />
                    </Layout>
                }
            />
        </Routes>
    );
}

export default App;
