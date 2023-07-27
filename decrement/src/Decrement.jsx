export default ({handleDecrement}) => {
    return (
        <button
            onClick={handleDecrement}
            style={{
                "marginRight": "20px",
                "padding": "10px",
                "border": "none",
                "borderRadius": "10px",
                "backgroundColor": "#f6f5f4",
                "fontSize": "20px",
                "cursor": "pointer",
                "transition": "ease-in-out .2s",
            }}
        >
            Decrement
        </button>
    )
}