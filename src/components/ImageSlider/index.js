import React, {useState} from "react";
import styles from "./index.module.css";

const ImageSlider = ({leftImage, rightImage}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (event) => {
    setSliderPosition(event.target.value);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.imageWrapper} style={{clipPath: `inset(0 0 0 ${sliderPosition}%)`}}>
        <img src={leftImage} alt="Left" className={styles.image}/>
      </div>
      <div className={styles.imageWrapper}>
        <img src={rightImage} alt="Right" className={styles.image}/>
      </div>
      <input type="range" min="0" max="100" value={sliderPosition} onChange={handleSliderChange}
             className={styles.slider}/>
    </div>
  );
};

export default ImageSlider;