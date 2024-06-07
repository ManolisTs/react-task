import React from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import Image from 'react-bootstrap/esm/Image';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Homepage() {

    const navigate = useNavigate();

    const goSecondScreen = async () => {
        try {
            const response = await fetch('http://testlc.lncdoo.com/api/myprofile/events');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const events = data.data.filter(event => 
                event.is_inclass && 
                event.summary.some(item => item.title === "Wednesdays, Thursdays & Fridays" && item.section === "date")
            );
            navigate('/second', { state: { events } });
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };
    

    return (
        <>
            <Header />
            <main className='main-section'>
                <div className="container-fluid">
                    <div className="row flex-column both">
                        <div className="col p-0">
                            <div className="card space-bottom active" onClick={goSecondScreen}>
                                <div className="card-body">
                                    <h5 className="card-title">Masterclass</h5>
                                    <div className="row">
                                        <div className="col text-end">
                                            <Image 
                                                src="../images/arrows.png" 
                                                className="Image-fluid" 
                                                alt="Arrows image" 
                                            />
                                        </div>
                                    </div>
                                    <div className="row content">
                                        <div className="col-3 d-flex align-items-center">
                                            <Image 
                                                src="../svg/location.svg" 
                                                className="Image-fluid me-1" 
                                                alt="Sub 1" 
                                            />
                                            <span>Athens</span>
                                        </div>
                                        <div className="col-9 d-flex align-items-center p-0">
                                            <Image 
                                                src="../svg/calendar.svg" 
                                                className="Image-fluid me-1" 
                                                alt="Sub 2" 
                                            />
                                            <span className="day">Wednesdays, Thursdays & Fridays</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col p-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Masterclass</h5>
                                    <div className="row">
                                        <div className="col text-end">
                                            <Image 
                                                src="../images/arrows.png" 
                                                className="Image-fluid" 
                                                alt="Arrows image"
                                            />
                                        </div>
                                    </div>
                                    <div className="row content">
                                        <div className="col-5 d-flex align-items-center">
                                            <Image 
                                                src="../svg/screen.svg" 
                                                className="Image-fluid me-1" 
                                                alt="Sub 1" 
                                            />
                                            <span>2,52%</span>
                                        </div>
                                        <div className="col d-flex align-items-center">
                                            <Image
                                                src="../svg/check.svg"
                                                className="Image-fluid me-1"
                                                alt="Sub 2" 
                                            />
                                            <span>17 of 1910</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Homepage;