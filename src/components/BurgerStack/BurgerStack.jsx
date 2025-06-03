// A <ul> that renders the elements held in stack. Each ingredient rendered in this component should contain a button for removing the ingredient from the stack.



const BurgerStack = (props) => {

    // return if props.stack.length is empty


    return (
        <div>

            {!props.stack.length ? (
                <h2>No Ingredients</h2>
            ) : (

                <ul>
                    {props.stack.map((ingredient, idx) => (

                        < li style={{ backgroundColor: ingredient.color }}
                            key={idx}>{ingredient.name}
                            <button onClick={() => props.removeFromBurger(ingredient)}
                            >-</button>
                        </li>

                    ))}
                </ul>
            )}
        </div >
    )
};

export default BurgerStack;