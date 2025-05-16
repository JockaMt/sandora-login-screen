const Button = ({text, handleSubmit}) => {
    return (
        <button onClick={(e) => handleSubmit(e)} type="submit">{text}</button>
    )
}

export default Button;