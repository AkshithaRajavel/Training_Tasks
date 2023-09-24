function Card(props){
    return (
        <div class="col">
            <img src={props.image} alt={props.title}/>
                <a target="_blank" href={props.link}>
                    <img src="static/images/github.png" class="icon" /></a>
                <div class="project-description">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
export default Card