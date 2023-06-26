import Style from "./Style"
import { Ellipes_2 } from "./assets"

function Message (){
    return(
        <>
            <div className="shadow-xl w-full">
                <div className="w-[90%] my-10 p-5">
                    <div className="header ">
                        <h1 className="font-[500] text-[20px] font-estdad ">دیدگاه ها</h1>
                    </div>
                    <div className="flex mt-5 flex-row items-start justify-start">
                        <img src={Ellipes_2 } className="mt-2 mr-4" alt="" />
                        <div className="flex flex-col items-start mt-3 mr-5 ">
                            <p className="font-[500] text-[16px] font-estdad text-date">آدم خان رسولی</p>
                            <p className="font-[400] text-[16px] font-estdad text-lightWhite ">13 روز قبل</p>
                            <h3 className="font-[500] mt-4 text-[16px] font-estdad text-gray ">این برنامه ای بسیار مفید،موثر، غیر قابل وصف و فراتر از تصور است لطفا استفاده کنید .</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-xl w-full mt-20">
                <div className="flex flex-col items-start justify-start w-[90%]">
                    <h1 className="border-b-[1px] border-lightgray font-[500] text-2xl font-estdad pb-2 w-full ">دیدگاه ها خود را بنویسید...</h1>
                    <div className="w-full">
                        <textarea cols="30" rows="10" className="w-full font-estdad font-[400] border-[1.5px] border-lightWhite rounded-md text-gray h-[149.67px] p-5 " placeholder="دیدگاه"></textarea>
                        <div className="flex flex-col sm:flex-row items-center gap-x-2">
                            <input className={`${Style.inputs}`} type="text" placeholder="نام" />
                            <input className={`${Style.inputs}`} type="email" placeholder="ایمیل" />
                        </div>
                        <button className={` float-left ${Style.buttons} mt-5`}>نظر خود را بفرست</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message