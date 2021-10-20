import React from 'react';
import useDoctors from '../../Hooks/useDoctors';
import { Row } from 'react-bootstrap';
import Dentist from './Dentist';

const Dentists = () => {
    const [doctors] = useDoctors();
    return (
        <div>
              <img className="w-100 " style={{ height: "500px" }} src="https://img.freepik.com/free-photo/doctor-crossing-arms-while-holding-stethoscope-white-coat_176474-8491.jpg" alt="" />
            <div className="container my-5">

                {/* Services Section */}
                <h1 className="text-center fw-bold mt-5 pt-5">Our Team</h1>
                <Row xs={1} md={3} className="g-4 m-5 ">

                    {
                        doctors.map(doctor => <Dentist
                            key={doctor.id}
                            dentist={doctor}
                        ></Dentist>

                        )
                    }
                </Row>
            </div>
        </div>

    );
};

export default Dentists;