function PlanetComponent(props)
{
    return (
        <div>
            <p>Planet Name : {props.name}</p>
            <p>Planet Climate : {props.climate} and Terrain {props.terrain}</p>
            <p>Planet diameter: {props.diameter}</p>
            <p>Planet population: {props.population}</p>
            <p>Planet surface_water : {props.surface_water}</p>
        </div>
    )
};
export default PlanetComponent;