import Logo from "../assets/Logo.png"

import Facebook from "../assets/sosmed/Facebook.png"
import Instagram from "../assets/sosmed/Instagram.png"
import Twitter from "../assets/sosmed/Twitter.png"

const Footer = () => {

    const logo = [
        { icon:Facebook, link:'https://facebook.com/'},
        { icon:Twitter, link:'https://twitter.com/'},
        { icon:Instagram, link:'https://instagram.com/akbaralisyifa/'}
    ]

    const listProduct = [
        {text:"Download"},
        {text:'Pricing'},
        {text:'Location'},
        {text:'Service'},
        {text:'Countries'},
        {text:'blog'}
    ]

    const listEngange = [
        {text:"LaslesVPN?"},
        {text:"FAQ"},
        {text:"Tutorials"},
        {text:"About Us"},
        {text:"Privace Police"},
        {text:"Terms of Service"}
    ]
    
    const listMony = [
        {text:"Affilie"},
        {text:"FAQ"},
    ]
    return (
        <div> 
            <div class="container relative -z-20">

                <div className="p-5 bg-slate-200 flex justify-center pt-40 pb-16 absolute left-0 right-0 -translate-y-40">
                    {/* kiri */}
                        <div className="w-1/3">
                            <a href=""> <img src={Logo} alt="" className="w-40 pb-5"/></a>
                            <p className="text-md font-light w-72"><span className="font-semibold">LaslesVPN</span> is a private network that has unique Features and high security.</p>

                            <div className="flex pt-5  ">
                                {logo.map((val, index) => {
                                    return <div key={index} className="grayscale hover:grayscale-0 transition duration-300">
                                            <a href={val.link} target="_blank"><img src={val.icon} alt="" className="w-20 "/></a>
                                        </div>
                                })}
                            </div>
                            <p className="text-slate-400 font-light text-md">@2023 Create By <a href="https://instagram.com/akbaralisyifa/" className="font-semibold hover:text-slate-600 transition duration-200">Muhammad Akbar Ali Syifa</a></p>
                        </div>

                        {/* kanan */}
                        <div className="w-1/2">
                            <div className="flex justify-center gap-10">
                                <div className="1/3">
                                    <p className="font-semibold text-xl pb-6">Product</p>
                                    <ul>
                                        {listProduct.map((val,index)=> {
                                            return <div key={index}>
                                                        <li className="pb-3 font-light text-base" >{val.text}</li>
                                                    </div>
                                        })}
                                    </ul>
                                </div>
                                <div className="1/3">
                                    <p className="font-semibold text-xl pb-6">Engange</p>
                                    <ul>
                                        {listEngange.map((val, index) => {
                                            return <div key={index}>
                                                <li className="pb-3 font-light text-base">{val.text}</li>
                                            </div>
                                        })}
                                    </ul>
                                </div>
                                <div className="1/3">
                                    <p className="font-semibold text-xl pb-6">Earn Mony</p>
                                    <ul>
                                        {listMony.map((val, index) => {
                                            return <div key={index}>
                                                <li className="pb-3 font-light text-base">{val.text}</li>
                                            </div>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;