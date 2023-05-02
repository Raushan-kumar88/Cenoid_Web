import React, { useState, useEffect } from 'react';
import './ImageSlider.css'

function ImageSlider({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentSlide, images.length]);

    return (
        <div className="slider-container">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 10}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;
