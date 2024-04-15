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
    <div className="flex justify-center border border-[#dbdce4] mt-8 shadow-xl p-4 m-2 md:m-20 lg:m-2 rounded-xl">
      <div>
        <div className="h-60 w-96 relative mx-auto">
          <img className="object-cover rounded-lg " src={image} alt="" />
          <div className="text-black font-bold flex items-center gap-1 absolute top-2 left-2 btn btn-sm glass">
            <CiLocationOn className="text-xl" /> {location}
          </div>
          <p className="text-black font-bold absolute top-2 right-2 btn btn-sm glass">
            {status}
          </p>
        </div>

        <div className="flex">
          <h2 className="flex-1 text-black text-lg font-bold">{title}</h2>
          <p className="flex-1 flex justify-end text-[#7C81C9] font-semibold">
            {price}
          </p>
        </div>
        <div className="flex justify-between mt-8">
        <div className="w-2/3">
        <p className="text-black text-sm font-semibold mb-4">{area}</p>
        {facilities.map((item,idx)=><span className="mr-1 btn btn-xs bg-[#C2E7C9]" key={idx}>{item}</span>)}
        </div>
        <div className="flex justify-center items-center">
          <Link to={`estatedetails/${id}`}>
          <button className="btn btn-sm md:btn-md bg-[#024CB5] text-white">View Details</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
