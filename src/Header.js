import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <>
                {/* <header className="row">
                    <div className="col-sm-12 bg-info"> */}
                        <h1>Header</h1>
                        {/* <Navbar bg="primary" variant="dark">
                        <Container>
                        <Nav className="me-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#TodoApp">Features</Nav.Link>
                        <Nav.Link href="#ApiClass">Pricing</Nav.Link>
                        <Nav.Link href="#Timer">Home</Nav.Link>
                        <Nav.Link href="#ClassComponent">Features</Nav.Link>
                        <Nav.Link href="#ApiClass">Pricing</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar> */}
{/* 
                    </div>
                </header> */}
            </>
        );
    }
}

export default Header;