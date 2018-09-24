import React from 'react';
import * as d3 from 'd3';
import { layout } from 'd3';

import { Container, Ilustration } from '../styles/components/_graph';

// const diameter = 500;

// const bubble = layout.pack()
//   .sort(null)
//   .size([diameter, diameter])
//   .padding(1.5);

// const bubbles = svg.append("g")
//   .attr("transform", "translate(0,0)")
//   .selectAll(".bubble")
//   .data(types)
//   .enter();

// bubbles.append("circle")
//   .attr("r", function(d){ return d.r; })
//   .attr("cx", function(d){ return d.x; })
//   .attr("cy", function(d){ return d.y; })
//   .style("fill", function(d) { return color(d.value); });

//   bubbles.append("text")
//         .attr("x", function(d){ return d.x; })
//         .attr("y", function(d){ return d.y + 5; })
//         .attr("text-anchor", "middle")
//         .text(function(d){ return d["Fruit"]; })
//         .style({
//             "fill":"white",
//             "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
//             "font-size": "12px"
//         });


const Graph = ({ types }) => (
  <Container>
    <Ilustration className="bubble">
      { types.map(item => (
        <circle key={item.name} cx="34" cy="45" r={item.percentage} fill="#56bbcd" text={item.name}>
          {item.name}: {item.percentage}
        </circle>
      ))}
    </Ilustration>
    <svg width="50" height="50">
      <circle cx="25" cy="25" r="4" fill="#56bbcd" />
      <circle cx="35" cy="35" r="6" fill="#56bbcd" />
    </svg>
  </Container>
);

export default Graph;