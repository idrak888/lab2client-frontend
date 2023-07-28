import { useState, useEffect } from 'react';

const Slideshow = ({ data, interval = 30000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const imageUrls = data.map(item => item.imageUrl);
    setPictures(imageUrls);

    const timer = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % imageUrls.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [data, interval]);

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % pictures.length);
  };

  const previousSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="slideshow-container">
      <button className="previous-button" onClick={previousSlide}>&lt;</button>
      <img src={pictures[currentSlide]} alt="Slideshow Image" />
      <button className="next-button" onClick={nextSlide}>&gt;</button>
      <style jsx>{`
        .slideshow-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 0;
          padding-top: 40%; 
          position: relative;
          width: 100vw; /* Width of the screen */
          max-width: 100%;
          overflow: hidden;
        }

        .previous-button,
        .next-button {
          font-size: 24px;
          padding: 8px 12px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          position: absolute;
          top: 50%;
          color: white;
        }

        .previous-button {
          left: 10px;
          transform: translateY(-50%);
        }

        .next-button {
          right: 10px;
          transform: translateY(-50%);
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};


export default Slideshow;
