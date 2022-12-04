import React from "react";
import "./Recette.scss";
import Ingredient from "./Ingredient";

export default function Recette(props) {
    const [loading, setLoading] = React.useState(true);
    const [ingredients, setIngredients] = React.useState([]);
    const [color, setcolor] = React.useState("");

    React.useEffect(() => {
        fetch(
            process.env.PUBLIC_URL +
                `/fake-api/suggestions/${props.suggestion}.json`
        )
            .then((results) => results.json())
            .then((json) => {
                setLoading(false);
                setIngredients(json.recettes[props.name].ingredients);
                setcolor(json.recettes[props.name].color);
            });
    }, [props.suggestion, props.name]);

    if (loading || !ingredients) {
        return <div>Loading...</div>;
    } else {
        return (
            <article>
                <div className="Ingredients" style={{ backgroundColor: color }}>
                    {ingredients.map((ingredient, index) => {
                        console.log(ingredient);
                        return (
                            <Ingredient
                                key={index}
                                name={ingredient.name}
                                quantity={ingredient.quantity}
                                description={ingredient.description}
                                image={ingredient.image}
                            />
                        );
                    })}
                </div>
            </article>
        );
    }
}
