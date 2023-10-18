import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';

export default function PlayerOfMatchCard({topPlayers}) {
    return (
        <Card>
            <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-center">
                    <h2 className="text-white text-xl">Players of the Tournament</h2>
                </div>
            </CardHeader>
            
                <div className="overflow-x-auto mx-auto p-2">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Rank
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Name
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                                    Player of Match Awards
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {topPlayers.map( (player,i)=>(
                                <tr key={i}>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {i+1}
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {player["player"]}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                    {player["count"]}
                                </td>
                            </tr>
                            ) )
                        }
                            
                        </tbody>
                    </table>
                </div>
            
        </Card>
    );
}
