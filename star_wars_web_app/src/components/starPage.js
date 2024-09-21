import "../css/starwars.css";
import StarWarsApp from "./starApp";
function Header()
{
    return (
        <header class=" bg-gradient-to-r from-[#ebcb1a] to-[#c0bb33c2] py-[10px] pl-[25px]">
            <h1 class="capitalize md:text-[33px] sm:text-[16px]">star wars web app</h1>
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
// background:linear-gradient();
// rgb(218, 218, 25), rgba(243, 219, 83, 0.692)