import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

function Header() {

    const navigate = useNavigate();

    const goHomepage = () => {
        navigate('/');
    }

    return (
        <header className='header-container'>
            <Image
                fluid
                className='back'
                alt='Back Icon'
                src='../svg/back.svg'
                onClick={goHomepage}
            />
            <Image
                fluid
                className='search'
                alt='Search Icon'
                src='../svg/search.svg'
            />
        </header>
    );
};

export default Header;