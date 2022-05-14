import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

function Contact() {
    return (
        <div className="contact" style={{ display: "flex", alignItems: "center", padding: "20px" }}>
            <div class="card" style={{ flex: "0.3", display: "flex", alignItems: "center", padding: "10px" }}>
                <img src="https://pluspng.com/img-png/png-user-icon-person-icon-png-people-person-user-icon-2240.png" class="card-img-top" alt="..." style={{ width: "150px", height: "150px" }} />
                <div class="card-body">
                    <h5 class="card-title">user name</h5>
                    <p class="card-text">user email</p>
                    <p class="card-text">phone no</p>
                </div>
            </div>
            <div style={{ flex: "0.7", display: "flex", alignItems: "center", padding: "20px", flexDirection: "column" }}>
                <h2 className="form-title">
                    Get in Touch
                </h2>
                <div class="mb-3" style={{ display: "flex" }}>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required="true" />
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" required="true" />
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone number" required="true" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </div>
        </div>
    )
}

export default Contact