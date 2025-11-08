
const experiences = [
    {
        company: 'Company A',
        role: 'Software Engineer',
        duration: 'Jan 2020 - Present',
        description: 'Worked on developing and maintaining web applications.'
    },
    {
        company: 'Company B',
        role: 'Frontend Developer',
        duration: 'Jun 2018 - Dec 2019',
        description: 'Focused on creating responsive and user-friendly interfaces.'
    }
];

const Experience = () => {
    return (
        <div>
            <h2>Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index} className="experience">
                    <h3>{experience.company}</h3>
                    <h4>{experience.role}</h4>
                    <p>{experience.duration}</p>
                    <p>{experience.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Experience;