import React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container" style={{ minHeight: "80vh" }}>
        <h1 style={{ color: "red" }}>Page Not Found!!</h1>
        <Link to="/">Go to Home </Link>
        </div>
    );
};

export default NotFound;