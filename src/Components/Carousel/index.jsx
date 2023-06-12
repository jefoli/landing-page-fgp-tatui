/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import * as Styled from './styles';

export const Carousel = ({ cardTitles }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [enableTouch, setEnableTouch] = useState(false);

  useEffect(() => {
    const handleTouch = () => {
      setEnableTouch(true);
      window.removeEventListener('touchstart', handleTouch);
    };

    return () => {
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cardTitles.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cardTitles.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Styled.CarouselWrapper>
      {cardTitles.map((title, index) => (
        <Styled.Slide
          key={index}
          className={index === activeIndex ? 'active' : ''}
          style={{ transform: `translateX(-${activeIndex * 50}%)` }}
          enableTouch={enableTouch}
        >
          <Card title={title} />
        </Styled.Slide>
      ))}

      <Styled.ButtonMenu>
        <Styled.Button onClick={handlePrevSlide}>
          <FaChevronCircleLeft />
        </Styled.Button>
        <Styled.Button onClick={handleNextSlide}>
          <FaChevronCircleRight />
        </Styled.Button>
      </Styled.ButtonMenu>
    </Styled.CarouselWrapper>
  );
};
