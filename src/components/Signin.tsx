import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseURL from '../api/api';

export const Signin = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleInput = (e: any) => {
        const { name, value } = e.target;
        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { email, password } = user;
        if (email === '' || password === '') {
            alert('All the fields are mandatory');
            return;
        }

        axios.post(`${baseURL}/users/signin`, user)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                alert(res.data.message)
                navigate('/', { replace: true })
                window.location.reload()
            })
            .catch(error => alert(error.response.data.message));
    }

    return (
        <>
            <h2 className="text-center display-6 mt-4">SignIn</h2>
            <div className="container d-flex justify-content-center mt-4">
                <Form className='w-25'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email" value={user.email} onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" name="password" value={user.password} onChange={handleInput} />
                    </Form.Group>
                    <div className='d-flex justify-content-around align-items-center'>
                        <Button variant="dark" onClick={handleSubmit}>Sign In</Button>{" "}
                        <Button variant="secondary" type="reset">Cancel</Button>{" "}
                    </div>
                </Form>
            </div>
        </>
    )
}
