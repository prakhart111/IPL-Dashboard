import React from 'react'
import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';

const WinnerPie = ({teams,wonArray}) => {
    useEffect(() => {

        //config for pie
        let config = {
            type: 'doughnut',
            data: {
              labels: teams,
              datasets: [{
                data: wonArray,
                backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 180, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)',
                'rgb(155, 99, 132)', 'rgb(5, 159, 64)', 'rgb(255, 20, 86)', 'rgb(75, 192, 0)', 'rgb(54, 12, 2)',
                'rgb(255, 0, 192)', 'rgb(55, 120, 164)', 'rgb(5, 25, 255)', 'rgb(75, 252, 192)', 'rgb(54, 102, 205)' ],
              }]
            },
            options: {
              legend: {
                display: true,
                position: "bottom"
              },
              plugins:{
                  legend:{
                      labels:{
                          font:{
                              size:10
                          }
                      }
                  }
              }
            }
          }
        let ctxPie = document.getElementById('pie-chart').getContext('2d');
        window.myBar = new Chart(ctxPie, config);
    }, [teams,wonArray]);
  return (
    <div className='mx-auto mt-4 sm:mt-0 sm:ml-2'>
        <Card>
            <CardHeader color="purple" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Succesful Teams
                </h6>
                <h2 className="text-white text-2xl">Wining Share</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96 text-center">
                    <div className='absolute text-3xl font-bold mx-auto w-full mt-20 pt-10'>
                      <p className='text-gray-700'>636</p>
                      <p className='text-sm'>Total Matches</p>
                    </div>
                    <canvas id="pie-chart" height='400'></canvas>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default WinnerPie