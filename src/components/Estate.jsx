import { useLoaderData } from "react-router-dom";
import EstateDetail from "./EstateDetail";

const Estate = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="mt-2 md:mt-12">
            <h2 className="text-3xl font-bold text-center">Our Listing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12">

            
            {
                data.map((estate)=><EstateDetail key={estate.id} estate={estate}></EstateDetail>)
            }
        </div>
        </div>
    );
};

export default Estate;