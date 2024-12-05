"use client";

import { FiClipboard } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import { scales } from "chart.js/auto";
import { useState } from "react";
import Annotation from "chartjs-plugin-annotation";
import annotationPlugin from 'chartjs-plugin-annotation';
// impor} from 'chartjs-plugin-annotation'


interface ComparisonGraphProps {
  percentile: number;
}
const ComparisonGraph: React.FC<ComparisonGraphProps> = ({ percentile }) => {
  const [highlightPercentile, setHighlightPercentile] = useState(percentile);

  const percentiles = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 100]; // Example dataset
  

  const labels = [0, 25, 50, 75, 100];
  const chartData = {
    labels: percentiles,
    datasets: [
      {
        label: "Percentiles",
        data: [2, 3, 5, 6, 8, 6, 4, 3, 4, 3, 3],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.6,
    
      },
    ],
  };

  let index=0;
  for(let i=0;i<percentiles.length;i++)
  {
    if(percentile<=percentiles[index])
        index = i;
  }
  index = index + (percentile - percentiles[index])*0.1;
  console.log("index = " , index);
  return (
    <div>
      <div className="p-4 border rounded-lg">
        <div className="flex flex-row justify-between">
          <div className="font-semibold ">Comparison Graph</div>
          <BsGraphUp className="text-xl md:text-lg max-[500px]:text-sm"></BsGraphUp>
        </div>

        <div className="mt-4">
          <span className="font-semibold text-gray-700">
            You Scored {percentile}% percentile
          </span>{" "}
           which is {(percentile<72)?(<span>lower</span>):(<span>higher</span>)} than average percentile 72% of
          all engineers who took this assessment
        </div>

        <div className="mt-6">
          <Chart
            data={chartData}
            type="line"
            options={{
              responsive: true,

              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  title:{
                    display:true,
                    text:'Percentiles'
                  },
                  ticks: {
                    callback: function (val: any, index) {
                      // Hide every 2nd tick label
                      return index % 2 === 0 ? this.getLabelForValue(val) : "";
                    },
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                  title:{
                    display:true,
                    text:'No of students'
                  }
                },
              },
              plugins: {
               
                legend: {
                  display: false,
                },

                annotation:{
                    annotations:{
                        line1:{
                            type:'line',
                            display:true,
                            borderColor:'rgba(0,0,0,0.4)',
                            xMin:index,
                            xMax:index,
                            // xMax:85,
                            yMin:0,
                            yMax:9
                        }
                    }
                }
              },
            }}
          ></Chart>
        </div>
      </div>
    </div>
  );
};

export default ComparisonGraph;
