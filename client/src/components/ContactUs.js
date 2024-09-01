import React from 'react';
import './ContactUs.css';
import { FaAcquisitionsIncorporated, FaAlignCenter } from 'react-icons/fa';

function ContactUs() {
    return (
            <div className='ContactUs' id='ContactUs'>
                <div className="container">
                    <h2>Contact Us</h2>
                    <span className='line'></span>

                    <div className="content">
                        <div className='card'>
                            <h3>Placement Head</h3>
                            <p><span>Dr. PRATHIMA TIRUMALAREDDY</span></p>
                            <p>Phone: +91 94410 44722</p>
                            <p>Email: tprathima_it@cbit.ac.in</p>
                        </div>
                        <div className='card'>
                            <h3>Address</h3>
                            <p> Osmania Sagar Rd, Kokapet, Gandipet, Hyderabad, Telangana 500075</p>
                            <p>Phone: +91-040-24193276</p>
                            <p>Email: placements@cbit.ac.in</p>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4228384778853!2d78.31698292378996!3d17.391484002689836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94eba8ad7c87%3A0xb78f51ed556f7cc5!2sChaitanya%20Bharathi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1699596417112!5m2!1sen!2sin" width="1200" height="450" ></iframe>
                    <div id="map"></div>
                </div>
                
            </div>
            
    );
}

export default ContactUs;