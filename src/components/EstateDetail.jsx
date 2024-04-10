

const EstateDetail = ({estate}) => {
const {image,title,segment_name,description,price,status,area,location,facilities} = estate;
    return (
        <div>
<div>
    <h2>{title}</h2>
</div>
            <div className="h-96 w-96">
            <img className="object-cover rounded-lg" src={image} alt="" />
            </div>

        </div>
    );
};

export default EstateDetail;