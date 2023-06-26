import Style from "./Style"

function NavbarRight(){
    return(
        <div className="flex flex-col items-start justify-start ">
            <div className="flex flex-col items-start justify-start w-full py-5 px-2 shadow-lg p-5">
                <div className="border-b-[1px] border-borderColor  w-[100%] py-4  ">
                    <h3 className="font-estdad border-r-2 border-btn px-4  text-muted ">عنوانین</h3>
                </div>
                <div className=" mt-3 border-btn px-2 flex flex-col items-start justify-start gap-y-10">
                    <a href="#one" className={`${Style.activeMenuIconRight}`}>سیستم مدیریت انبار (WMS) چیست؟</a>
                    <a href="#tow" className={`${Style.activeMenuIconRight}`}>ابزار WMS چگونه کار می کند؟</a>
                    <a href="#three" className={`${Style.activeMenuIconRight}`}>سیستم مدیریت  (WMS) چیست؟</a>
                    <a href="#four" className={`${Style.deActiveMenuIconRight}`}>مزایای WMS</a>
                    <a href="#five" className={`${Style.deActiveMenuIconRight}`}> نتیجه</a>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start mt-5 shadow-lg w-full p-5">
                <div className="border-b-[1px] border-borderColor  w-[100%] py-4  ">
                    <h3 className="font-estdad border-r-2 border-btn px-4  text-muted ">مقالات جدید</h3>
                </div>
                <div className="flex flex-col items-start justify-start gap-y-10">
                    <div className={`${Style.borderButtom}`}>
                        <h3 className={`${Style.artical}`}>سیستم برنامه ریزی منابع سازمانی <br/>(ERP)</h3>
                        <p className={`${Style.date}`}>1401/12/12</p>
                    </div>
                    <div className={`${Style.borderButtom}`}>
                        <h3 className={`${Style.artical}`}>سیستم برنامه ریزی منابع سازمانی <br/>(ERP)</h3>
                        <p className={`${Style.date}`}>1401/12/12</p>
                    </div>
                    <div className={`${Style.borderButtom}`}>
                        <h3 className={`${Style.artical}`}>سیستم برنامه ریزی منابع سازمانی <br/>(ERP)</h3>
                        <p className={`${Style.date}`}>1401/12/12</p>
                    </div>
                    <div className={`${Style.borderButtom}`}>
                        <h3 className={`${Style.artical}`}>سیستم برنامه ریزی منابع سازمانی <br/>(ERP)</h3>
                        <p className={`${Style.date}`}>1401/12/12</p>
                    </div>
                    <div className={`${Style.borderButtom}`}>
                        <h3 className={`${Style.artical}`}>سیستم برنامه ریزی منابع سازمانی <br/>(ERP)</h3>
                        <p className={`${Style.date}`}>1401/12/12</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavbarRight