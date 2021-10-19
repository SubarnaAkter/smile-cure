
import React from 'react';
import { Form, Row,  Col } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div>
            <img  className="w-100 " style={{ height:"300px" }} src="https://blog.ipleaders.in/wp-content/uploads/2016/12/appointment.jpg" alt="" />
            <div className="row m-5">
                <div className="col-md-5 col-12 mx-auto">
                <img  className="w-100 mx-auto m-5" src="https://t3.ftcdn.net/jpg/02/60/79/68/360_F_260796882_QyjDubhDDk0RZXV9z7XBEw9AKnWCizXy.jpg" alt="" />
                </div>
                
                <div className="col-md-7 col-12">
                <h1 className="text-center mt-5">Request an Appointment</h1>
            <div className="w-100 mx-auto">
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    
                </Row>


                <Row
                    className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date"  />
                    </Form.Group>   
                </Row>

                <Row
                    className="mb-3">
                    

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Select reason for your appointment</Form.Label>
                        <Form.Select   defaultValue="--">
                            <option>Cleaning and CheckUp</option>
                            <option>General Dentistry</option>
                            <option>OrthoDontics</option>
                            <option>Others</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>How did you hear about us?</Form.Label>
                        <Form.Select   defaultValue="--">
                            <option>Doctor's Referral</option>
                            <option>Patient's Referral</option>
                            <option>Internet Search </option>
                            <option>Others</option>
                        </Form.Select>
                    </Form.Group>

                   
                </Row>

                <button className="button-regular my-2 mb-5"  type="submit">
                    Submit
                </button>
            </div>
                </div>
            </div>
            
        </div>
    );
};

export default Appointment;