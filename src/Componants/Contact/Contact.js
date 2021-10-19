import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
const Contact = () => {
    return (
        <div>
            <img className="w-100 " style={{ height: "300px" }} src="https://a2i.gov.bd/wp-content/uploads/2019/08/Contact-us.jpg" alt="" />

            <h1 className="text-center my-5">Contact us</h1>

            <div className="row container my-5">
                <div className="col ms-5">
                    <div>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <button className="button-regular my-2 mb-5"  type="submit">
                    Submit
                </button>
                    </div>
                </div>
                <div className="col m-3 ms-5">
                    <h1>We are here for help you! Arrange a meeting. </h1>
                        <p>Holisticly engage inexpensive architectures via high-quality solutions. Efficiently implement synergistic applications vis-a-vis best-of-breed ecommerce onotonectally enable client-based portals
                        <h4 className="my-4">Opening Hours</h4>
                    <p>
                        Mon Tue Wed Fri 8:30AM-5:30PM </p>
                    <p>Thurs 8:30 AM-7:00 PM</p>
                    <p> Sat: 8:30 AM-12:30 PM</p>
</p>
                   <h3>Address</h3>
                   <p>Smile cure Dental Care
                        <br />
                        Nurpur,kadamtali,
                        Shop 7/770 Jia soroni Rd
                        <br />
                        Dhaka,Bangladesh</p>

                        <h3>Supports</h3>
                        <h1 className="text-info">0171233436</h1>
                </div>
            </div>



        </div>
    );
};

export default Contact;