import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
    return (
        <div>
            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand href="#home" className='text-light fw-bolder'>
                        <img
                            alt=""
                            src="https://tse1.explicit.bing.net/th/id/OIP.FL33qheUvAqZZbv_c97v4gAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Counter-App
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header