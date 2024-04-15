import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { TbHomeCheck } from "react-icons/tb";
import { GiCrane } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";

const Services = () => {
    return (
        <div>
             <h2 className='text-center text-4xl font-bold'>Our Services</h2>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
            
                    <div className="flex gap-4">
                        <div><HiOutlineCurrencyBangladeshi className="h-20 w-20 text-[#a5a5a5] hover:text-white hover:bg-[#044FB2] border rounded-xl p-3" /></div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-medium">Brokerage Service</h2>
                            <p className="text-lg text-[#646262]">Full-service brokers offer personalized financial advice and planning based on your goals</p>
                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div>< TbHomeCheck className="h-20 w-20 text-[#a5a5a5] hover:text-white hover:bg-[#044FB2] border rounded-xl p-3" /></div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-medium">Property Management</h2>
                            <p className="text-lg text-[#646262]">Collecting rent from tenants, paying bills and providing financial statements to the owner</p>
                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div><GiCrane className="h-20 w-20 text-[#a5a5a5] hover:text-white hover:bg-[#044FB2] border rounded-xl p-3" /></div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-medium">Construction Service</h2>
                            <p className="text-lg text-[#646262]">Throughout the construction process, inspections are conducted to ensure the work</p>
                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div><FaTools className="h-20 w-20 text-[#a5a5a5] hover:text-white hover:bg-[#044FB2] border rounded-xl p-3" /></div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-medium">Development Services </h2>
                            <p className="text-lg text-[#646262]">Business development services, which help businesses grow their customer base and revenue</p>
                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div><LiaMapMarkedAltSolid className="h-20 w-20 text-[#a5a5a5] hover:text-white hover:bg-[#044FB2] border rounded-xl p-3" /></div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-medium">Land Advisory</h2>
                            <p className="text-lg text-[#646262]">Land advisors can offer advice on how to best manage your land for long-term value</p>
                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div><RiCustomerService2Line className="h-20 w-20 text-[#a5a5a5] hover:text-white hover:bg-[#044FB2] border rounded-xl p-3" /></div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-medium">Online Services</h2>
                            <p className="text-lg text-[#646262]">You can access them from anywhere with an internet connection, 24/7.</p>
                        </div>

                    </div>


             </div>
        </div>
    );
};

export default Services;