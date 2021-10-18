import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {name,details,img}=props.service;

    return (
        <div>
            <Col>
                <Card className="pb-3 shadow-lg">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-center fw-bold">{name}</Card.Title>
                        <Card.Text>
                            {details.slice(0,150)}...
                        </Card.Text>
                    </Card.Body>

                    <button className="button-regular mx-auto mt-4">See Details</button>
                </Card>
            </Col>
        </div>
    );
};

export default Service;