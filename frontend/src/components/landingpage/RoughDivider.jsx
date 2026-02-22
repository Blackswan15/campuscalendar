import React, { useEffect, useRef } from 'react';
import rough from 'roughjs';

function RoughDivider() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    svg.innerHTML = '';
    const rc = rough.svg(svg);
    const width = svg.parentElement.offsetWidth;

    // Build continuous zigzag points
    let points = [];
    let x = 0;
    const amplitude = 30;   // vertical height of zigzag
    const step = 24;        // horizontal spacing

    while (x <= width) {
      points.push([x, 0]);          // bottom point
      points.push([x + step / 2, amplitude]); // top point
      x += step;
    }

    // Draw zigzag line
    const line = rc.linearPath(points, {
      stroke: '#ffffff',
      strokeWidth: 2,
      roughness: 1.2
    });
    svg.appendChild(line);

    // Optional center dot
    const dot = rc.circle(width / 2, amplitude / 2, 10, {
      fill: '#ffffff',
      fillStyle: 'solid',
      stroke: '#ffffff',
      strokeWidth: 1
    });
    svg.appendChild(dot);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        margin: '20px auto',
        overflow: 'hidden'
      }}
    >
      <svg ref={svgRef} width="100%" height="40"></svg>
    </div>
  );
}

export default RoughDivider;