import React, { useEffect, useRef } from 'react';
import rough from 'roughjs';

function RoughBox({ children, width, height }) {
  const svgRef = useRef(null);
  const w = width || 220;
  const h = height || 260;

  useEffect(() => {
    const svg = svgRef.current;
    svg.innerHTML = '';
    const rc = rough.svg(svg);

    const rect = rc.rectangle(8, 8, w - 16, h - 16, {
      stroke: '#fdfdfdff',
      strokeWidth: 1.8,
      roughness: 1.5,
      fill: 'rgba(0, 0, 0, 0.3)',
      fillStyle: 'cross-hatch',
      fillWeight: 0.3,
    });

    svg.appendChild(rect);
  }, [w, h]);

  return (
    <div style={{ position: 'relative', width: w, height: h }}>
      <svg
        ref={svgRef}
        width={w}
        height={h}
        style={{ position: 'absolute', top: 0, left: 0 }}
      ></svg>
      <div style={{
        position: 'relative',
        zIndex: 1,
        padding: '20px',
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {children}
      </div>
    </div>
  );
}

export default RoughBox;
