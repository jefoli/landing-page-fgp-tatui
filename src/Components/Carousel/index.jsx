/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card } from '../Card';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import * as Styled from './styles';

export const Carousel = ({ cardTitles, months, hours, price, subscribe }) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        >
          <Card
            title={title.courseName}
            months={months}
            hours={hours}
            price={price}
            to={title.image}
            subscribe={subscribe}
            summaryText={title.summaryText}
          />
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
