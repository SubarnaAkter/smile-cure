import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-container mb-0">
            <h1 className="ms-5 pt-5 footer-title"> <i className="fas fa-tooth"></i>  Smile Cure Dental Care</h1>
            <Row className="footer-body p-5 g-5 mx-auto" xs={1} md={4}  >
                <Col className="footer-item ">
                    <h3>About Us</h3>
                    <p>Welcome to Warralily Family Dental Practice. We provide complete dental care, tailored specifically for your needs. Get that dazzling smile with the highest standard of treatment from our team of professionals. We strive to give you a relaxing and comfortable experience in a friendly environment.</p>
                </Col>

                <Col className="footer-item ">
                    <h3>Contact info</h3>
                    <h5>Contact</h5>
                    <p>Phone: 03 4245 2030</p>
                    <p>Fax: 03 4245 2035</p>
                    <br />
                    <h5>Opening Hours</h5>
                    <p>
                        Mon Tue Wed Fri 8:30AM-5:30PM </p>
                    <p>Thurs 8:30 AM-7:00 PM</p>
                    <p> Sat: 8:30 AM-12:30 PM</p>

                </Col>
                <Col className="footer-item">
                    <h3>Our Address</h3>
                    <p>Smile cure Dental Care
                        <br />
                        Nurpur,kadamtali
                        <br />
                        Shop 7/770 Jia soroni Rd
                        <br />
                        Dhaka,Bangladesh</p>
                </Col>
                <Col className="footer-item">
                <h3>Social Media</h3>
                <button className="fs-4"><i className="fab fa-facebook"></i></button>
                <button className="fs-4 mx-1"><i className="fab fa-instagram"></i></button>
                <button className="fs-4"> <i className="fab fa-twitter-square"></i></button>
                <button className="fs-4 ms-1">  <i className="fab fa-google-plus-g"></i></button>
               
               
                </Col>
            </Row>
            <p className="text-center py-3 fs-5 mb-0 border-top">Copyright &copy; Smile Cure ,2021</p>
        </div>
    );
};

export default Footer;