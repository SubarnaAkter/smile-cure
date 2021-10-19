import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import './Home.css';
import Service from './Service/Service';
const Home = () => {

    const [services] = useServices();

    return (
        <div className="">
            {/* banner section */}
            <div className="banner-title banner">
                <h1 className="mt-5 fs-1 fw-bold" >Welcome to <br />
                    <span className="heading">Smile Cure Dental Care</span>
                </h1>
                <h3 className="my-5">Committed to quality dental care for the community</h3>
                <button className="button-regular py-2 fw-bold">Book Now</button>
            </div>

            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4 m-5 ">
                    <div className="col">
                        <div className="card border-0 shadow-sm">
                            <img src="https://preview.pixlr.com/images/800wm/1503/1/1503123972.jpg" className="card-img-top w-50 mx-auto" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Easy Appointment</h5>
                                <p className="card-text">Easy Appointment Booking lets you take bookings and appointments on Smile Cure Center</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0 shadow-sm">
                            <img src="https://static.thenounproject.com/png/888753-200.png" className="card-img-top w-50 mx-auto" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Emergency Service</h5>
                                <p className="card-text">use Emergency Dental Service to find a dentist near you & schedule a same-day dental appointment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0 shadow-sm">
                            <img src="https://png.pngitem.com/pimgs/s/532-5320474_24-7-support-soporte-24-7-png-transparent.png" className="card-img-top w-50 mx-auto" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">24/7 Service</h5>
                                <p className="card-text">Find a dentist near you using our 24-hour emergency patient support team.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* ------------------------------------------------ */}
            {/* Services Section */}
            <h1 className="text-center fw-bold mt-5 pt-5">Our Services</h1>
            <Row xs={1} md={3} className="g-4 m-5 ">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>

                    )
                }

            </Row>

            {/* ------------------------------------------------ */}

            <div>
                <div className="row   g-4 m-5 ">
                    <div className="col-md-8 col-sm-1 my-5">
                        <p><i>7 Star Care & Protection</i></p>
                        <h1>We love your loved ones
                        </h1>
                        <p>Proactively revolutionize granular customer service after pandemic internal or "organic" sources. Distinctively impact proactive human capital rather than client-centered benefits.</p>
                        <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
                            <div className="col d-flex">
                                
                            <i className="fas fa-user-shield fs-1 m-2"></i>
                            <div>
                            <h3>100% Safe & Trused</h3>
                                 <p>You can rely on our 5-star rated South San Francisco dentists & specialists, same day emergency dentistry and a 100% satisfaction guarantee.</p>
                            </div>
                                
                             
                            </div>
                            <div className="col d-flex">
                            <i class="fas fa-user-md fs-1 m-2"></i>
                                <div>
                                <h3>Specialist Surgery</h3>
                                 <p>Smile cure center  is the only JCI Accredited 425-bed multi-disciplinary super-specialty tertiary care hospital in Bangladesh.
                                  </p>
                                </div>
                               
                            </div>
                            <div className="col d-flex">
                            <i class="fas fa-hand-holding-medical"></i>dfdfg
                                <div>
                                <h3>24/7 take care staff</h3>
                                 <p>Trusted 24 hour home care service for seniors with Nurse Next Door. Hire compassionate and reliable elderly care providers. Ask us how we can help today.</p>
                                </div>
                            </div>
                            <div className="col d-flex"> 
                            <i class="fas fa-capsules fs-1 m-2"></i>
                                <div>
                                <h3>Medicine service</h3>
                                 <p>Dentists and oral surgeons are often appointed to a hospital's medical staff to provide dental services to emergency department patients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-1 order-first order-md-last">
                        <div className=" ">
                            <img src="https://previews.123rf.com/images/blueringmedia/blueringmedia1511/blueringmedia151100458/48427731-male-and-female-dentists-with-tools-illustration.jpg" className="card-img-top mx-auto" alt="..." />

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;