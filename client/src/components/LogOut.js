import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function LogOut() {
    const navigate = useNavigate();
    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            navigate("/login", { replace: "true" });
        })
    }, [])
    return (
        <div>LogOut</div>
    )
}

export default LogOut