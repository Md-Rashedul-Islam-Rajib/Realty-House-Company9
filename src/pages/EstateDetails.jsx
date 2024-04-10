import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const EstateDetails = () => {
    const {id} = useParams();
 const intId = parseInt(id);
    const data = useLoaderData();
const estate = data.find(singleData=> singleData.id === intId)
console.log(estate);
    
    return (
        <div>
            {id}
        </div>
    );
};

export default EstateDetails;