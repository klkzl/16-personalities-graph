import React, { Component } from 'react';
import * as d3 from 'd3';

import drawingCircles from '../constants/drawingCircles';

import { Container, Ilustration, Title } from '../styles/components/_graph';
class Graph extends Component {

  componentDidMount() {
    this.createBubbleChart();
  }

  componentDidUpdate() {
    const curr = this.props.activePers;
    this.updateBubbleChart(curr);
  }

  createBubbleChart() {
    const diameter = 225;
    const svg = d3.select(".bubblechart");

    const bubble = d3.pack(drawingCircles)
      .size([diameter, diameter + 20])
      .padding(3);

    const nodes = d3.hierarchy(drawingCircles)
      .sum(d => d.r);

    const node = svg.selectAll(".node")
      .data(bubble(nodes).descendants())
      .enter()
      .filter(d => !d.children)
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x}, ${d.y})`);

    node.append("circle")
      .attr("r", d => d.r)
      .attr("name", d => d.data.name)
      .style("fill", "#bbb8af")
      .style("opacity", ".3");

    node.append("text")
      .attr("dy", ".45em")
      .style("text-anchor", "middle")
      .text(d => d.data.r)
      .attr("font-family",  "arial")
      .attr("font-size", "12px")
      .attr("fill", "white")
     .style("display", "none");
  }

  updateBubbleChart(curr) {
    const newActive = curr;
    const singleCircle = d3.select(".bubblechart").selectAll("circle");
    const singleText= d3.select(".bubblechart").selectAll("text");

    singleCircle
      .style("fill", d => d.data.name === newActive ? "#56bbcd" : "#bbb8af")
      .style("opacity", d => d.data.name === newActive ? "1" : ".3")
      .style("transform", d => d.data.name === newActive ? "scale(1.04)" : "scale(1)")
      .style("transition", "transform .3s");

    singleText
      .style("display", d => d.data.name === newActive ? "block" : "none");
  }

  render() {
    const { activePers } = this.props;

    return (
      <Container>
        {activePers &&
          <Title>Percentage in society:</Title>
        }
        <Ilustration className="bubblechart" />
      </Container>
    );
  }
}

export default Graph;