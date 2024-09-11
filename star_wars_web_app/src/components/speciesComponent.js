function SpeciesComponent(props)
{
    return (
        <div>
            <p>Species Name : {props.name}</p>
            <p>Species Designation : {props.designation}</p>
            <p>Species classification : {props.classification}</p>
            <p>Species lifespan : {props.lifespan}</p>
            <p>Species language : {props.language}</p>
        </div>
    )
};
export default SpeciesComponent;