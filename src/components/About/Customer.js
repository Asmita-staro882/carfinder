import React from "react";
import "./Customer.css";
import customer1 from "../../images/customer1.jpg";
import customer2 from "../../images/customer2.jpg";
import customer3 from "../../images/customer3.jpg";
import customer4 from "../../images/customer4.jpg";

const testimonials = [
  {
    name: "Sanya Nikose",
    location: "Delhi",
    testimonial:
      "Vishal Sir made selling our Ford Endeavour efficient. The exposure was fantastic, and we closed the deal in no time. Great experience.",
    image: customer1,
  },
  {
    name: "Vikram Shah",
    location: "Mumbai",
    testimonial:
      "Partnering with Vahan Shree was a great decision for our dealership. We sold a pre-owned MG Hector quickly at a competitive price.",
    image: customer2,
  },
  {
    name: "Mr. Sharma",
    location: "UP",
    testimonial:
      "I had an amazing experience buying a pre-owned Nissan Terrano from Vahan Shree. The sale was professional, straightforward, and genuinely smooth.",
    image: customer3,
  },
  {
    name: "Ravi Kumar",
    location: "Pune",
    testimonial:
      "The platform's professionalism impressed me. I found my ideal pre-owned vehicle without a hitch!",
    image: customer4,
  },
];

const HappyCustomer = () => {
  return (
    <div className="customer-section">
      <h2 className="section-title">Our Happy Customers</h2>
      <div className="customer-wrapper">
        <div className="customer-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="customer-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="customer-image"
              />
              <h3 className="customer-name">
                {testimonial.name}, {testimonial.location}
              </h3>
              <p className="customer-description">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
