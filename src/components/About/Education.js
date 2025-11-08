import { useState, useEffect } from 'react';
import axios from "axios";
import "../../style.css";

const Education = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const educationData = [
        {
            institution: 'University of Sialkot',
            degree: 'Bachelor of Science in Software Engineering',
            year: '2021 - 2025',
        },
        {
            institution: 'Superior Group of Colleges',
            degree: 'F.Sc Pre - Engineering',
            year: '2019 - 2021',
        },
        {
            institution: 'Danish Public High School',
            degree: 'Matriculation',
            year: 'Not Available',
        }
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://huzaifanasir.pythonanywhere.com/educations");
                setData(response.data['educations']);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); // Stop loading after fetching
            }
        };

        fetchData();
    }, []);

    return (
        <div className="education">
            {loading ? (
                // Display mock data while loading
                educationData.map((education, index) => (
                    <div key={index} className="education-card">
                        <h4>{education.institution}</h4>
                        <h6>{education.degree}</h6>
                        <h6>{education.year}</h6>
                    </div>
                ))
            ) : (
                // Display API data after loading is complete
                data.length > 0 ? (
                    data.map((edu, index) => (
                        <div key={index} className="education-card">
                            <h4>{edu.institution}</h4>
                            <h6>{edu.degree}</h6>
                            <h6>{edu.year}</h6>
                        </div>
                    ))
                ) : (
                    // If the API returns no data, fallback to the mock data
                    educationData.map((education, index) => (
                        <div key={index} className="education-card">
                            <h4>{education.institution}</h4>
                            <h6>{education.degree}</h6>
                            <h6>{education.year}</h6>
                        </div>
                    ))
                )
            )}
        </div>
    );
};

export default Education;
