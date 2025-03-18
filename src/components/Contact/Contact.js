import React, { useState } from 'react';
import '../../style.css';
import Particle from '../Particle.js';
import { Link } from 'react-router-dom';
import github from '../../Assets/github.png';
import linkedin from '../../Assets/linkedin.png';
import email from '../../Assets/email.png';
import phone from '../../Assets/phone.png';
import whatsapp from '../../Assets/whatsapp.png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import toast styles

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const clearForm = () => {
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    const clicked = () => {
        console.log("clicked");
    }
const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message..."); // Show loading toast

    try {
        const response = await axios.post("https://huzaifanasir.pythonanywhere.com/contact/", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("Response:", response.data);

        toast.update(toastId, { 
            render: "Message sent successfully!", 
            type: "success", 
            isLoading: false, 
            autoClose: 3000 
        }); // Update toast on success

        clearForm();
    } catch (error) {
        console.error("Error submitting form:", error);

        toast.update(toastId, { 
            render: "Message sending failed.", 
            type: "error", 
            isLoading: false, 
            autoClose: 3000 
        }); // Update toast on failure
    }
};


    return (
        <section id="contact-sector">
            <Particle />
            <div className="contact-section">
            <h1>
            
            Need Help? <strong className="purple">Ask Me</strong>
            </h1>
                <div id="contact-box">
                    <div className="contact-container">
                    {/* onSubmit={handleSubmit} */}
                        <form className="contact-form" style={{ textAlign: 'left', color: 'white' }} >
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input value={formData.subject} onChange={handleChange} type="text" id="subject" name="subject" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea value={formData.message} onChange={handleChange} id="message" name="message" rows="5" required></textarea>
                            </div>
                            {/* onClick={handleSubmit} className="disabled"  */}
                            <button className="disabled" type='submit'>
                                <Link to={"/contact"} style={{textDecoration:"blink", color:"rgb(11 10 69)"}}>Coming Soon</Link>                                         
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="info top-left-in">
                        <div id="phone">
                            <div className="info-item">
                                <img src={phone} alt="Phone" />
                                <a target="_blank" rel="noopener noreferrer" href="tel:03201511248">03201511248</a>
                            </div>
                        </div>
                        <div id="whatsapp">
                            <div className="info-item">
                                <img src={whatsapp} alt="WhatsApp" />
                                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/923201511248">03201511248</a>
                            </div>
                        </div>
                        <div id="email">
                            <div className="info-item">
                                <img src={email} alt="Email" />
                                <a target="_blank" rel="noopener noreferrer" href="mailto:huzaifanasirbutt@gmail.com">huzaifanasirbutt@gmail.com</a>
                            </div>
                        </div>
                        <div id="linkedin">
                            <div className="info-item">
                                <img src={linkedin} alt="LinkedIn" />
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muhammad-huzaifa-nasir/">Huzaifa Nasir</a>
                            </div>
                        </div>
                        <div id="gitHub">
                            <div className="info-item">
                                <img src={github} alt="GitHub" />
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/huzaifanasir08">Huzaifa Nasir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Toast Notifications */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </section>
    );
};

export default Contact;
