import React, { useState, useEffect } from 'react';

const Slideshow2 = ({ interval = 50000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define the image URLs here
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Slide ${index + 1}`}
          style={{
            display: index === currentSlide ? 'block' : 'none',
            width: '70%',
            height: '70%',
            
          }}
        />
      ))}
      

    </div>
  );
};



const arrowButtonStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#fff',
  zIndex: 1,
};

export default Slideshow2;
