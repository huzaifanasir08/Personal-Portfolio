import { useState } from 'react';
import '../../style.css';
import Particle from '../Particle.js';
import github from '../../Assets/github.png';
// import linkedin from '../../Assets/linkedin.png';
import email from '../../Assets/email.png';
import phone from '../../Assets/phone.png';
import whatsapp from '../../Assets/whatsapp.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<script src="https://web3forms.com/client/script.js" async defer></script>
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Sending message...");
        setIsLoading(true);

        // Build Web3Forms payload
        const payload = {
            access_key: "20fdc1a4-75ea-4f82-ae24-8a65210faba2", // your Web3Forms access key
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            const json = await response.json();

            if (response.status === 200) {
                toast.update(toastId, {
                    render: "Message sent successfully!",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                });
                clearForm();
            } else {
                console.error("Submission error:", json);
                toast.update(toastId, {
                    render: json.message || "Form submission failed.",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error("Error:", error);
            toast.update(toastId, {
                render: "Something went wrong while submitting.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
        } finally {
            setIsLoading(false);
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
                        <form
                            className="contact-form"
                            style={{ textAlign: "left", color: "white" }}
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    value={formData.subject}
                                    onChange={handleChange}
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={handleChange}
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <div className="h-captcha" data-captcha="true"></div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                style={{
                                    backgroundColor: isLoading
                                        ? "#888"
                                        : "rgb(225 225 225)",
                                    color: "rgb(11 11 29)",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    border: "none",
                                    cursor: isLoading ? "not-allowed" : "pointer",
                                }}
                            >
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="info top-left-in">
                        <div id="phone">
                            <div className="info-item">
                                <img src={phone} alt="Phone" />
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="tel:03201511248"
                                >
                                    03201511248
                                </a>
                            </div>
                        </div>
                        <div id="whatsapp">
                            <div className="info-item">
                                <img src={whatsapp} alt="WhatsApp" />
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://wa.me/923201511248"
                                >
                                    03201511248
                                </a>
                            </div>
                        </div>
                        <div id="email">
                            <div className="info-item">
                                <img src={email} alt="Email" />
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="mailto:huzaifanasirbutt@gmail.com"
                                >
                                    huzaifanasirbutt@gmail.com
                                </a>
                            </div>
                        </div>
                        {/* <div id="linkedin">
                            <div className="info-item">
                                <img src={linkedin} alt="LinkedIn" />
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/muhammad-huzaifa-nasir"
                                >
                                    Huzaifa Nasir
                                </a>
                            </div>
                        </div> */}
                        <div id="gitHub">
                            <div className="info-item">
                                <img src={github} alt="GitHub" />
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/huzaifanasir08"
                                >
                                    Huzaifa Nasir
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Toast Notifications */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
            />
        </section>
    );
};

export default Contact;
