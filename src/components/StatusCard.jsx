import CardStatus from '@material-tailwind/react/CardStatus';

export default function StatusCard({
    icon,
    title,
    amount,
    team,
}) {
    return (
        <div className={`relative p-4 pb-6 mb-5 text-sm 2xl:text-lg text-center bg-white shadow-lg rounded-lg m-2`}>
                    
                    <div className="mb-0 absolute" >
                        <img src={icon} alt ='' width='70px'/>
                    </div>
                    <div className="pl-10">
                    <CardStatus title={title} amount={amount} />
                    </div>
            <div className="absolute mx-auto m-2 bottom-1 text-md">{team}</div>
        </div>
    );
}
