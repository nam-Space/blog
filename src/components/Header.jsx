import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Header = () => {
    return (
        <nav
            className="navbar navbar-dark bg-primary"
            style={{ backgroundColor: "#e3f2fd" }}
        >
            <div className="container-fluid d-flex justify-content-between">
                <Link to="/" className="navbar-brand">
                    Redux Blog
                </Link>
                <div className="d-flex justify-content-between">
                    <Link to="/" className="text-white mx-5">
                        Home
                    </Link>
                    <Link to="/view/management/add" className="text-white">
                        New Post
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
