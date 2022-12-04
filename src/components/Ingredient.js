import React from "react";
import "./Ingredient.scss";

export default function Ingredient(props) {
    return (
        <div className="ingredient">
            {/* <img src={props.image} alt=""></img> */}
            <div
                className="ingredient-image"
                style={{ backgroundImage: "url(" + props.image + ")" }}
            >
                <div className="ingredient-image-info">
                    <h4>{props.name}</h4>
                    <div className="ingredient-image-info-quantity">
                        {props.quantity && "(" + props.quantity + ")"}
                    </div>
                </div>
            </div>
            {props.description && (
                <div className="description">{props.description}</div>
            )}
        </div>
    );
}
