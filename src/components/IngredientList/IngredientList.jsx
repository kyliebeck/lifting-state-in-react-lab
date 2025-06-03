// A <ul> that renders the elements held in availableIngredients. Each ingredient rendered in this component should contain a button for adding the ingredient to the stack.



const IngredientList = (props) => {

    return (
        <div>
            <ul>
                {props.availableIngredients.map((ingredient, idx) => (
                    <li style={{ backgroundColor: ingredient.color }}
                        key={idx}>{ingredient.name}

                        <button onClick={() => props.addToBurger(ingredient)}>+</button>
                    </li>

                ))}
            </ul>




        </div>
    )
};

export default IngredientList;