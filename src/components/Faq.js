import React, { useState } from "react";
import "./FAQ.css";
import faqHeaderImage from "../images/faq.jpg"; 

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What should I consider when buying a used car?",
      answer:
        "When buying a used car, consider factors such as the car's condition, mileage, history report, and maintenance records.",
    },
    {
      question: "How often should I service my car?",
      answer: "Every 6 months or 10,000 km, whichever comes first.",
    },
    {
      question: "How can I improve my car fuel efficiency?",
      answer: "Drive smoothly and maintain tire pressure.",
    },
    {
      question: "How do I know if my brakes need to be replaced?",
      answer: "Look for squealing or grinding noises.",
    },
    {
      question: "Can I trade in my old car?",
      answer: "Yes, CarFinder offers trade-in options.",
    },
    {
      question: "What is this website about?",
      answer:
        "CarFinder connects buyers and sellers for car transactions, providing detailed service histories and tailored car buying experiences.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      {/* Header Image with "FAQ" Text */}
      <div className="faq-header">
        <img src={faqHeaderImage} alt="FAQ Header" className="faq-header-image" />
        <h1 className="faq-header-text">FAQ</h1>
      </div>

      {/* Accordion Section */}
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
