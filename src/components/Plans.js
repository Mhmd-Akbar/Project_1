import ImgPlan from '../assets/Free.png';


const Plans = () => {
    return (
        <div>
            <div class="container max-w-5xl mx-auto my-26 py-16">
                <h1 className='text-center pb-6 font-bold text-3xl'> Choose Your Plan </h1>
                <p className='w-96 text-center mx-auto font-light text-xl pb-10'>Let's choose that is best for you and explore it happily and cheerfully.</p>
                <div className='flex gap-5'>
                <div className="w-1/3 border p-4 flex justify-center rounded-lg shadow-md shadow-slate-200 ">
                    <div>
                        <img src={ImgPlan} alt="" className='w-40 ml-8'/>
                        <h3 className='text-center pt-8 font-semibold text-xl'>Free Plan</h3>
                        <ul className='pt-14 pb-24'>
                            <li className='mb-5'>✔️ Lorem ipsum dolor sit amet.</li>
                            <li className='mb-5'>✔️ Lorem ipsum dolor sit amet.</li>
                            <li className='mb-5'>✔️ Lorem ipsum dolor sit amet.</li>
                            <li className='mb-5'>✔️ Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <h2 className='text-center font-semibold text-lg'>Free</h2>
                        <button className='block text-pink-700 font-semibold mx-auto my-3 bg-pink-50 py-2 px-14 rounded-full border border-pink-500 hover:bg-pink-500 hover:border-pink-100 hover:text-white transition duration-500 '>Select</button>
                    </div>  
                </div>
                <div className="w-1/3 border p-4 flex justify-center rounded-lg shadow-md shadow-slate-200 ">
                    <div>
                        <img src={ImgPlan} alt="" className='w-40 ml-8'/>
                        <h3 className='text-center pt-8 font-semibold text-xl'>Free Plan</h3>
                        <ul className='pt-14 pb-24'>
                            <li className='mb-5'>✔️ Lorem ipsum dolor sit amet.</li>
                            <li className='mb-5'>✔️ Lorem ipsum dolor sit amet.</li>
                            <li className='mb-5'>✔️ Lorem ipsum dolor sit amet.</li>
                            <li className='mb-5'>✔️ Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <h2 className='text-center font-semibold text-lg'>Free</h2>
                        <button className='block font-semibold mx-auto my-3 hover:bg-pink-50 py-2 px-14 rounded-full border hover:border-pink-500 bg-pink-500 border-pink-100 hover:text-pink-800 text-white transition duration-500 '>Select</button>
                    </div>  
                </div>
                <div className="w-1/3 border p-4 flex justify-center rounded-lg shadow-md shadow-slate-200 ">
                    <div>
                        <img src={ImgPlan} alt="" className='w-40 ml-8'/>
                        <h3 className='text-center pt-8 font-semibold text-xl'>Free Plan</h3>
                        <ul className='pt-14 pb-24'>
                            <li className='mb-5'>✔️ Lorem ipsum dolor sit amet.</li>
                            <li className='mb-5'>✔️ Lorem ipsum dolor sit amet.</li>
                            <li className='mb-5'>✔️ Lorem ipsum dolor sit amet.</li>
                            <li className='mb-5'>✔️ Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <h2 className='text-center font-semibold text-lg'>Free</h2>
                        <button className='block text-pink-700 font-semibold mx-auto my-3 bg-pink-50 py-2 px-14 rounded-full border border-pink-500 hover:bg-pink-500 hover:border-pink-100 hover:text-white transition duration-500 '>Select</button>
                    </div>  
                </div>
                </div>


            </div>
        </div>
    )
}

export default Plans;