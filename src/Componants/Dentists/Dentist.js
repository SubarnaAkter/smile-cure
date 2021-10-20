import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Dentist.css';
const Dentist = (props) => {
    const {doctorName,dept,img}=props.dentist;
    return (
        <div>
            <Col>
                <Card className="pb-3 service-card">
                    <Card.Img variant="top" className="dentist-img" src={img} />
                    <Card.Body>
                        <Card.Title className="text-center fw-bold">{doctorName}</Card.Title>
                        <Card.Text className="text-center">
                            {dept}
                        </Card.Text>
                    </Card.Body>

                    <button  className="button-regular mx-auto mt-4">Get Appointment</button>
                </Card>
            </Col>
        </div>
    );
};

export default Dentist;