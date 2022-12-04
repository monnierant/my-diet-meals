import React from "react";
import "./Recette.scss";
import Ingredient from "./Ingredient";

export default function Source(props) {
    const [loading, setLoading] = React.useState(true);
    const [ingredients, setIngredients] = React.useState([]);
    const [color, setcolor] = React.useState("");

    React.useEffect(() => {
        fetch(process.env.PUBLIC_URL + `/fake-api/menus/${props.menu}.json`)
            .then((results) => results.json())
            .then((json) => {
                setLoading(false);
                setIngredients(json.sources[props.name].ingredients);
                setcolor(json.sources[props.name].color);
            });
    }, [props.menu, props.name]);

    if (loading || !ingredients) {
        return <div>Loading...</div>;
    } else {
        return (
            <article>
                <h3>{props.name}</h3>

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
