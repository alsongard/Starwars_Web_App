function StarShipComponent(props)
{
    return (
        <div>
            <p>Starship name : {props.starships}</p>
            <p>Starship model : {props.model}</p>
            <p>Starship class: {props.starship_class}</p>
            <p>Starship cost: {props.cost_in_credits}</p>
            <p>Starship crew: {props.crew}</p>
            <p>Starship passsenger: {props.passengers}</p>
            <p>Starship hyperdrive: {props.hyperdrive_rating}</p>
        </div>
    )
};
export default StarShipComponent;