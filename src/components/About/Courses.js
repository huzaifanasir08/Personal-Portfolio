import { React, useState, useEffect } from 'react';
import axios from "axios";
import "../../style.css";

const Courses = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const courseData = [
        {
            institution: 'Coursera Project Network',
            course: ['HTML, CSS in Depth', 'JavaScript Pro with 7 Skills', 'Learn React.JS', 'CSS Animated Components with React.JS', 'Build Websites Using React.JS', 'Advance Python', 'AI For Everyone by DeepLearning'],
        },
        {
            institution: 'Other Platforms',
            course: ['Intro to HTML, CSS, JS', 'Django Full Stack Web Development', 'Development on Django Framework', 'Desktop Application Development with C# ASP.net'],
        }
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://huzaifanasir.pythonanywhere.com/courses");
                setData(response.data['courses']);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); // Stop loading after fetching
            }
        };

        fetchData();
    }, []);


    return (
        <div className="course">
            {loading ? (
                courseData.map((course, index) => (
                    <>
                        <div className="course-card">
                            <div>
                                <h2>{course.institution}</h2>
                            </div>
                            <div className='course-card-list'>
                                <ul className='course-list' style={{ textAlign: 'start' }}>
                                    {course.course.map((c, i) => (
                                        <li>{c}</li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                    </>

                ))
            ) : (
                data.length > 0 ? (
                    data.map((course, index) => (
                        <div key={index} className="course-card">
                            <div>
                            <h2>{course.institution}</h2>
                            </div>
                            <div className='course-card-list'  style={{ textAlign: 'start' }}>                     
                            <ul className='course-list'>
                                {course.coursesList.map((c, i) => (
                                    <li>{c}</li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    courseData.map((course, index) => (
                        <>
                            <div className="course-card">
                                <div>
                                    <h2>{course.institution}</h2>
                                </div>
                                <div className='course-card-list'>
                                    <ul className='course-list' style={{ textAlign: 'start' }}>
                                        {course.course.map((c, i) => (
                                            <li>{c}</li>
                                        ))}
                                    </ul>
    
                                </div>
    
                            </div>
                        </>
    
                    ))
                )
            )}
        </div>
    );
};

export default Courses;