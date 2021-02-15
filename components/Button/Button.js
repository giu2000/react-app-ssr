const Button = props => {
    const {placeholder, onClick} = props;
    return(
        <div className="button" onClick={onClick}>
            {placeholder}
        </div>
    )
}

export default Button;