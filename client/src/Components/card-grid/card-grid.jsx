import { Card } from '../card/card'
import { CardGridContainer, CardGridSlideshow, CardGridTitle } from './styles'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Spinner } from '../spinner/spinner'

export const CardGrid = ({ title, bestSellers, loading }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 759,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <CardGridContainer>
      <CardGridTitle>{title}</CardGridTitle>
      {loading ? (
        <Spinner />
      ) : (
        <CardGridSlideshow>
          <Slider {...settings}>
            {bestSellers.map((item) => (
              <Card
                key={item.id}
                title={item.name}
                price={item.price}
                img={item.background_image}
                id={item.id}
              />
            ))}
          </Slider>
        </CardGridSlideshow>
      )}
    </CardGridContainer>
  )
}
