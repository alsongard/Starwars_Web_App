import "../css/starwars.css";
import StarWarsApp from "./starApp";
function Header()
{
    return (
        <header>
            <h1>star wars web app</h1>
        </header>
    )
}

function Page()
{
    return (
        <div>
            <Header/>
            <StarWarsApp/>

        </div>
    )
}
export default Page;