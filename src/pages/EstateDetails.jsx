import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaLandmark, FaRegCalendarAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import 'animate.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from 'react-hot-toast';


const EstateDetails = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  const data = useLoaderData();
  const estate = data.find((singleData) => singleData.id === intId);
  const { image, price, location, facilities, area,status1,info,agent,address,date_time } = estate;
  
const calendar = () => {
  toast.success('Event added to your calender successfully')
}
const callToAgent = () => {
  toast.success('Request send to agent successfully')
}


  return (
    <div className="animate__animated animate__slideInRight">
      <Helmet> 
            <title>Estate Details</title>
          </Helmet>
      <p className="my-4"> <Link to='/' className="flex items-center"><IoMdArrowRoundBack /> <span className="font-semibold"> Estate details /</span> Home</Link> </p>
      <div className="grid lg:grid-cols-4 lg:gap-10 lg:mx-16 p-2">
        <div className=" lg:col-span-3">
          <div>
            <img
              className="w-full rounded-xl"
              src={image}
              alt="property_image"
            />
          </div>
          <div className="flex justify-between px-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mt-4">USD {price}</h2>
              <div className="flex items-center text-sm md:text-base gap-1 md:gap-4 font-medium my-2">
                <CiLocationOn /> <span>{location}</span>
              </div>
              <div className="my-2">
                {facilities.map((facility, idx) => (
                  <span className="mt-2 md:mr-1 btn btn-sm bg-[#C2E7C9]" key={idx}>
                    {" "}
                    {facility}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 font-medium my-2">
                <FaLandmark />
                <span>{area}</span>
              </div>
            </div>
                 <div className="flex items-center mr-16 md:mr-0"> 
                <button className="flex items-center md:gap-1 btn btn-sm md:btn-md text-white bg-[#044FB2]"><BsFillTelephoneFill /> {status1 } this property</button>
                </div>
          </div>
          <hr />
          <div className="my-4 px-4">
                <h2 className="text-xl font-semibold">Estate Information</h2>
                <p className="my-4">{info}</p>
          </div>
        </div>
        <div className="col-span-1">
        <div className="flex flex-col gap-4">
        <div className="border border-[#044FB2] rounded-xl p-4">
                <h2 className="text-xl font-semibold mb-2">Agent details</h2>
                <p className="font-medium">{agent}</p>
                <p className="text-[#646262] mb-2">{address}</p>
                <button onClick={callToAgent} className="btn btn-sm md:btn-md border-[#044FB2] bg-white"><BsFillTelephoneFill /> Contact Agent</button>
          </div>
          <div className="border border-[#044FB2] rounded-xl p-4">
                <h2 className="text-xl font-semibold mb-2">Inspection times</h2>
                <p className="font-medium">Inspections actions are still happening</p>
                <p className="text-[#646262] mb-2">{date_time}</p>
                <button onClick={calendar} className="btn btn-sm md:btn-md border-[#044FB2] bg-white"><FaRegCalendarAlt /> Add to calendar </button>
          </div>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144626.460781312!2d-91.19032416177033!3d39.67391788481728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50bcd9f81b1d%3A0x7e102fcecb32ec72!2sIndiana%2C%20USA!5e0!3m2!1sen!2sbd!4v1713086171424!5m2!1sen!2sbd" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-xl"></iframe>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
