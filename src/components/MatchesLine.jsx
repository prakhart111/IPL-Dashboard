import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';

export default function MatchesLine({yearsOfIplArray,totalMatchesArray}) {
    useEffect(() => {
 

        let config = {
            type: 'line',
 data:{
         labels: yearsOfIplArray,
        datasets: [{
                  label: 'Total matches',
                  data: totalMatchesArray,
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  backgroundColor: '#55ee55',
                  tension: 0.1
                }]
              },
         options: {
                        maintainAspectRatio: false,
                        responsive: true,
                        title: {
                            display: true,
                            text: 'Total matches in the IPL year wise',
                            fontSize : 15,
                        },
          },
       
         hover: {
                    mode: 'nearest',
                    intersect: true,
                },
        
        scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Seasons(IPL)',
                            },
                            
                        },
                    ],
                    
                yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Total number of matches',
                            },
                          
                        },
                    ],
        
        }}
    
        let ctx = document.getElementById('line-chart').getContext('2d');
        window.myLine = new Chart(ctx, config);
    }, [yearsOfIplArray,totalMatchesArray]);
    return (
        <div className="w-full m-0 p-0">
        <Card>
            <CardHeader color="lime" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Total number of matches played year wise
                </h6>
                <h2 className="text-white text-2xl">Seasons vs total matches</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96 overflow-x-auto">
                    <canvas id="line-chart"></canvas>
                </div>
            </CardBody>
            <CardHeader color="white" contentPosition="center">
                
                <h5 className="text-teal-500 text-xl">Seasons of IPL &rarr;</h5>
            </CardHeader>
        </Card>
       
        </div>
    );
}
    