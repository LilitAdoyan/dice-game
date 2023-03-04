import { useState } from "react";
import ReactSlider from "react-slider";
import "./index.css";

const Slider = ({currentValue, setCurrentValue, modeUnder}:any) => {

  return (
    <ReactSlider
      className="customSlider"
      thumbClassName={`${modeUnder?'customSlider-thumb-under':'customSlider-thumb-over'}`}
      trackClassName={`${modeUnder?'customSlider-track-under':'customSlider-track-over'} `}
      markClassName="customSlider-mark"
      marks={25}
      min={0}
      max={100}
      value={currentValue}
      onChange={(value) => {
        setCurrentValue(value)}}
      renderMark={(props:any) => {
        if (props.key < currentValue) {
            props.className = `customSlider-mark ${modeUnder?'customSlider-mark-under-before':'customSlider-mark-over-before'}`;
        } else if (props.key === currentValue) {
            props.className = `customSlider-mark customSlider-mark-active`;
        }
        return <span {...props} />;
      }}
    />
  );
};

export default Slider;
