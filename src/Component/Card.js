
function Card(props) {
    const classes = "card" + (props.className ? ` ${props.className}` : '') ;
    // console.log(props.classes);
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;