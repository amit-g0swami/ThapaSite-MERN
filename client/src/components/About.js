import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

function About() {
    return (
        <div className="about" style={{ display: "flex", alignItems: "center", padding: "20px", justifyContent: "center" }}>
            <div className="about__userProfile">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://css-tricks.com/wp-content/uploads/2018/06/react-ideal-image.png" class="card-img-top" alt="..." style={{ height: "183px" }} />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick .</p>
                        <p class="card-text">Some quick .</p>
                        <p class="card-text">Some quick .</p>
                        <p class="card-text">Some quick .</p>
                    </div>
                </div>
            </div>
            <div className="about__userDetails" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", }}>
                <div class="card" style={{ width: "32rem" }}>
                    <h5 class="card-header">Amit kumar</h5>
                    <div class="card-body">
                        <h5 class="card-title">Web dev</h5>
                        <a href="#" class="btn btn-primary">Edit profile</a>
                    </div>
                </div>
                <div>
                    <div class="card" style={{ width: "32rem" }}>
                        <h5 class="card-header">About</h5>
                        <h5 class="card-header">User ID 3231231231</h5>
                        <h5 class="card-header">Name Amit kumar</h5>
                        <h5 class="card-header">Email 21@gmaail.com</h5>
                        <h5 class="card-header">Phone 31231</h5>
                        <h5 class="card-header">Profession webdev</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About