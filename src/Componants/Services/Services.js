import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import './Services.css'
const Services = () => {
    const [services] = useServices();
    return (
        <div>
           
           <h1 className="text-center fw-bold all-services pt-5 d-flex justify-content-center align-items-center fs-1">Our All Services</h1>
         
           <h1 className="text-center fw-bold mt-5 pt-5 ">Amazing Services</h1>
            <Row xs={1} md={1} className="g-4 m-5 ">

                {
                    services.map(service => 
                       
                 <Col key={service.id}>
                <Card className="shadow-lg  flex-md-row ">
                    <Card.Img variant="top" className="service-img my-auto" src={service.img} />
                    <Card.Body>
                        <Card.Title className=" fw-bold">{service.name}</Card.Title>
                        <Card.Text>
                            {service.details}...
                        </Card.Text>
                    </Card.Body>

                   
                </Card>
            </Col>
                    )
                }

            </Row>
            <h1 className="text-center fw-bold ">All Services</h1>
            <img src="https://www.centralparkdental.net/storage/app/media/Services.jpg" alt="" className="w-100"/>
        </div>
    );
};

export default Services;