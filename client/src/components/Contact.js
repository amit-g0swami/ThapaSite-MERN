import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";

function Contact() {
    const [userdata, setUserdata] = useState({ name: "", email: "", phone: "", message: "" });
    useEffect(() => {
        const getUserData = async () => {
            try {
                const res = await fetch("/contact", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })
                const data = await res.json();
                console.log(data);
                setUserdata({ ...userdata, name: userdata.name, email: userdata.email, phone: userdata.phone });
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

    const handleInputs = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setUserdata({ ...userdata, [name]: value })
    }

    const pushMessage = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = userdata;
        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });
        const data = await res.json();
        if (!data) {
            console.log("message not send")
        } else {
            alert("message send");
            setUserdata({ ...userdata, message: "" })
        }
    }

    return (
        <div className="contact" style={{ display: "flex", alignItems: "center", padding: "100px" }}>
            <div class="card" style={{ flex: "0.3", display: "flex", alignItems: "center", padding: "10px" }}>
                <img src="https://pluspng.com/img-png/png-user-icon-person-icon-png-people-person-user-icon-2240.png" class="card-img-top" alt="..." style={{ width: "100px", height: "100px" }} />
                <div class="card-body" >
                    <h5 class="card-title">{userdata?.name}</h5>
                    <p class="card-text">{userdata?.email}</p>
                    <p class="card-text">{userdata?.phone}</p>
                </div>
            </div>
            <div style={{ flex: "0.7", display: "flex", alignItems: "center", padding: "20px", flexDirection: "column" }}>
                <h2 className="form-title">
                    Get in Touch
                </h2>
                <div class="mb-3" style={{ display: "flex" }}>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={userdata?.email} required="true" style={{ marginRight: "10px" }} onChange={handleInputs}
                        name='email'
                    />
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" required="true" value={userdata?.name} style={{ marginRight: "10px" }} onChange={handleInputs}
                        name='name' />
                    <input type="number" class="form-control" id="exampleFormControlInput1" value={userdata?.phone} placeholder="Phone number" required="true" onChange={handleInputs}
                        name='phone'
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInputs} name='message'></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </div>
        </div>
    )
}

export default Contact