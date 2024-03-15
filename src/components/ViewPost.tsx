import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import baseURL from "../api/api";

export const ViewPost = () => {
    const { id } = useParams()
    const [post, setPost] = useState({
        image: '',
        title: '',
        description: '',
        tags: []
    })
    useEffect(() => {
        axios.get(`${baseURL}/posts/${id}`).then(res => setPost(res.data.data)).catch(err => alert(err.message))
    }, [])


    return (
        <div className="container">
            <h2 className="display-6 text-center mt-4">View Post</h2>
            <div className="d-flex justify-content-center mt-4">
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={post.image} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.description}
                        </Card.Text>
                        <Card.Text>
                            {post.tags.join(', ')}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
