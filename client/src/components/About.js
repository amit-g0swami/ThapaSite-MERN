import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState()
    useEffect(() => {
        const getUserData = async () => {
            try {
                const res = await fetch("/about", {
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
                navigate("/login");
            }
        }
        getUserData();
    }, [])

    return (
        <div className="about" style={{ display: "flex", alignItems: "center", padding: "20px", justifyContent: "center" }}>
            <div className="about__userProfile">
                <div class="card" style={{ width: "18rem", height: "393px" }}>
                    <img src="http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Download-Image.png" class="card-img-top" alt="..." style={{ height: "183px" }} />
                    <div class="card-body">
                        <h5 class="card-title">{userdata?.name}</h5>
                        <p class="card-text">{userdata?.work}</p>
                    </div>
                </div>
            </div>
            <div className="about__userDetails" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", }}>
                <div class="card" style={{ width: "32rem" }}>
                    <h5 class="card-header">{userdata?.name}</h5>
                    <div class="card-body">
                        <h5 class="card-title">{userdata?.work}</h5>
                        <button class="btn btn-primary">Edit profile</button>
                    </div>
                </div>
                <div>
                    <div class="card" style={{ width: "32rem" }}>
                        <h5 class="card-header">About</h5>
                        <h5 class="card-header">UID ${userdata?._id}</h5>
                        <h5 class="card-header">Name {userdata?.name}</h5>
                        <h5 class="card-header">Email {userdata?.email}</h5>
                        <h5 class="card-header">Phone {userdata?.phone}</h5>
                        <h5 class="card-header">{userdata?.work}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About