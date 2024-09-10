import React from "react";
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
    let starPageInfo = ""
    //if statement to determine what is to be displayed to the user
    if (formData.starWarProperty == "people")
    {
        starPageInfo = "people";
    }
    else if (formData.starWarProperty == "films")
    {
        starPageInfo = "films";
    }
    else if (formData.starWarProperty == "species")
    {
        starPageInfo = "species";
    }
    else if (formData.starWarProperty == "starships")
    {
        starPageInfo = "starships";
    }
    else if (formData.starWarProperty == "vehicles")
    {
        starPageInfo = "vehicles";
    }
    else
    {
        starPageInfo = "planets";
    }

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
    const starVariable = formData.starWarProperty;
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

                <div>
                    <p>Information acquired from starwars api is <span id="info">{formData.starWarProperty}</span></p>
                    <p>Details of {starPageInfo}</p>
                    <p>Name : {starwardata.name}</p>
                    <p>homeworld : {starwardata.height}</p>
                </div>
            </section>

            
        </div>
       
        
    )
};
export default StarWarsApp;