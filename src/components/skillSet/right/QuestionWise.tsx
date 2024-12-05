'use client'
import { Chart } from "react-chartjs-2" 
import { Doughnut } from "react-chartjs-2"
import "chart.js/auto"
// imprt Doughnut

interface QuestionWiseProps{
    score:number
}

const QuestionWise:React.FC<QuestionWiseProps>=({score})=>{

    const chartData = {
        labels: [
          'Incorrect',
          'Correct'
        ],
        datasets: [{
          label: 'Analysis',
          data: [15-score , score],
          backgroundColor: [
            'rgb(196, 225, 255)', 
            'rgb(54, 162, 235)',
           
          ],
          hoverOffset: 4
        }]
      };

      const chartOptions={
        responsive:true,
        plugins:{

        }
      }
    return(
        <div>
            <div className="p-4 border rounded-lg">
                <div className="flex flex-row justify-between">
                    <div className="font-semibold">Question Analysis</div>
                    <div className="text-blue-600">{score}/15</div>
                </div>

                <div className="mt-2">
                    <span className="font-semibold">You Scored {score} questions correct out of 15 .</span>
                    {
                        (score<15)?(
                        <div>However it still nedds some improvements</div>):
                        (<></>)
                    }
                </div>
                
                <div className="w-[90%]  max-w-[250px] mx-auto mt-6 relative">
                    <Chart
                    type="doughnut"
                    data={chartData}
                    className="mx-auto w-full"
                    // width={10}
                    // width={'200px'}
                    options={
                        ({plugins:{
                        legend:{
                            position:'bottom'
                        }
                    }})
                }        
                    ></Chart>
                </div>
            </div>
        </div>
    )
}

export default QuestionWise;