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
  const { images } = props;
  console.log(props);

  const genCaroselItems = (images) => {
    return images.map((imageURL, index) => {
      return (
        <Slide index={index}>
          <Image className="carosel-image" src={imageURL} />
        </Slide>
      );
    });
  };
  return (
    <CarouselProvider
      className="carosel"
      visibleSlides={1}
      totalSlides={images.length}
      naturalSlideWidth={16}
      naturalSlideHeight={9}
      isPlaying
      // isIntrinsicHeight
    >
      <Slider className="carosel-slider">{genCaroselItems(images)}</Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
      <DotGroup dotNumbers />
    </CarouselProvider>
  );
}
