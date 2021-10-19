import React from 'react';
import { Accordion } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <img src="http://www.prabhadentalhospital.co.in/wp-content/uploads/2019/07/about-us-dental.jpg" className="w-100" alt="" />

            <div className="container w-50 mx-auto m-5 text-center">
                <h1>Our Mission</h1>
                <p>Here at Smile Cure Dental Care we strive to create a comfortable, safe and relaxing environment for you and your family’s dental needs.

                    We believe in prevention, education and implementation as the keys to long term dental and oral health.

                    We will work with you and your family on your dental journey to create a happy and most importantly healthy smile.</p>
            </div>
            {/* ------------------------------ */}
            <div className="my-5">
                <div className="row  care-style g-4 m-5  ">
                    <div className="col-md-6 col-sm-1 my-3">
                       
                        <h1 className="fw-bold">Welcome to Smile Cure Dental Care
                        </h1>
                        <p>Our Family Friendly Dental team is experienced in providing oral health treatments to all ages. You are in good hands with our caring Dental Experts team who take the time to listen and understand your dental needs and concerns. From there our dental specialists, Dr. Nim or Dr. Rachael will tailor a specific dental treatment plan to suite your current circumstance.</p>
                        <div className="row g-4 my-5">
                            <div className="col ">
                                <h3>Our Promises</h3> 
                                <p><i className="fas fa-check text-warning"></i>    Provide a clean, safe and caring environment</p>
                                <p><i className="fas fa-check text-warning"></i>    Advise on your personal dental needs with open, informed professionalism</p>
                                <p><i className="fas fa-check text-warning"></i>    Use modern technology to perform safe, quality based dental service</p>
                                <p><i className="fas fa-check text-warning"></i>    Respect your time by being as punctual as possible for your appointment</p>
                                <p><i className="fas fa-check text-warning"></i>   Strive to keep you positive and completely satisfied with our service</p>
                                
                           
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-1 order-first order-md-last">
                        <div className=" ">
                            <img src="https://srvvdentalclinicinalwarpetchennai.files.wordpress.com/2017/05/dental-clinic.jpg" className="card-img-top mx-auto" alt="..." />

                        </div>
                    </div>


                </div>
            </div>

            {/* ------------------------------------ */}
            <div className="my-5">
                <div className="row  care-style g-4 m-5  ">
                    <div className="col-md-6 col-sm-1 my-3">
                        <p><i>7 Star Care & Protection</i></p>
                        <h1 className="fw-bold">Why Choose Us
                        </h1>
                        <p>Proactively revolutionize granular customer service after pandemic internal or "organic" sources. Distinctively impact proactive human capital rather than client-centered benefits.</p>
                        <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
                            <div className="col d-flex">

                                <i className="fas fa-user-shield fs-1 me-2"></i>
                                <div>
                                    <h3>100% Safe & Trused</h3>
                                    <p>You can rely on our 5-star rated South San Francisco dentists & .</p>
                                </div>


                            </div>
                            <div className="col d-flex">
                                <i className="fas fa-user-md fs-1 me-2"></i>
                                <div>
                                    <h3>Specialist Surgery</h3>
                                    <p>Smile cure center  is the only JCI Accredited 425-bed
                                    </p>
                                </div>

                            </div>
                            <div className="col d-flex">
                                <i className="fas fa-user-clock fs-1 me-2"></i>
                                <div>
                                    <h3>24/7 take care staff</h3>
                                    <p>Trusted 24 hour home care service for seniors with Nurse Next Door. </p>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <i className="fas fa-capsules fs-1 me-2"></i>
                                <div>
                                    <h3>Medicine service</h3>
                                    <p>Dentists and oral surgeons are often appointed to a hospital's </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-1  mt-5">
                        <div className="mt-5 ">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Do I really need to floss?</Accordion.Header>
                                    <Accordion.Body>
                                        There's no getting around the need to get around your teeth daily with dental floss. It clears food and plaque from between teeth and under the gumline. If you don't, plaque hardens into tartar, which forms wedges and widens the space between teeth and gums, causing pockets. Over time, gums pull away and teeth loosen.

                                        Either waxed or unwaxed floss will do the job. Using floss picks or interdental brushes is another easy option.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Are dental X-rays safe and needed?</Accordion.Header>
                                    <Accordion.Body>
                                        Medical and dental experts study the use of X-rays and set limits for their safety. Your dentist should take as few as possible. Sometimes dentists may recommend X-rays to diagnose a special problem. Advancements in technology means today's digital X-rays release much less radiation and are safer than in the past.

                                        Expect to get them during a first exam after not seeing a dentist for a while. This helps check tooth and gum health. If you have gum disease, the dentist may want pictures every 6 months. For regular check-ups, it's about every 2 years, depending on your dentist's plan.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What do sealants do?</Accordion.Header>
                                    <Accordion.Body>
                                        Sealants protect against cavities that can form in the natural tiny holes and cracks on the outside of teeth. Kids from about 6 to 12 benefit from having sealants painted and hardened onto the chewing surfaces of their back teeth, or molars. Adults can get sealants as well to protect teeth that don't have fillings.

                                        Dentists or dental assistants put sealants on in an office visit, and it's painless. They last around 2-4 years.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What's the best way to whiten my teeth?</Accordion.Header>
                                    <Accordion.Body>
                                        Stores sell many whitening products, and you can get take-home gels and trays from your dentist, but neither is as strong as procedures done in a dental office

                                        If you want to try an over-the-counter whitener, look for one with an ADA seal. Check with your dentist for advice before you buy, especially if you have dental work or dark stains. And don't keep using them, or you could damage your teeth.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default About;