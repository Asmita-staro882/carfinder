import React from "react";
import "./OurGoals.css";
import imgA from "../../images/img1.1.jpg";
import imgB from "../../images/img2.2.jpg";
import imgC from "../../images/img3.1.jpg";
import imgD from "../../images/img4.1.jpg";

const goalsData = [
  {
    title: "Promote Direct Customer Car",
    description:
      "Enable buyers and sellers to connect directly on our platform, carfinder.co.in.",
    image: imgA, 
  },
  {
    title: "Streamline Posting And Browsing",
    description:
      "Simplify the process for users to post their vehicles and requirements.",
    image: imgB, 
  },
  {
    title: "Optimise User Experience",
    description:
      "Continuously improve platform features to ensure intuitive and seamless use.",
    image: imgC, 
  },
  {
    title: "Provide Valuable Tools And Resources",
    description:
      "Assist users with tools like vehicle history reports for informed decisions.",
    image: imgD, 
  },
];

const OurGoals = () => {
  return (
    <div className="our-goals-section">
      <h2 className="section-title">What's Our Main Goal</h2>
      <div className="goals-grid">
        {goalsData.map((goal, index) => (
          <div className="goal-card" key={index}>
            <img src={goal.image} alt={goal.title} className="goal-image" />
            <div className="goal-content">
              <h3 className="goal-title">{goal.title}</h3>
              <p className="goal-description">{goal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGoals;
