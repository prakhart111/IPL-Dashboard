import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import WinnerPie from './WinnerPie.jsx';
export default function ChartBar({playedArray,wonArray,teamsShort}) {
    useEffect(() => {
        let config = {
            type: 'bar',
            data: {
                labels: teamsShort,
                datasets: [
                    {
                        label: "Played",
                        backgroundColor: '#03a9f4',
                        borderColor: '#03a9f4',
                        data: playedArray,
                        fill: false,
                        barThickness: 8,
                    },
                    {
                        label: "Won",
                        fill: false,
                        backgroundColor: '#55ee55',
                        borderColor: '#5555ee',
                        data: wonArray,
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: true,
                    text: 'Played VS Matches Won by each Team',
                    fontSize : 15,
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#333399',
                    titleAlign:'center',
                    padding:10,
                    boxPadding:3,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: 'rgba(17,17,17,.7)',
                    },
                    align: 'end',
                    position: 'bottom',
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Teams',
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.3)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Matches',
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.2)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById('bar-chart').getContext('2d');
        window.myBar = new Chart(ctx, config);
    }, [playedArray,wonArray,teamsShort]);
    return (
        <div className="flex flex-col sm:flex-row m-0 p-0">
        <Card>
            <CardHeader color="pink" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview of Performance of all Teams
                </h6>
                <h2 className="text-white text-2xl">Played vs Won</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    <canvas id="bar-chart"></canvas>
                </div>
            </CardBody>
        </Card>
        <WinnerPie teams={teamsShort} wonArray={wonArray}/>
        </div>
    );
}
