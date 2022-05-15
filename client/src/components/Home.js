import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";

function Home() {
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "100px" }}>
            {userdata ? <div class="card">
                <div class="card-header">
                    Welcome {userdata?.name}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>Your work as a {userdata?.work}</p>
                    </blockquote>
                </div>
            </div> : <div class="card" ><div class="card-header">
                Login to try this application
            </div></div>}
        </div>
    )
}

export default Home