import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["#슬픔", "#고민", "#자기계발", "#기쁨", "#사랑", "#행복"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Title = styled.div`
  font-size: 15pt;
  font-weight: bold;
`;

const Chart = () => (
  <div>
    <Title># 나의 선호 태그 분포</Title>
    <Doughnut data={data} options={options} />
  </div>
);

export default Chart;
