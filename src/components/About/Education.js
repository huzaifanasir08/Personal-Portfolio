import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import "../../style.css";

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
        year: '2019',
    },
];

const Education = () => {
    return (
        <div className="education">
            {educationData.map((edu, index) => (
                <>
                <div className="education-card">
                    <h4>{edu.institution}</h4>
                    <h6>{edu.degree}</h6>
                    <h6>{edu.year}</h6>
                </div>
                </>
                
            ))}
        </div>
    );
};

export default Education;