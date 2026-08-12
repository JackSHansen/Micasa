"use client";
import { useState } from "react";
import sliderImage1 from "../../assets/sliderimages/apartment-1.jpg";
import sliderImage2 from "../../assets/sliderimages/apartment-2.jpg";
import sliderImage3 from "../../assets/sliderimages/apartment-3.jpg";
import styles from "./slider.module.scss";

const SliderImages = [sliderImage1, sliderImage2, sliderImage3];

export function Slider() {
  const [sliderIndex, setSliderIndex] = useState(0);

  function forwardSlider() {
    setSliderIndex((currentIndex) => (currentIndex + 1) % SliderImages.length);
  }

  function backSlider() {
    setSliderIndex((currentIndex) =>
      currentIndex === 0 ? SliderImages.length - 1 : currentIndex - 1,
    );
  }

  return (
    <figure className={styles.sliderstyle}>
      <img src={SliderImages[sliderIndex].src} />
      <figcaption>
        <button onClick={backSlider}>Previous</button>
        <button onClick={forwardSlider}>Next</button>
      </figcaption>
    </figure>
  );
}