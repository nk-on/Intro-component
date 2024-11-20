export default function Container(){
    return <div className="flex flex-col justify-center	 gap-3 w-[50%]" >
        <div className="w-[90vw] h-[60px] md:w-[540px]  bg-[#5E54A4]">
            <p className="text-white flex justify-center items-center h-full shadow-button-shadow">Try it free 7 days then $20/mo. thereafter</p>
        </div>
        <div className="w-[90vw]  h-[474px] md:w-[540px]  shadow-container-shadow bg-white">
            <form className="flex gap-[20px] flex-col justify-center items-center w-full h-full">
                <input type="text" placeholder="First Name" className="w-[90%] h-[56px] rounded-[5px] pl-[25px] border border-black-500 " />
                <input type="text" placeholder="Last Name" className="w-[90%] h-[56px] rounded-[5px] pl-[25px] border border-black-500" />
                <input type="email" placeholder="Email" className="w-[90%] h-[56px] rounded-[5px] pl-[25px] border border-black-500" />
                <input type="password" placeholder="Password" className="w-[90%] h-[56px] rounded-[5px] pl-[25px] border border-black-500" />
                <button className="bg-[#38CC8B] w-[90%] h-[56px] rounded-[5px] shadow-button-shadow">CLAIM YOUR FREE TRIAL</button>
            </form>
        </div>
    </div>
}