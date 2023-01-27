import IllustrationDua from '../assets/Illustration_2.png';

const Main = () => {
    return (
        <div>
            <div class="container max-w-5xl mx-auto flex my-26 items-center">
                <div className='w-1/2 pr-5'> 
                    <img src={IllustrationDua} alt="" className=''/>
                </div>
                <div className='w-1/2'>
                    <h1 className='font-semibold pb-5 text-4xl'>
                        We Provide Many <span className='block'>Features You Can Use</span>
                    </h1>
                    <p className='pb-6 font-light text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <span className='block'>Lorem ipsum dolor sit amet.</span></p>
                    <ul >
                        <li className='pb-3'>✅Lorem ipsum dolor sit.</li>
                        <li className='pb-3'>✅Lorem ipsum dolor sit.</li>
                        <li className='pb-3'>✅Lorem ipsum dolor sit.</li>
                        <li>✅Lorem ipsum dolor sit.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Main;