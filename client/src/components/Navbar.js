import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><img alt="" src='https://icon-library.com/images/react-icon/react-icon-28.jpg' style={{ height: "50px", width: "50px", padding: "8px" }} /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav" style={{ marginLeft: "auto" }}>
                        <li class="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/signup">Registration</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar