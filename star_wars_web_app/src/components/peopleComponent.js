function PeopleComponent(props)
{
    return (
        <div>
            {/* <p>Information acquired from starwars api is <span id="info">{props.}</span></p> */}
            <p>Name : {props.name}</p>
            <p>Homeworld : {props.homeworld}</p>
            <p>Gender : {props.gender}</p>
        </div>
    )
}
export default PeopleComponent;