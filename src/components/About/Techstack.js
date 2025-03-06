import React, { useEffect } from 'react';
// import './Techstack.css'; // Make sure to create and import the corresponding CSS file

const Techstack = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.2 // Trigger when 20% of the progress bar is visible
    };

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const progress = progressBar.getAttribute("data-progress");
          progressBar.style.width = `${progress}%`;
          observer.unobserve(progressBar); // Stop observing once the animation is triggered
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersect, options);

    progressBars.forEach(progressBar => {
      observer.observe(progressBar);
    });
  }, []);

  return (
    <div className="skill-level">
      <div className="progress-container striped right-fade-z">
        <div className="progress-bar" style={{ width: '0%' }} data-progress="98">
          HTML, CSS, JS 98%
        </div>
      </div>
      <div className="progress-container striped right-fade-z">
        <div className="progress-bar" style={{ width: '0%' }} data-progress="95">
          React.JS 95%
        </div>
      </div>
      <div className="progress-container striped right-fade-z">
        <div className="progress-bar" style={{ width: '0%' }} data-progress="97">
          Python 97%
        </div>
      </div>
      <div className="progress-container striped right-fade-z">
        <div className="progress-bar" style={{ width: '0%' }} data-progress="95">
          Django Rest Framework 95%
        </div>
      </div>
      <div className="progress-container striped right-fade-z">
        <div className="progress-bar" style={{ width: '0%' }} data-progress="50">
          Node.JS, Express.JS 50%
        </div>
      </div>
      <div className="progress-container striped right-fade-z">
        <div className="progress-bar" style={{ width: '0%' }} data-progress="65">
          ASP.Net 55%
        </div>
      </div>
      <div className="progress-container striped right-fade-z">
        <div className="progress-bar" style={{ width: '0%' }} data-progress="55">
          WordPress 55%
        </div>
      </div>
      <div className="progress-container striped right-fade-z" style={{ animationDelay: '1s' }}>
        <div className="progress-bar" style={{ width: '0%' }} data-progress="90">
          MongoDb 90%
        </div>
      </div>
      <div className="progress-container striped right-fade-z" style={{ animationDelay: '1s' }}>
        <div className="progress-bar" style={{ width: '0%' }} data-progress="90">
          Microsoft SQL 90%
        </div>
      </div>
      <div className="progress-container striped right-fade-z" style={{ animationDelay: '1s' }}>
        <div className="progress-bar" style={{ width: '0%' }} data-progress="95">
          MySQL 95%
        </div>
      </div>
    </div>
  );
};

export default Techstack;