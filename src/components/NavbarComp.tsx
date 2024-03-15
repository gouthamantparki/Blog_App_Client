import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export const NavbarComp = () => {
    const token = localStorage?.getItem('token');

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className='w-100'>
                <Navbar.Brand className='w-25'>BLOG APP</Navbar.Brand>
                <Nav className="w-50 me-auto d-flex justify-content-around">
                    {token ?
                        <>
                            <div className='menu'><Link className='menus me-2' to="/profile">Profile</Link></div>
                            <div className='menu'><Link className='menus me-2' to="/">Posts</Link></div>
                            <div className='menu'><Link className='menus me-2' to="/create">Create Post</Link></div>
                        </>
                        :
                        <>
                            <div className='menu'><Link className='menus me-2' to="/signin">SignIn</Link></div>
                            <div className='menu'><Link className='menus me-2' to="/signup">Register</Link></div>
                        </>
                    }

                </Nav>
            </Container>
        </Navbar>
    )
}
