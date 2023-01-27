import Users from '../assets/users.png'
import Maps from '../assets/maps.png'
import Server from '../assets/server.png'

const Follower = () => {

    const section3 = [
        {
            icon:Users,
            label:'users',
            total:'99+'
        },
        {
            icon:Maps,
            label:'users',
            total:'33+'
        },
        {
            icon: Server,
            label:'users',
            total:'55+'
        }
];


    return (
        <div className='container max-w-3xl mx-auto my-20 rounded-lg py-5 shadow-lg shadow-slate-400'>
            <section className="flex">
                    {section3.map((val, index) => {
                        return <div key={index} className={`w-1/3 flex items-center py-5 ${index+1 !== section3.length && 'border-r-2 border-slate-200'}  justify-center`}>
                            <img src={val.icon} alt="" className='w-10 bg-red-50 rounded-full p-2 border border-red-300'/>
                            <div className='pl-2'>
                                <h3 className='font-bold -mb-1'>{val.total}</h3>
                                <p className='font-light'>{val.label}</p>
                            </div>
                        </div>
                    })}


            </section>
        </div>
    )
}


export default Follower;