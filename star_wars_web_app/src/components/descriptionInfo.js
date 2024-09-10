function DescriptionInfo(arg)
{
    if (arg.starWarProperty === "people")
        {
            return "people";
        }
        else if (arg.starWarProperty === "films")
        {
            return "films";
        }
        else if (arg.starWarProperty === "species")
        {
            return "species";
        }
        else if (arg.starWarProperty === "starships")
        {
            return "starships";
        }
        else if (arg.starWarProperty === "vehicles")
        {
            return "vehicles";
        }
        else
        {
            return "planets";
        }
}

export default DescriptionInfo;