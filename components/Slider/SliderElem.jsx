import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import style from './SliderElem.module.css'
import Carousel from 'react-bootstrap/Carousel';


export function SliderMode() {
  return (
    <div className="slider-container"> 
    <Carousel>
      <Carousel.Item>
        <img src="./1.jpg" className="ty" />
        <Carousel.Caption>
        <h3 className="q">Начни играть сегодня!</h3>
        <p className="w">Огромный выбор музыкальных инструментов только у нас!</p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
      <img src="./123.jpg"  className="ty"/>
        <Carousel.Caption>
        <h3 className="q">Найди себя и свой инструмент!</h3>
        <p className="w">Огромный выбор музыкальных инструментов только у нас!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="./67.jpg"  className="ty"/>
        <Carousel.Caption>
          <h3 className="q">Найди свою мелодию!</h3>
          <p className="w">Огромный выбор музыкальных инструментов только у нас!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}


