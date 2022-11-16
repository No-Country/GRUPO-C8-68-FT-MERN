import { Card } from "../card/card";
import { CardGridContainer, CardGridSlideshow, CardGridTitle } from "./styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { dataGames } from "../../data";

export const CardGrid = ({ title }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };


  return (
    <CardGridContainer>
      <CardGridTitle>{title}</CardGridTitle>
        <CardGridSlideshow>
      <Slider {...settings}>
          {dataGames.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              img={item.linkImg}
            />
          ))}
      </Slider>
        </CardGridSlideshow>
    </CardGridContainer>
  );
};
