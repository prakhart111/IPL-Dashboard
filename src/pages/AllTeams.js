// import man from'../assets/img/man.png'
import rcb from'../assets/img/rcb.png'
import srh from'../assets/img/srh.png'
import mi from'../assets/img/mi.png'
import rps from'../assets/img/rps.png'
import rpss from'../assets/img/rpss.png'
import gl from'../assets/img/gl.png'
import kkr from'../assets/img/kkr.png'
import dd from'../assets/img/dd.png'
import kxip from'../assets/img/kxip.png'
import csk from'../assets/img/csk.png'
import dc from'../assets/img/dc.png'
import pw from'../assets/img/pw.png'
import rr from'../assets/img/rr.png'
import ktk from'../assets/img/ktk.png'


import DounutChart from '../components/DounutChart';
//teamData is Win,Loss

export default function Dashboard({WonPlayed, teamsShort}) {
    const colors = ['bg-[#FF341299]','bg-pink-200','bg-blue-200','bg-indigo-200',
    'bg-indigo-200','bg-yellow-200','bg-purple-200','bg-blue-300','bg-red-300',
    'bg-yellow-400','bg-blue-400','bg-red-100','bg-pink-400','bg-purple-400']

    const imageData = [rcb,srh,mi,rps,rpss,gl,kkr,dd,kxip,csk,dc,pw,rr,ktk]

    return (
       <div className='container mx-auto max-w-full'>
           <div className="grid grid-cols-1 sm:grid-cols-3">


           {WonPlayed?.map((item,i)=>
               i!==4 && <div key={item["team_name"]} className={`sm:col-start-${i%3 + 1} sm:col-end-${i%3 + 2} px-2 mb-2 sm:m-2 2xl:m-5`}>
                    <DounutChart 
                        teamData = { [item["won"] , item["played"] - item["won"]] }
                        canvasID={`${teamsShort[i]}`}
                        logo={imageData[i]}
                        color={colors[i]}
                        item={item}
                        showLabel={true}
                    />
                </div>)}
            </div>  
       </div>
    );
}
