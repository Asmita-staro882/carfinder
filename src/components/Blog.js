import React, { useState } from 'react';
import './Blog.css';
import Img1 from '../images/img1.jpg';
import Img2 from '../images/img2.jpg';
import Img3 from '../images/img3.jpg';
import Img4 from '../images/img4.jpg';

const BlogSection = () => {
  const tabs = ['All Blogs', 'Car Buying Tips', 'Selling Advice', 'Market Insights'];
  const [activeTab, setActiveTab] = useState(0);

  const blogs = [
    {
      image: Img1,
      title: 'Advantages of Offering Your Vehicle to an End Client',
      description: 'Here’s the reason selling straightforwardly to the end client...',
      date: 'Nov 19th 24',
    },
    {
      image: Img2,
      title: 'The Advantages of Buying Pre-Owned Cars: Cost, Depreciation...',
      description: 'From cost savings to reduced depreciation, purchasing a...',
      date: 'Nov 19th 24',
    },
    {
      image: Img3,
      title: 'Navigating Car Buying: A Guide for First-Time Buyers',
      description: 'Buying a car is a significant investment...',
      date: 'Nov 19th 24',
    },
    {
      image: Img4,
      title: 'Next Step: A Guide for Experienced Buyers',
      description: 'It’s essential to...',
      date: 'Nov 19th 24',
    },
  ];

  return (
    <div className="blog-section-container">
      <h2 className="section-title">Blogs</h2>

      
      <div className="tabs-section">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTab ? 'active-tab' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      
      <div className="blog-list-wrapper">
        <div className="blog-list">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <p className="blog-date">{blog.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
