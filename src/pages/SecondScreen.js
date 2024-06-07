import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderSecond from '../components/HeaderSecond';
import Footer from '../components/Footer';
import Accordion from 'react-bootstrap/Accordion';
import Menu from '../components/Menu';
import Image from 'react-bootstrap/esm/Image';

function SecondScreen() {

    const location = useLocation();

    const events = location.state?.events || [];

    const getTime = (dateTimeString) => {
        return dateTimeString.split(' ')[1];
    };
    
    return (
        <>
            <HeaderSecond />
            <main className='main-section'>
                <div>
                    <Menu />
                    <Accordion defaultActiveKey="0-0">
                        {events.map((event, eventIndex) => (
                            event.topics.map((topic, topicIndex) => (
                                <Accordion.Item eventKey={`${eventIndex}-${topicIndex}`} key={`${eventIndex}-${topicIndex}`}>
                                    <Accordion.Header>{topic.topic_name}</Accordion.Header>
                                    <Accordion.Body className='row flex-column'>
                                        {topic.topic_content.lessons.map((lesson, lessonIndex) => (
                                            <div className="col p-4" key={lessonIndex}>
                                                <div className="accordion-card">
                                                    <div className="accordion-card-body">
                                                        <h5 className="accordion-card-title">{lesson.title}</h5>
                                                        <div className="row">
                                                            <div className="col text-end">
                                                                <Image 
                                                                    src="../svg/profile.svg" 
                                                                    className="Image-fluid" 
                                                                    alt="Arrows image" 
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-4 d-flex align-items-center">
                                                                <Image 
                                                                    src="../svg/time.svg" 
                                                                    className="Image-fluid me-1" 
                                                                    alt="Sub 1" 
                                                                />
                                                                <span>{getTime(lesson.time_starts)}</span>
                                                            </div>
                                                            <div className="col-4 d-flex align-items-center">
                                                                <Image 
                                                                    src="../svg/calendar.svg" 
                                                                    className="Image-fluid me-1" 
                                                                    alt="Sub 2" 
                                                                />
                                                                <span className="day">{lesson.date}</span>
                                                            </div>
                                                            <div className="col-4 d-flex align-items-center">
                                                                <Image 
                                                                    src="../svg/location.svg" 
                                                                    className="Image-fluid me-1" 
                                                                    alt="Sub 1" 
                                                                />
                                                                <span>Address</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                        ))}
                    </Accordion>
                </div>
            </main>
            <Footer />
        </>
      );
};

export default SecondScreen;