/* eslint-disable react/prop-types */
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineRssFeed } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import 'animate.css';

const Agent = ({agent}) => {
    const {name,image,address,phone,email,sales,review,description} = agent;
    return (
        <div className=" lg:w-2/3 mx-auto mt-12 animate__animated animate__slideInRight animate__delay-0.5s">
            <div className='bg-[#f9f9f9]'>
            <div className='flex'>
                <div className="md:w-1/2">
                    <img className='h-32 w-40  md:h-64 md:w-96' src={image} alt="" />
                    </div>
                    
                <div className='grid grid-cols-2 w-full p-4 lg:p-5 items-center '>
                    <div className="col-span-1 flex flex-col gap-2 items-start text-start">

                        <h2 className=" text-sm font-semibold lg:font-normal lg:text-2xl">{name}</h2>

                        <p className="flex items-center justify-center text-sm "><FaStar className="text-[#0850B6]" /><FaStar className="text-[#0850B6]" /><FaStar className="text-[#0850B6]" /><FaStar className="text-[#0850B6]" /><FaStar className="text-[#dadada]" /> <span className="mt-1 ml-1 text-[#0850B6] font-semibold">({review})</span></p>

                        <p className="flex items-center justify-center gap-2 text-sm"><div className="bg-black text-white text-sm px-1">{sales}</div><span className="font-semibold">Recent Sales</span></p>

                    </div>
                    <div className=" col-span-1 flex flex-col gap-2 items-start">
                    <p className="flex items-center justify-center md:gap-2 text-sm md:text-base"><IoLocationSharp className="text-[#0850B6] text-xl md:text-base" /> <span>{address}</span></p>
                    <p className="flex items-center justify-center md:gap-2 text-sm md:text-base"><FaPhoneAlt className="text-[#0850B6]" /> <span>{phone}</span></p>
                    <p className="hidden md:flex items-center justify-center md:gap-2 text-sm md:text-base"><MdEmail className="text-[#0850B6]" /> <span>{email}</span></p>
                    </div>
                    <div className="col-span-2 mt-2">
                        <h2 className="text-start text-sm md:text-base">{description}</h2>
                    </div>
                    <div className="col-span-1 mt-2">
                        <div className="flex gap-4">
                            <a href="#">

                            <FaFacebookF className="text-[#0850B6] text-lg" />
                            </a>
                            <a href="#">
                            <FaTwitter className="text-[#0850B6] text-lg" />

                            </a>
                          <a href="#">

                            <MdOutlineRssFeed className="text-[#0850B6] text-lg" />
                          </a>
                        </div>
                    </div>
                </div>
            </div>
                    
        </div>
        </div>
    );
};

export default Agent;