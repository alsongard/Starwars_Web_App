function VehicleComponent(props)
{
    return(
        <div>
            <p>Vehicle name : {props.name}</p>
            <p>Vehicle Class : {props.vehicle_class}</p>
            <p>Vehicle manufacturer : {props.manufacturer}</p>
            <p>Vehicle cost : {props.cost_in_credits}</p>
            <p>Vehicle length : {props.length}</p>
        </div>
    )
};
export default VehicleComponent;