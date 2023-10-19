import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AllTeams from './pages/AllTeams';
import Footer from './components/Footer';
import './assets/styles/tailwind.css';
import data from './data.js'

function App() {

const teams = ["Royal Challengers Bangalore",
               "Sunrisers Hyderabad",
               "Mumbai Indians",
               "Rising Pune Supergiants",
               "Rising Pune Supergiant",
               "Gujarat Lions",
               "Kolkata Knight Riders",
               "Delhi Daredevils",
               "Kings XI Punjab",
               "Chennai Super Kings",
               "Deccan Chargers",
               "Pune Warriors",
               "Rajasthan Royals",
               "Kochi Tuskers Kerala",
             ]
const teamsShort = ["RCB","SRH","MI","RSPs","RSP","GL","KKR","DD","KXIP","CSK","DC","PW","RR","KTK",]

    const WonPlayed = [
      // {
        // "team_name":'',
        // "played":0,
        // "won":0
      // }
    ];
    const wonArray =[]
    const playedArray =[]
    const totalMatchesArray=[]
    teams.forEach( (team)=>{
        let won=0;
        let play=0;
        data.forEach( (single_data)=>{
           if(single_data["team1"] === team || single_data["team2"] === team){play++;
           if(team === single_data["winner"]){
             won++;
           }}

        })
        const test = {
          "team_name":`${team}`,
          "played":play,
          "won":won
        }
        WonPlayed.push(test)
        wonArray.push(won)
        playedArray.push(play)
    } )
   
    // console.log(WonPlayed)

    //Player of Match
    const playerOfMatchSet = new Set(); 
    // to get unique seasons
    const yearsOfIplSet = new Set(); 
    data.forEach((dataItem)=>{
        playerOfMatchSet.add(dataItem["player_of_match"])
        yearsOfIplSet.add(dataItem["season"])
    })
    

    const playerOfMatchDS = []
    let count =0;
    playerOfMatchSet.forEach( (player)=>{
       data.forEach( (match)=>{
         if(match["player_of_match"] === player){
           count++;
         }
       })
       playerOfMatchDS.push(
         {
           "player":player,
           "count":count,
         }
       )
       count = 0
    })
    //converting the Set to Array
    const playerOfMatchArray = [...playerOfMatchDS].sort(
      (a,b)=>b.count - a.count
    )
    // set to array and sorting years in ascending 
    const yearsOfIplArray = Array.from(yearsOfIplSet).sort((a,b)=>a-b);

    // calculating total matches year wise
    yearsOfIplArray.forEach( (year)=>{
  
      let matches=0;
      data.forEach( (dataItem)=>{
         if(dataItem["season"] === year){matches++;
        }
      })
      totalMatchesArray.push(matches);
      
  } )
   
    const topPlayers = playerOfMatchArray.slice(0,10)

    //Pie chart to show if the toss winner also wins match
    let tossWinnerMatchWinner = 0
    let totalMatch = 0
    data.forEach( (item)=>{
      totalMatch++;
      if(item["toss_winner"] === item["winner"]){
        tossWinnerMatchWinner++;
      }
    })
    //toss decision count
    let field =0
    data.forEach( (match)=>{
      if(match["toss_decision"] === "field"){
        field++;
      }
    })

    return (
        <div className='App'>
            <Sidebar />
            <div className="md:ml-64 max-w-[99vw] overflow-x-hidden">
                <Switch>
                    <Route exact path="/">
                        <Dashboard 
                            playedArray={playedArray}
                            wonArray={wonArray}
                            teamsShort={teamsShort}
                            topPlayers={topPlayers}
                            totalMatch={totalMatch}
                            tossWinnerMatchWinner={tossWinnerMatchWinner}
                            yearsOfIplArray={yearsOfIplArray}
                            totalMatchesArray={totalMatchesArray}
                            field={field}/>
                    </Route>
                    <Route exact path="/teams">
                        <AllTeams WonPlayed={WonPlayed} teamsShort={teamsShort}/>
                    </Route>
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </div> 
    );
}

export default App;
