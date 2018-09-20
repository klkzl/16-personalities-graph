import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { layout } from 'd3';

const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.darkGrey};
  height: ${props => props.theme.module * 8}px;
  position: absolute;
  right: ${props => props.theme.module}px;
  top: ${props => props.theme.module * 1.2}px;
  width: ${props => props.theme.module * 8}px;
`;

const Ilustration = styled.svg`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.lightGrey};
`;

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