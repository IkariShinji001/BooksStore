function Button({ className, background, title }) {
    return (
        <button
            className={className}
            style={{ backgroundColor: background }}
        >{title}</button>
    )
}

export default Button;