import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";

const Estate = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="mt-12">
            <h2 className="text-4xl font-bold text-center">Our Latest Property</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-1 lg:mt-12 gap-6 md:gap-0">

            
            {
                data.map((estate)=><EstateCard key={estate.id} estate={estate}></EstateCard>)
            }
        </div>
        </div>
    );
};

export default Estate;