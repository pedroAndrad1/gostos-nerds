/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 50px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }

  .slick-slide {
    transition: .8s;
  }
  .slick-slide:hover {
    transform: scale(1.1);
    margin: 0 2em;
    
  }


  


`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
    <Container>
        <SlickSlider {...{
            dots: false,
            infinite: true,
            speed: 300,
            centerMode: false,
            variableWidth: true,
            adaptiveHeight: true,
            accessibility: true,
            swipeToSlide: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1,
                  swipeToSlide: true,
                }
              },
            ]
        }}
        >
            {children}
        </SlickSlider>
    </Container>
);

export default Slider; 