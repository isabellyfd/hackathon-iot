import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const DashboardNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"  >
                Dashboard
            </Navbar.Brand>
        </Navbar>
    )
}

export default DashboardNavbar;