import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';

function Navbar() {
    const [userdata, setUserdata] = useState();
    useEffect(() => {
        const getUserData = async () => {
            try {
                const res = await fetch("/home", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })
                const data = await res.json();
                console.log(data);
                setUserdata(data);
                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error
                }
            } catch (err) {
                console.log(err)
            }
        }
        getUserData();
    }, [])
    return (
        <div style={{ padding: "10px" }}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: "10px" }}>
                <Link className="navbar-brand" to="/"><img alt="" src='https://cdn.iconscout.com/icon/free/png-256/logo-1889531-1597591.png' style={{ height: "60px", width: "60px", padding: "0px" }} /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ padding: "6px" }}>
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
                        {
                            userdata?.name ? <>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                            </> : <>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/signup">Registration</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar