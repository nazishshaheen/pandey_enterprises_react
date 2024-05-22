function Anchor(props){
    return(
        <a href={props.link} className={props.className}>{props.innerText}</a>
    )
}

export default Anchor;