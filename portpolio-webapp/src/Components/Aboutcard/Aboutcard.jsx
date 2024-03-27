import React, { useState } from 'react';
import './Aboutcard.css';

export default function AboutCard() {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={`about-card ${expanded ? 'expanded' : ''}`}>
        <h3 className='about-heading'>
          About
        </h3>
        <p className={`description ${expanded ? 'expanded' : ''}`}>
          I love cool tech stuff that could change people's life in a good way. With a website and software development background, I also diving into. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos fuga inventore quibusdam doloremque cumque exercitationem cum ex voluptas quia voluptatum, obcaecati eaque id praesentium, maxime officiis eligendi odit magnam fugit.
        </p>
        <button onClick={toggleDescription}>
          {expanded ? 'See Less' : 'See More'}
        </button>
        <div className="about-media-links">
          <a href=""> <img src="/icons/Link.png" className='link-icons' alt="" />buddhadebkoner.com</a>
          <div className="media-icons-links">
            <a href=""><img src="/icons/fb.png" alt="" /></a>
            <a href=""><img src="/icons/x.png" alt="" /></a>
            <a href=""><img src="/icons/linkedin.png" alt="" /></a>
          </div>
          <div className="about-tags">
            <p>Programer</p>
            <p>Engineer</p>
            <p>Tech&Science</p>
          </div>
        </div>

      </div>

    </>
  )
}
