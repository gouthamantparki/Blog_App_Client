import { useState, useEffect } from "react"
import axios from "axios"
import { Post } from "./Post"
import baseURL from "../api/api"


export const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`${baseURL}/posts`).then(res => setPosts(res.data.data)).catch(err => console.log(err))
    }, [posts])

    return (
        <div className="container">
            <h2 className="display-6 text-center mt-4">Posts</h2>
            <div className="d-flex justify-content-around align-items-center mt-4">
                {posts.map((post: any) => {
                    return (<Post post={post} key={post?._id} />)
                })}
            </div>
        </div>
    )
}