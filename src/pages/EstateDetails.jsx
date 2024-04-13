import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const EstateDetails = () => {
    const {id} = useParams();
 const intId = parseInt(id);
    const data = useLoaderData();
const estate = data.find(singleData=> singleData.id === intId)
const {image} = estate;
    
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default EstateDetails;