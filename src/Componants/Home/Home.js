import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import './Home.css';
import Service from './Service/Service';
const Home = () => {

    const [services]=useServices();
    
    return (
        <div className="">

            <div className="banner-title banner">
                <h1 className="mt-5 fs-1 fw-bold" >Welcome to <br />
                    <span className="heading">Smile Cure Dental Care</span>
                </h1>
                <h3 className="my-5">Committed to quality dental care for the community</h3>
                <button className="button-regular py-2 fw-bold">Book Now</button>
            </div>
          {/* Services Section */}
              <h1 className="text-center fw-bold mt-5 pt-5">Our Services</h1>
            <Row xs={1} md={3} className="g-4 m-5 ">
            
                   {
                       services.map(service=><Service
                       service={service}
                       ></Service>
                        
                        )
                   }
                
            </Row>
        </div>
    );
};

export default Home;