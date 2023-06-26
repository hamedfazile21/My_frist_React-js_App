import Style from "./Style"
import { Logo } from "./assets"
function Navbar (){
    return(
        <>
            <div className="w-screen flex flex-row items-center justify-between">
                <div className="w-[25%]  ">
                <img className="w-[56px] h-[51.32px]" src={Logo} alt="logo"/>
                </div>
                    <div className="hidden md:flex flex-row items-center  w-screen " id="menu">
                    <div className="w-[60%]">
                        <ul className="flex flex-row items-center gap-x-8 lg:gap-x-20 xl:gap-x-28 justify-center">
                            <li><a href="" className={`${Style.menu} text-gray`}>صفحه اصلی</a></li>
                            <li><a href="" className={`${Style.menu} text-gray`}>خدمات</a></li>
                            <li><a href="" className={`${Style.menu} text-btn`}>وبلاگ</a></li>
                            <li><a href="" className={`${Style.menu} text-gray`}>در باره ما</a></li>
                        </ul>
                    </div>
                    <div className="w-[26.5%]">
                        <button className={`float-left ${Style.buttons}`}>ارتباط با ما</button>
                    </div>
                </div>
                <div className="flex md:hidden ">
                    <button id="menu" className={`${Style.buttons} cursor-pointer`}>منو</button>
                </div>
            </div>
            <div id="mobil_manu" className="hidden flex-col items-center justify-center md:hidden  w-full h-[90vh] absolute top-[10vh] right-0 left-0 bottom-0 bg-white">
                <ul className="flex flex-col items-center justify-center gap-y-10 w-[80%]">
                    <li className={`${Style.mobilManu}`}><a href="#" className={`${Style.menu} group-hover:text-white  text-gray`}>صفحه اصلی</a></li>
                    <li className={`${Style.mobilManu}`}><a href="#" className={`${Style.menu} group-hover:text-white  text-gray`}>خدمات</a></li>
                    <li className={`${Style.mobilManu}`}><a href="#" className={`${Style.menu} group-hover:text-white  text-btn`}>وبلاگ</a></li>
                    <li className={`${Style.mobilManu}`}><a href="#" className={`${Style.menu} group-hover:text-white  text-gray`}>در باره ما</a></li>
                </ul>
            </div>
        </>
    )
}
export default Navbar