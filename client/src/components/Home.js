import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

function Home() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "100px" }}>
            <div class="card">
                <div class="card-header">
                    Welcome
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>We are the MERN developers ...</p>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Home