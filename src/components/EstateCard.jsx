/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const {
    id,
    image,
    title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities
  } = estate;
  return (
    <div className="flex justify-center border border-[#dbdce4] mt-8 shadow-xl  md:m-20 lg:m-2 rounded-xl">
      <div>
        <div className="h-60 w-96 relative mx-auto">
          <img className="object-cover rounded-lg mt-4 " src={image} alt="" />
          <div className="text-black font-bold flex items-center gap-1 absolute top-2 left-2 btn btn-sm glass">
            <CiLocationOn className="text-xl" /> {location}
          </div>
          <p className="text-black font-bold absolute top-2 right-2 btn btn-sm glass">
            {status}
          </p>
        </div>

        <div className="flex justify-between pb-4">
        <div className="flex flex-col px-4">
          <h2 className="flex-1 text-black text-lg font-bold">{title}</h2>
          <p className="text-black text-sm font-semibold mb-4">{area}</p>
        {facilities.map((item,idx)=><span className="mb-2 btn btn-xs bg-[#008B9A] text-white w-3/5" key={idx}>{item}</span>)}
        </div>



        <div className="flex justify-between mt-8 px-4 w-2/5">
        
        <div className="flex flex-col">
        <p className="flex-1 flex justify-end text-[#7C81C9] font-semibold">
            {price}
          </p>
          <Link to={`estatedetails/${id}`}>
          <button className="btn btn-sm md:btn-md bg-[#024CB5] text-white">View Details</button>
          </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
