import Style from './Style'
import { icon1 } from "./assets"

function Search (){
    return(
        <div className="w-[52%] h-[145px] absolute top-[300px] rounded-lg">
            <div className="hidden md:flex flex-row justify-between items-center shadow-md py-[12px] px-[18px] bg-white rounded-lg font-estdad w-full ">
                <input className="w-[100%] lg:w-[80%] p-[10px] gap-[10px] outline-none " type="search" placeholder="جستجو..."/>
                <button className={`${Style.buttons} flex flex-row items-center justify-between w-[120px]`}> <img src={icon1} alt="" />جستجو </button>
            </div>
            <div className='hidden md:flex flex-wrap w-full items-center  justify-center gap-y-5 mt-5 gap-x-2'>
                <button className={`${Style.activeMenuIcon}`}>همه</button>
                <button className={`${Style.deActiveMenuIcon}`}>انبار داری</button>              
                <button className={`${Style.deActiveMenuIcon}`}>منابع انسانی</button>              
                <button className={`${Style.deActiveMenuIcon}`}>گزارشات</button>              
                <button className={`${Style.deActiveMenuIcon}`}>بخش مالی</button>    
                <button className={`${Style.deActiveMenuIcon}`}>کارمندان</button>              
            </div>
        </div>
    )
}
export default Search