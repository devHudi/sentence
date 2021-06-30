import { useEffect } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 15px;
  font-size: 15pt;
  font-weight: bold;
  text-align: left;
`;

const width = 800;
const height = 250;

const Tagcloud = () => {
  useEffect(() => {
    const data = [
      "#슬픔",
      "#사랑",
      "#우울",
      "#기쁨",
      "#자기계발",
      "#행복",
      "#가족",
      "#친구",
      "#고민",
      "#위로",
      "#공감",
    ];

    cloud()
      .size([width, height])
      .words(
        data.map(function (d) {
          return { text: d, size: 10 + Math.random() * 110 };
        })
      )
      .padding(5)
      .font("Impact")
      .fontSize(function (d) {
        return d.size;
      })
      .on("end", end)
      .start();

    function end(words) {
      d3.select("#word-cloud")
        .append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", function (d) {
          return d.size + "px";
        })
        .style("font-family", "Nanum Myeongjo")
        .style("fill", "#FFFFFF")
        .attr("text-anchor", "middle")
        .attr("transform", function (d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function (d) {
          return d.text;
        });
    }
  });

  return (
    <Wrapper>
      <Title> ☁️ 동현님의 관심사 </Title>
      <div id="word-cloud"></div>
    </Wrapper>
  );
};

export default Tagcloud;
