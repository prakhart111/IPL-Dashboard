import StatusCard from '../components/StatusCard';
import ChartBar from '../components/ChartBar';
import PlayerOfMatchCard from '../components/PlayerOfMatchCard';
import ipl from '../assets/img/ipl.png'
import mi from '../assets/img/mi.png'
import csk from '../assets/img/csk.png'
import rr from '../assets/img/rr.png'
import DounutChart from '../components/DounutChart';
import { CardHeader } from '@material-tailwind/react';
import MatchesLine from '../components/MatchesLine';

export default function Dashboard({playedArray,wonArray,teamsShort,topPlayers,tossWinnerMatchWinner,totalMatch,field,yearsOfIplArray,totalMatchesArray}) {
    return (
        <>
            <div className="AdminNavbar m-0 md:px-8 h-40 max-w-screen"/>

            <div className="m-0 px-2 md:px-8 -mt-32">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-7">
                        <div className="xl:col-start-1 xl:col-end-8 px-0 mb-10">
                            <ChartBar 
                            playedArray={playedArray}
                            wonArray={wonArray}
                            teamsShort={teamsShort}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 sm:mb-10">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                        <StatusCard
                            icon={mi}
                            title="Most Wins"
                            amount="92"
                            team="Mumbai Indians"
                        />
                        <StatusCard
                            icon={rr}
                            title="First Winner"
                            amount="2007"
                            team="Rajasthan Royals"
                        />
                        <StatusCard
                            icon={ipl}
                            title="Total Matches Played"
                            amount="636"
                            team="2008 - 2017"
                        />
                        <StatusCard
                            icon={csk}
                            title="Highest Winning Ratio"
                            amount="60.31%"
                            team="Chennai Super Kings"
                        />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <PlayerOfMatchCard 
                                topPlayers={topPlayers}
                            />
                        </div>
                    {/* toss winner result */}
                        <div className="xl:col-start-4 xl:col-end-6 max-w-[95vw] px-4 pt-4 text-center mb-14 mx-auto bg-white rounded-xl shadow-lg">
                            <CardHeader color="pink">
                                <h1>Chances that a Toss Winning team also wins the Match !</h1>
                            </CardHeader>
                            {/* some data */}
                            <DounutChart 
                                teamData={[tossWinnerMatchWinner,totalMatch-tossWinnerMatchWinner]}
                                canvasID='toss'
                                logo={ipl}
                                color='bg-teal-200'
                            />
                            <ul className='border bg-blue-100 shadow-lg p-2 ml-4 mr-4 mb-4 rounded-xl shadow-lg'>
                                <li className='flex justify-around'><span>Total Matches Played :</span> <span>{totalMatch}</span></li><br />
                                <li className='flex justify-around'><span>Cases when toss winner <br/> also wins the match <br /> (Green)</span> <span>{tossWinnerMatchWinner}</span></li>
                            </ul>
                        </div>
                    {/* toss decision  */}
                        <div className="xl:col-start-1 xl:col-end-3  max-w-[95vw] px-4 pt-4 text-center mb-10 mx-auto bg-white rounded-xl shadow-lg">
                            <CardHeader color="red">
                                <h1>Decision record of toss winner</h1>
                            </CardHeader>
                            <DounutChart 
                                teamData={[field,totalMatch-field]}
                                canvasID='tossDecision'
                                logo={ipl}
                                color='bg-yellow-100'
                            />
                            <ul className='border bg-blue-100 shadow-lg p-2 ml-4 mr-4 mb-4 rounded-xl shadow-lg'>
                                <li className='flex justify-around'><span>Choose to Bat (Red):</span> <span>{totalMatch - field}</span></li><br />
                                <li className='flex justify-around'><span>Choose to Bowl (Green) :</span> <span>{field}</span></li>
                            </ul>
                        </div>

                        {/* Line graph added */}
                        <div className="xl:col-start-3 xl:col-end-6 px-4 mb-14   ">
                        <MatchesLine 
                            yearsOfIplArray={yearsOfIplArray}
                            totalMatchesArray={totalMatchesArray}
              />
              
                        </div>
                  
      

                    </div>
                </div>
            </div>
        </>
    );
}
