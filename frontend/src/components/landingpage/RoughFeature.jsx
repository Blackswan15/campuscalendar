import React, { useEffect, useRef } from 'react';
import rough from 'roughjs';

function RoughBoard() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    svg.innerHTML = '';
    const rc = rough.svg(svg);

    // outer board
    svg.appendChild(rc.rectangle(5, 5, 290, 180, {
      stroke: '#fff', strokeWidth: 2, roughness: 2,
    }));

    // scribbled lines on the board
    svg.appendChild(rc.line(30, 50, 270, 50, {
      stroke: '#fff', strokeWidth: 1.2, roughness: 2.5,
    }));
    svg.appendChild(rc.line(30, 90, 250, 90, {
      stroke: '#fff', strokeWidth: 1.2, roughness: 2.5,
    }));
    svg.appendChild(rc.line(30, 130, 260, 130, {
      stroke: '#fff', strokeWidth: 1.2, roughness: 2.5,
    }));

    // small circle bullet
    svg.appendChild(rc.circle(20, 50, 8, {
      stroke: '#fff', strokeWidth: 1.5, roughness: 1,
    }));
    svg.appendChild(rc.circle(20, 90, 8, {
      stroke: '#fff', strokeWidth: 1.5, roughness: 1,
    }));
    svg.appendChild(rc.circle(20, 130, 8, {
      stroke: '#fff', strokeWidth: 1.5, roughness: 1,
    }));
  }, []);

  return (
    <svg ref={svgRef} width="300" height="190"></svg>
  );
}

export default RoughBoard;