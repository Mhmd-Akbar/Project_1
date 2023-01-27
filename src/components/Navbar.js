
import ImgLogo from "../assets/Logo.png";

function Navbar() {
const menus = ["About","Features","Pricing","Testimonials", "Help"]

    return (
        <div class= "scroll-smooth">
            <nav className="container max-w-full mx-auto  flex justify-around py-6 px-2 items-center  fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 ">
                <div>
                    <a href="#">
                    <img src={ImgLogo} alt="" className="w-40"/>    
                    </a>
                </div>
                <div>
                    <ul className="flex text-slate-600 ">
                        {menus.map((val, index) => (
                            <li  key={index}>
                                <a href="" className="px-3 hover:text-black transition duration-200">{val}</a>
                            </li>
                        ) )}
                    </ul>
                </div>
                <div>
                    <button className="mr-4 font-semibold text-slate-500 hover:text-slate-700 transition duration-200">Sign In</button>
                    <button className="border border-red-400 px-8 py-2 rounded-full bg-white font-semibold text-red-500 hover:bg-red-500 hover:text-white transition duration-300 ">Sign Up</button>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;