import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", password: "", cpassword: "", phone: "", work: ""
    })

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
        console.log(user)
    }

    const RegisterUser = async (e) => {
        e.preventDefault()
        const { name, email, password, cpassword, phone, work } = user;
        const res = await fetch("/register", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword, phone, work
            })
        })
        const errortype = await res.json();
        if (errortype.status === 422 || !errortype) {
            window.alert("User not registered");
            console.log("User not registered")
        } else {
            window.alert("User registered");
            console.log("User registered");
            navigate("/login");
        }
    }

    return (
        <>
            <section className="signup" style={{ padding: "100px" }}>
                <h2 className="form-title">
                    Sign up
                </h2>
                <>
                    <form>
                        <div class="mb-3">
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Your Name</label>
                                <input type="string" class="form-control" id="exampleInputPassword1" name="name" value={user.name} onChange={handleInputs} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Contact number</label>
                                <input type="number" class="form-control" id="exampleInputPassword1" name="phone" value={user.phone} onChange={handleInputs} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Your Profession</label>
                                <input type="string" class="form-control" id="exampleInputPassword1" name="work" value={user.work} onChange={handleInputs} />
                            </div>
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleInputs} />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={handleInputs} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Confirm Your Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" name="cpassword" value={user.cpassword} onChange={handleInputs} />
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={RegisterUser}>Submit</button>
                    </form>
                </>
            </section>
        </>
    )
}

export default Signup