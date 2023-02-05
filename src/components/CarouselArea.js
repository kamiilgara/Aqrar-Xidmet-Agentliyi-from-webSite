import React from 'react';
import Carousel from 'react-multi-carousel';

function CarouselArea({ projects }) {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1480 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1480, min: 1050 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 1050, min: 0 },
      items: 1,
      slidesToSlide: 1
    },
  };

  return (
    <div className='py-5 mb-5 trackc'>
      <Carousel responsive={responsive} className='container' infinite={true} swipeable={true} renderArrowsWhenDisabled removeArrowOnDeviceType={["tablet", "mobile"]} >
        {projects.map((project) =>
          <a href='/' key={project.id} className='main-carousel-item mx-auto'>
            <img src={project.symbol} alt='/' className='d-block mx-auto' height={'37.99px'} />
            <p>{project.head}</p>
          </a>
        )}
      </Carousel>
    </div>
  )
}

export default CarouselArea
