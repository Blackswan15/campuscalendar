import React, { useEffect, useRef } from 'react';
import rough from 'roughjs';

function CalendarChecklist() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    svg.innerHTML = '';
    const rc = rough.svg(svg);
    svg.appendChild(rc.rectangle(10, 30, 150, 130, {
      stroke: '#fff', strokeWidth: 2, roughness: 1.5
    }));
    svg.appendChild(rc.line(10, 55, 160, 55, {
      stroke: '#fff', strokeWidth: 1.5, roughness: 1
    }));

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let x = 20 + col * 44;
        let y = 65 + row * 32;
        svg.appendChild(rc.rectangle(x, y, 35, 24, {
          stroke: '#fff', strokeWidth: 1.2, roughness: 1.8,
          fill: 'rgba(255,255,255,0.08)', fillStyle: 'cross-hatch', fillWeight: 0.5
        }));
      }
    }

    svg.appendChild(rc.line(175, 95, 220, 95, {
      stroke: '#fff', strokeWidth: 1.5, roughness: 0.8
    }));
    svg.appendChild(rc.line(212, 88, 220, 95, {
      stroke: '#fff', strokeWidth: 1.5, roughness: 0.8
    }));
    svg.appendChild(rc.line(212, 102, 220, 95, {
      stroke: '#fff', strokeWidth: 1.5, roughness: 0.8
    }));

    svg.appendChild(rc.rectangle(230, 20, 180, 150, {
      stroke: '#fff', strokeWidth: 2, roughness: 1.5
    }));

    const items = [
      { text: 'Plan event ✓', checked: true },
      { text: 'Book venue ✓', checked: true },
      { text: 'Invite all ✓', checked: true },
      { text: 'Have fun!', checked: false },
    ];

    items.forEach((item, i) => {
      let bx = 245;
      let by = 38 + i * 32;

      // checkbox
      svg.appendChild(rc.rectangle(bx, by, 18, 18, {
        stroke: '#fff', strokeWidth: 1.5, roughness: 1.5,
        fill: item.checked ? 'rgba(255,255,255,0.15)' : 'none',
        fillStyle: 'solid'
      }));

      // checkmark for checked items
      if (item.checked) {
        svg.appendChild(rc.line(bx + 3, by + 10, bx + 7, by + 15, {
          stroke: '#fff', strokeWidth: 2, roughness: 0.5
        }));
        svg.appendChild(rc.line(bx + 7, by + 15, bx + 15, by + 3, {
          stroke: '#fff', strokeWidth: 2, roughness: 0.5
        }));
      }
    });

  }, []);

  // Text labels rendered as HTML on top of SVG
  const labels = ['Plan event ✓', 'Book venue ✓', 'Invite all ✓', 'Have fun!'];

  return (
    <div style={{ position: 'relative', width: 420, height: 180 }}>
      <svg ref={svgRef} width="420" height="180"></svg>
      {labels.map((label, i) => (
        <span key={i} style={{
          position: 'absolute',
          left: 275,
          top: 40 + i * 32,
          fontSize: '0.85rem',
          color: '#fff',
          fontFamily: 'inherit',
          pointerEvents: 'none',
        }}>{label}</span>
      ))}
    </div>
  );
}

export default CalendarChecklist;
