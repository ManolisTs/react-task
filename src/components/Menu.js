import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Menu = () => {
    const [selectedLi, setSelectedLi] = useState(0);

    const handleClick = (index) => {
        setSelectedLi(index);
    };

    return (
        <nav className="nav-menu">
            <Container>
                <Row className="justify-content-around">
                    {['SCHEDULE', 'TAB1', 'TAB2', 'TAB3'].map((item, index) => (
                        <Col key={index} xs="auto" className={selectedLi === index ? 'underlined active' : ''}>
                            <Nav.Link
                                href="#"
                                onClick={() => handleClick(index)}
                            >
                                {item}
                            </Nav.Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </nav>
    );
};

export default Menu;