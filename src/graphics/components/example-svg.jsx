import React from 'react';
import './example-svg.scss';

const ExampleSvg = ({width, height, pointsAmount}) => {
  const styles = { backgroundColor: '#FFFFFF'};
  const points = Array.apply(null, Array(pointsAmount));

  return <div>
    <h2>Example SVG</h2>

    <svg width={width} height={height} style={styles}>
      { points.map( (point, i) =>
        <circle key={i}
          cx={Math.random() * width}
          cy={Math.random() * height}
          r={Math.random() * 20}
          style={{
            stroke: 'orange',
            fill: `hsl(${Math.random()}turn 20% 40%)`
          }}
        />

      )}
    </svg>
  </div>
};

export default ExampleSvg;
