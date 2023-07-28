import React, { useState, useEffect } from 'react';

const Slideshow2 = ({ interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageUrls = [
    'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-3735709.jpg&fm=jpg',
    'https://cdn.labmanager.com/assets/articleNo/28148/aImg/50928/june22-bm-optimizing-ehs-1800x900-s.jpg',
    // Add more image URLs here
  ];

  useEffect(() => {
    const nextSlide = (currentSlide + 1) % imageUrls.length;
    const slideInterval = setInterval(() => {
      setCurrentSlide(nextSlide);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentSlide, imageUrls.length, interval]);

  const handleBack = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + imageUrls.length) % imageUrls.length);
  };

  const handleForward = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageUrls.length);
  };

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={handleBack} style={arrowButtonStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <div style={{ width: '70%', height: '70%', position: 'relative' }}>
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Slide ${index + 1}`}
            style={{
              display: index === currentSlide ? 'block' : 'none',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
      <button onClick={handleForward} style={arrowButtonStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
    </div>
  );
};

const arrowButtonStyle = {
  backgroundColor: '#0a3394',
  border: 'none',
  cursor: 'pointer',
  zIndex: 1,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
};

export default Slideshow2;
