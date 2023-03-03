import { useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import CarouselItem from "./CarouselItem";

function SpeakerCarousel({ data }) {
  const [active, useActive] = useState(2);

  // Index calculation logic
  const indexCalculator = (value) => {
    if (value < 0) {
      return data.length - 1;
    } else if (value > data.length - 1) {
      return 0;
    } else {
      return value;
    }
  }

  const BackButton = () => {
    useActive(prevState => indexCalculator(prevState + 1)
    )
  }

  const ForwardButton = () => {
    useActive(prevState => indexCalculator(prevState - 1)
    )
  }


  function hoverCarouselHandler(event) {
    const parent = event.target.closest('.carousel-item');
    if (parent) {
      const parentHoverElement = parent.children[1];
      parentHoverElement.style.display = this;
    }
  }

  return (<div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4" onMouseOver={hoverCarouselHandler.bind("flex")}
    onMouseOut={hoverCarouselHandler.bind("none")}
  >

    <IoIosArrowBack onClick={BackButton} className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-extralight text-white hover:-translate-x-0.5  transition-all duration-300 active:scale-90 active:bg-blue-300 active:rounded-full" ></IoIosArrowBack>

    <CarouselItem speaker={data[indexCalculator(active - 1)]} dim={'small'}></CarouselItem>
    <CarouselItem speaker={data[active]} dim={"large"}></CarouselItem>
    <CarouselItem speaker={data[indexCalculator(active + 1)]} dim={"small"}></CarouselItem>

    <IoIosArrowForward onClick={ForwardButton} className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-extralight text-white hover:-translate-x-0.5  transition-all duration-300 active:scale-90 active:bg-blue-300 active:rounded-full "></IoIosArrowForward>

  </div>)
}

export default SpeakerCarousel;