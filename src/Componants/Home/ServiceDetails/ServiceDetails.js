import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';


const ServiceDetails = () => {
           const {serviceId}=useParams();
           const [services,setServices]=useState([]);

    useEffect(()=>{
        
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>{
            setServices( data.find(service=>service.id == serviceId))
            
        })
    
    },[])
    
    return (
        <div>
             <Col>
                <Card className="pb-3 w-75 shadow-lg">
                    <Card.Img variant="top" src={services.img} />
                    <Card.Body>
                        <Card.Title className="text-center fw-bold">{services.name}</Card.Title>
                        <Card.Text>
                            {services.details}
                        </Card.Text>
                    </Card.Body>

                  
                </Card>
            </Col>
        </div>
    );
};

export default ServiceDetails;