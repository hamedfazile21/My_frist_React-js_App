import Style from "./Style"
import { Vectorheader , Vector , Vector1 , Vector2 , Vector4 } from "./assets"
function Header (){
    return(
        <div className=" bg-btn w-[90%] h-[260px] flex flex-col items-center justify-center rounded-xl mt-5">
            <h1 className="font-bold text-4xl font-estdad text-white ">وبلاگ</h1>
            <img className="mt-3" src={Vectorheader} alt="Vector" />
            <div className="hidden lg:block">
                <img className="absolute top-[80px] right-[350px]" src={Vector} alt="" />
                <img className="absolute top-[80px] left-[350px]" src={Vector1} alt="" />
                <img className="absolute top-[190px] left-[70px]" src={Vector2} alt="" />
                <img className="absolute top-[210px] right-[180px]" src={Vector4} alt="" />
            </div>
        </div>
    )
}
export default Header