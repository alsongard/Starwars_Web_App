import React from "react";
import DescriptionInfo from "./descriptionInfo";
import PeopleComponent from "./peopleComponent";
import VehicleComponent from "./vehicleComponent";
import StarShipComponent from "./starsshipComponent";
import SpeciesComponent from "./speciesComponent";
import PlanetComponent from "./planetComponent";
import FilmComponent from "./filmComponent";
function StarWarsApp()
{
    const [starwardata, setStarWarsData] = React.useState({});
    const [formData, setFormData] = React.useState({
        starWarProperty: "people"
    });
    console.log(starwardata);
    const [count, setCount] = React.useState(1);
    function addCount()
    {
        setCount((count)=>{
            return count + 1;
        });
    }
    console.log(count);
    const result = DescriptionInfo(formData);
    //if statement to determine what is to be displayed to the user
    

    function handleChange(event)
    {
        //object destructuring
        const {name, value} = event.target;
        setFormData((prevFormData)=>{
            return {
                [name] : value
            }
        })
    };
    React.useEffect(()=>{
        fetch(`https://swapi.dev/api/${formData.starWarProperty}/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [formData, count]);
    function handleSubmit(event)
    {
        event.preventDefault();
        console.log(formData.starWarProperty);
    }

    return (
        <div>
            <section className="home">
                <div className="info-text">
                    <h2>Welcome to Star Wars Web App where you can get all details of all the stars wars movies.</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Select One of the options:</label>
                    <select name="starWarProperty" onChange={handleChange}>
                        <option value="">--Choose--</option>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="species">species</option>
                        <option value="starships">starships</option>
                        <option value="vehicles">vehicles</option>
                        <option value="films">films</option>
                    </select>

                    <button>Submit</button>
                </form>
            </section>

            <section className="getCharacter">
                <p>Change the information displayed by clicking the add button</p>
                <p>Value Number is : {count}</p>
                <button onClick={addCount}>Click To Change Data</button>
                {formData.starWarProperty === "people" && <PeopleComponent name={starwardata.name} homeworld={starwardata.homeworld} gender={starwardata.gender}/> }
                {formData.starWarProperty === "planets" && <PlanetComponent name={starwardata.name} climate={starwardata.climate}  diameter={starwardata.diameter} population={starwardata.population} surface_water={starwardata.surface_water}/>}
                {formData.starWarProperty === "species" && <SpeciesComponent name={starwardata.name} designation={starwardata.designation} classification={starwardata.classification} lifespan={starwardata.lifespan} language={starwardata.language} />}
                {formData.starWarProperty === "starships" && <StarShipComponent starships={starwardata.name} model={starwardata.model} starship_class={starwardata.starship_class} cost_in_credits={starwardata.cost_in_credits} crew={starwardata.crew} passengers={starwardata.passengers} hyperdrive_rating={starwardata.hyperdrive_rating} />}
                {formData.starWarProperty === "films" && <FilmComponent name={starwardata.title} director={starwardata.director} opening_crawl={starwardata.opening_crawl}  />}
                {formData.starWarProperty === "vehicles" && <VehicleComponent name={starwardata.name} vehicle_class={starwardata.vehicle_class} manufacture={starwardata.manufacture} cost_in_credits={starwardata.cost_in_credits} length={starwardata.length}/>}
            </section>
        </div> 
    )
};
export default StarWarsApp;