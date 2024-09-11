function FilmComponent(props)
{
    return(
        <section>
            <h1>Title : {props.title}</h1>
            <p>Director : {props.director}, Release date : {props.release_date}</p>
            <p>Description : {props.opening_crawl}</p>
        </section>
    )
};
export default FilmComponent;