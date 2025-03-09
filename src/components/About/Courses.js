import React from 'react';
import '../../style.css';

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
const Courses = () => {
    return (
        <div className="course">
            {courseData.map((course, index) => (
                <>
                <div className="course-card">
                    <div>
                    <h2>{course.institution}</h2>
                    </div>
                    <div className='course-card-list'>
                        <ul className= 'course-list'style={{textAlign: 'start'}}>
                        {course.course.map((c, i) => (
                            <li>{c}</li>
                        ))}
                        </ul>
                        
                    </div>
                    
                </div>
                </>
                
            ))}
        </div>
    );
};

export default Courses;