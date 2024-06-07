import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Footer() {

    const [selectedButton, setSelectedButton] = useState(0);

    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setSelectedButton(0);
        } else if (location.pathname === '/second') {
            setSelectedButton(1);
        }
    }, [location.pathname]);

    const goHomepage = () => {
        setSelectedButton(0);
        navigate('/');
    }

    const goSecondScreen = () => {
        setSelectedButton(1);
        navigate('/second')
    }

    return (
        <footer className='footer-container'>
            <div className='box d-flex'>
                <Button 
                    className={`col ${selectedButton === 0 ? 'active-button' : ''}`}
                    variant='link'
                    onClick={goHomepage}
                >
                    <Image
                        fluid
                        className='left-button'
                        alt='Left Button Menu'
                        src='../images/LeftButton.png'
                    />
                </Button>
                <Button
                    className={`col ${selectedButton === 1 ? 'active-button' : ''}`}
                    variant='link'
                    onClick={goSecondScreen}
                >
                    <Image
                        fluid
                        className='right-button'
                        alt='Right Button Menu'
                        src='../images/RightButton.png'
                    />
                </Button>
            </div>
        </footer>
    );
};

export default Footer;