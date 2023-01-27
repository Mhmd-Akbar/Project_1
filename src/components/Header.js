import Illustration_1 from '../assets/Illustration_1.png';

const Header = () => {
    return (
        <div>
            <header className="container max-w-5xl mx-auto flex pt-48 gap-5">
                <div className=" w-1/2">
                    <h1 className='font-semibold text-4xl pb-5'>Want Enything to be <span className='block'>easy with <span className='font-bold'>MayCoding.</span></span> </h1>
                    <p className='pb-12 text-base '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam unde aperiam.</p>
                    <button className='my-6 mx-2 py-4 px-16 font-semibold text-white bg-red-600 shadow-lg shadow-red-400 rounded-md hover:scale-95 hover:shadow-lg hover:shadow-red-500 transition duration-300 hover:ring hover:ring-red-200'>Get Started</button>
                </div>
                <div className="w-1/2">
                    <img src={Illustration_1} alt=""/>
                </div>
            </header>
        </div>
    )
}


export default Header;