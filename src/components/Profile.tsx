import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from "../api/api";

export const Profile = () => {
    const navigate = useNavigate();
    const token = localStorage?.getItem('token');
    if (token === null) {
        alert('Token missing');
        return;
    }
    const jwt = JSON.parse(atob(JSON.stringify(token).split('.')[1]));
    const [user, setUser]: any = useState()

    useEffect(() => {
        axios.get(`${baseURL}/users/${jwt.id}`).then(res => setUser(res.data.data)).catch(err => alert(err.message))
    }, [])

    const logout = (e: any) => {
        e.preventDefault()
        localStorage.removeItem('token')
        navigate('/signin', { replace: true })
        window.location.reload()
    }

    return (
        <div className="container">
            <div className="text-center mt-3">
                <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
            <h2 className="display-6 text-center mt-4">Profile</h2>
            <h2>Username: {user?.username}</h2>
            <p>Email: {user?.email}</p>
            <button className="btn btn-warning">Edit</button>
        </div>
    )
}
