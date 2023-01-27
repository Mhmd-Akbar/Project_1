import React from "react";
import Users from "../assets/users.png"
// import Slider from "react-slick";
// import CardReview from "../components/CardReview";


const reviews = [
    {
        name:'Muhammad Akbar',
        addresss: 'Indo, Lampung',
        comment: 'Wow... I am very Happy to use this VPN, it turned out to be more then by expectations and so far there have been no problems. LaslesVPN always the best',
        star: '3.5'
    },
    {
        name:'Yessica Chirsva',
        addresss: 'Shanxi, China',
        comment: 'Wow... I am very Happy to use this VPN, it turned out to be more then by expectations and so far there have been no problems. LaslesVPN always the best',
        star: '4.8'
    },
    {
        name:'Nada Zahrotul',
        addresss: 'Indo, Bandung',
        comment: 'Wow... I am very Happy to use this VPN, it turned out to be more then by expectations and so far there have been no problems. LaslesVPN always the best',
        star: '4.2'
    }
]



const Review = () => {

    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     pauseOnHover: true
    //   };



    return <div>
                <div  className="container max-w-5xl mx-auto my-26 py-16">
                    <h1 className="text-center font-semibold text-4xl pb-10">Tursted by Thousands of <span className="block">Happy Customer</span></h1>
                    <p className="text-center mx-auto w-2/4 text-xl font-light">These are the stories our customers who have joined us with great pleasure when using this crazy feature.</p>
                    {/* <div>
                     <Slider {...settings} arrows={false}>
                                {reviews.map((val,index) => <CardReview {...val} key={index}/> )}
                        </Slider> 
                    </div> */}
                    <div className="flex flex-wrap justify-center">
                    {reviews.map((val,index) => {
                        return (
                            <div key={index} className="w-[30%] p-8 rounded-lg mr-2  mt-10 border border-red-500">       
                                <div className="flex justify-between pb-5">
                                    <div className="flex">
                                        <img src={Users} alt="" className="w-10 h-10"/>
                                        <p className="text-base pl-2 font-semibold -mt-1">{val.name} <span className="block text-sm font-light">{val.addresss}</span></p>
                                   </div>
                                        <div>
                                            <p className="font-semibold">{val.star} ⭐</p>
                                        </div>
                                </div>
                                    <div className=" text-start">
                                       <p>{val.comment}</p>
                                    </div>
                            </div>          
                                       
                                    )
                                })}
                    </div>
                    <div className="flex justify-center my-10 ">
                        <div className="w-3 h-3 rounded-full border-2 border-red-600 bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full border-2 border-red-600 mx-2"></div>
                        <div className="w-3 h-3 rounded-full border-2 border-red-600"></div>
                    </div>
                </div>
        </div>
}



export default Review;