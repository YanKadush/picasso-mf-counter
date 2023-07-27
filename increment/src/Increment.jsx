export default ({handleIncrement}) => {
    return (
        <button
            onClick={handleIncrement}
            style={{
                "padding": "10px",
                "border": "none",
                "borderRadius": "10px",
                "backgroundColor": "rgba(128,255,150,0.52)",
                "fontSize": "20px",
                "cursor": "pointer",
                "transition": "ease-in-out .2s",
            }}
        >
            Increment
        </button>
    )
}