import React, { useState, useEffect } from "react";
import { connectRange } from "react-instantsearch-dom";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import "./NumSlider.css";

export function formatNumber(value) {
  value = Math.floor(value);
  return Number(value).toLocaleString();
}

function Handle({
  domain: [min, max],
  handle: { id, value, percent },
  disabled,
  getHandleProps,
}) {
  return (
    <>
      {/* Dummy element to make the tooltip draggable */}
      <div
        style={{
          position: "absolute",
          left: `${percent}%`,
          width: 40,
          height: 25,
          transform: "translate(-50%, -100%)",
          cursor: disabled ? "not-allowed" : "grab",
          zIndex: 1,
        }}
        aria-hidden={true}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        className="slider-handle"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
          left: `${percent}%`,
          cursor: disabled ? "not-allowed" : "grab",
        }}
        {...getHandleProps(id)}
      />
    </>
  );
}

const NumSlider = ({ min, max, refine, currentRefinement, canRefine }) => {
  const [ticksValues, setTicksValues] = useState([
    currentRefinement.min,
    currentRefinement.max + 0.01,
  ]);

  useEffect(() => {
    setTicksValues([currentRefinement.min, currentRefinement.max + 0.01]);
  }, [currentRefinement]);

  const onChange = (values) => {
    //const maxValue = values[1] + 1;
    refine({ min: values[0], max: values[1] });
  };

  if (
    !canRefine ||
    ticksValues[0] === undefined ||
    ticksValues[1] === undefined
  ) {
    return null;
  }

  max = max + 0.01;

  return (
    <Slider
      mode={2}
      step={1}
      domain={[min, max]}
      values={[currentRefinement.min, currentRefinement.max]}
      disabled={!canRefine}
      onChange={onChange}
      onUpdate={setTicksValues}
      rootStyle={{ position: "relative", marginTop: "1.5rem" }}
      className="ais-RangeSlider"
    >
      <Rail>
        {({ getRailProps }) => (
          <div className="slider-rail" {...getRailProps()} />
        )}
      </Rail>

      <Tracks left={false} right={false}>
        {({ tracks, getTrackProps }) => (
          <div>
            {tracks.map(({ id, source, target }) => (
              <div
                key={id}
                className="slider-track"
                style={{
                  left: `${source.percent}%`,
                  width: `${target.percent - source.percent}%`,
                }}
                {...getTrackProps()}
              />
            ))}
          </div>
        )}
      </Tracks>

      <Handles>
        {({ handles, getHandleProps }) => (
          <div>
            {handles.map((handle) => (
              <Handle
                key={handle.id}
                handle={handle}
                domain={[min, max]}
                getHandleProps={getHandleProps}
              />
            ))}
          </div>
        )}
      </Handles>

      <Ticks values={ticksValues}>
        {({ ticks }) => (
          <div>
            {ticks.map(({ id, count, value, percent }, index) => (
              <div
                key={id}
                className="slider-tick"
                style={{
                  width: `${100 / count}%`,
                  left: `${percent}%`,
                  transform:
                    index === 0 ? "translateX(-0%)" : "translateX(-100%)",
                }}
              >
                {formatNumber(value)}
                <span style={{ marginLeft: 4 }}>mm</span>
              </div>
            ))}
          </div>
        )}
      </Ticks>
    </Slider>
  );
};

export default connectRange(NumSlider);
