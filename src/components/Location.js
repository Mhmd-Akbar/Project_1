import HugeGlobal from "../assets/Huge_Global.png";
import Netflix from "../assets/sosmed/Netflix.png"
import reddit from "../assets/sosmed/reddit.png"
import Spotify from "../assets/sosmed/Spotify.png"
import Discord from "../assets/sosmed/Discord.png"
// import Facebook from "../assets/sosmed/Facebook.png"
// import Instagram from "../assets/sosmed/Instagram.png"
// import Twitter from "../assets/sosmed/Twitter.png"


const Location = () => {
    const brand = [
        { icon:Discord},
        { icon:Netflix,
        size: '40'},
        { icon:reddit,
        size:'40'},
        { icon:Spotify,
        size:'40'}
    ]

    return (
        <div>
            <div class="container  max-w-5xl mx-auto my-26 py-16">
                <h1 className="text-center font-bold pb-5 text-4xl ">Huge Global Network <span className="block">of Fast VPN</span></h1>
                <p className="mx-auto text-center w-2/4 pb-10 font-light text-xl">See <span className="font-semibold">MyCoding</span> everywhere to make it easier for you when you move location.</p>
                <div>
                    <img src={HugeGlobal} alt=""/>
                </div>
                <div className="mt-10 flex justify-evenly items-center gap-5    ">
                    {brand.map((val, index) => {
                        return  <a key={index} href="" className="block">
                                    <img src={val.icon} alt="" className={`w-${val.size}`}/>
                                </a>

                    })}
                </div>
            </div>
        </div>
    )
}


export default Location;