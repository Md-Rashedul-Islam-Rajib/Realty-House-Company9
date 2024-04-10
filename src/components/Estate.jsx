import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";

const Estate = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="mt-2 md:mt-12">
            <h2 className="text-3xl font-bold text-center">Our Listing</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-6">

            
            {
                data.map((estate)=><EstateCard key={estate.id} estate={estate}></EstateCard>)
            }
        </div>
        </div>
    );
};

export default Estate;