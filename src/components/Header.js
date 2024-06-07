import React from 'react';
import Image from 'react-bootstrap/Image';

function Header() {
    return (
        <header className='header-container'>
            <Image
                fluid
                className='logo'
                alt='Lioncode Logo'
                src='../images/Logo.png'
            />
        </header>
    );
};

export default Header;