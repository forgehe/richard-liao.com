import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./carosel.scss";
import "./css/fontello.css";

export default function Carosel(props) {
  const {
    images,
    visibleSlides,
    naturalSlideHeight,
    naturalSlideWidth,
    className,
    dragStep,
    step,
  } = props;
  console.log(props);

  const genCaroselItems = (images) => {
    return images.map((imageURL, index) => {
      return (
        <Slide index={index} key={index}>
          <Image className="carosel__image" src={imageURL} />
        </Slide>
      );
    });
  };
  const genCaroselDots = (images) => {
    return images.map((imageURL, index) => {
      return (
        <Dot
          slide={index}
          key={index}
          children={<i className="icon-circle-empty"></i>}
        />
      );
    });
  };

  return (
    <CarouselProvider
      className={`${className} carosel`}
      visibleSlides={visibleSlides || 1}
      totalSlides={images.length}
      naturalSlideWidth={naturalSlideWidth || 16}
      naturalSlideHeight={naturalSlideHeight || 9}
      dragStep={dragStep || 1}
      step={step || 1}
      isPlaying
      infinite
      // isIntrinsicHeight
    >
      <ButtonBack className="carosel__btn carosel__btn__back">
        <i class="icon-left-open"></i>
      </ButtonBack>
      <ButtonNext className="carosel__btn carosel__btn__next">
        <i class="icon-right-open"></i>
      </ButtonNext>
      <Slider className="carosel__slider">{genCaroselItems(images)}</Slider>
      <div className="carosel__btn__dotgroup">{genCaroselDots(images)}</div>
    </CarouselProvider>
  );
}
