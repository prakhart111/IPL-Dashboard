import React from 'react'
import Chart from 'chart.js';
import { useEffect } from 'react';

const DounutChart = ({teamData,canvasID,logo,color,item,showLabel=false}) => {
  const winPercentage = parseInt((teamData[0]*100) / (teamData[0] + teamData[1]),10)

    useEffect(() => {

        //config for pie
        let config = {
            type: 'doughnut',
            data: {
              labels: ['Won','Lost'],
              datasets: [{
                data: teamData,
                backgroundColor: ['rgb(55, 250, 64)','rgb(255, 99, 102)',],
              }]
            },
            options: {
              legend: {
                display: false,
                position: "bottom"
              },
             
            }
          }
        let ctxDou = document.getElementById(`${canvasID}`).getContext('2d');
        window.myBar = new Chart(ctxDou, config);
    }, [teamData,canvasID]);


  return (
    <div className={`relative h-96 text-center m-5 2xl:m-5 sm:m-2 p-2 pb-10 rounded-lg ${color}`}>
      <div className='absolute text-3xl 2xl:text-5xl font-bold mx-auto w-full mt-20 pt-24 sm:pt-16 pr-2 2xl:pt-20'>
                      <p className='text-gray-700 p-0 m-0'>{winPercentage}%</p>
                      {showLabel && <p className='text-sm'>WIN %</p>}
      </div>
        <div className='absolute'>
                <img src={logo} alt=''/>
        </div>
        <div className="p-10 sm:p-7 2xl:p-3"></div>
          <canvas id={canvasID} height='230'></canvas>
          <div className='p-3 md:pt-7'>{item && item["team_name"]}</div>
    </div>
  )
}

export default DounutChart