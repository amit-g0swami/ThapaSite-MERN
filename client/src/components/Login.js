import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = async (e) => {
        e.preventDefault();
        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const errortype = await res.json();
        if (errortype.status === 422 || !errortype) {
            window.alert("Unable to login");
            console.log("Unable to login")
        } else {
            window.alert("User logged in successfully");
            console.log("User logged in successfully");
            navigate("/");
        }
    }
    return (
        <div style={{ padding: "100px" }}><h2 className="form-title">
            Login
        </h2>
            <form method='POST'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={login}>Submit</button>
            </form>
        </div>
    )
}

export default Login