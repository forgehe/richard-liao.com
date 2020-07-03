import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./carosel.scss";

export default function Carosel(props) {
  const {
    images,
    visibleSlides,
    naturalSlideHeight,
    naturalSlideWidth,
    className,
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
  return (
    <CarouselProvider
      className={`${className} carosel`}
      visibleSlides={visibleSlides || 1}
      totalSlides={images.length}
      naturalSlideWidth={naturalSlideWidth || 16}
      naturalSlideHeight={naturalSlideHeight || 9}
      isPlaying
      // isIntrinsicHeight
    >
      <Slider className="carosel__slider">{genCaroselItems(images)}</Slider>
      <ButtonBack className="carosel__btn__back">Back</ButtonBack>
      <ButtonNext className="carosel__btn__next">Next</ButtonNext>
      <DotGroup className="carosel__btn__dotgroup" dotNumbers={false} />
    </CarouselProvider>
  );
}
