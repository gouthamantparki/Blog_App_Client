import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import baseURL from '../api/api';

export const Signup = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        const { username, email, password, confirmPassword } = user;
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('All the fields are mandatory');
            return;
        }

        if (password === confirmPassword) {
            axios.post(`${baseURL}/users/signup`, user)
                .then(res => alert(res.data.message))
                .catch(error => console.log(error));
        } else {
            alert('Password and Confirm Password are not same')
        }
    }

    return (
        <>
            <h2 className="text-center display-6 mt-4">Signup</h2>
            <div className="container d-flex justify-content-center mt-4">
                <Form className='w-25'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" name="username" value={user.username} onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email" value={user.email} onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" name="password" value={user.password} onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="confirm password" name="confirmPassword" value={user.confirmPassword} onChange={handleInput} />
                    </Form.Group>
                    <div className='d-flex justify-content-around align-items-center'>
                        <Button variant="dark" onClick={handleSubmit}>Register</Button>{" "}
                        <Button variant="secondary" type="reset">Cancel</Button>{" "}
                    </div>
                </Form>
            </div>
        </>
    )
}
