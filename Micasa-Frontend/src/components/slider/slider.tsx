


const [SliderIndex, setSliderIndex] = useState(0);
const SliderImages = [Sliderimage1, Sliderimage2, Sliderimage3];

function forwardSlider() {
  if (SliderIndex === SliderImages.length - 1) {
    setSliderIndex(0);
    else {
      setSliderIndex(SliderIndex + 1);
    }

    function backSlider() {
      if (SliderIndex === 0) {
        setSliderIndex(SliderImages.length - 1);
      } else {
        setSliderIndex(SliderIndex - 1);
      }
    }

export function Slider() {
  return (
    <figure>
        <img src={SliderImages[SliderIndex]} alt="" />
<figcaption>
    <button onClick={backSlider}>Previous</button>
    <button onClick={forwardSlider}>Next</button>
</figcaption>
    </figure>
  );
}