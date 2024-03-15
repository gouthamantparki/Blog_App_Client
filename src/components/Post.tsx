import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import baseURL from '../api/api';


export const Post = (post: any) => {
    const data = post.post;
    const navigate = useNavigate();

    const handleDelete = (e: any) => {
        e.preventDefault();
        axios.delete(`${baseURL}/posts/${e.target.id}`).then(res => alert(res.data.message)).catch(err => alert(err.message))
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.description}
                </Card.Text>
                <div className="d-flex justify-content-center align-items-center">
                    <Button className='btn btn-sm btn-primary ms-2' onClick={() => { navigate(`/update/${data._id}`, { replace: true }) }}>Update</Button>{" "}
                    <Button className='btn btn-sm btn-danger ms-2' onClick={handleDelete} id={data._id}>Delete</Button>{" "}
                    <Button className='btn btn-sm btn-success ms-2' onClick={() => { navigate(`/post/${data._id}`, { replace: true }) }}>View</Button>{" "}
                </div>
            </Card.Body>
        </Card>
    )
}
