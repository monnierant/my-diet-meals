import React from "react";
import "./Suggestion.scss";
import Recette from "./Recette";
import { useParams } from "react-router-dom";

export default function Suggestion(props) {
    const [loading, setLoading] = React.useState(true);
    const [recettes, setRecettes] = React.useState([]);
    const [suggestion, setSuggestion] = React.useState({});

    // useParams to get the suggestion name
    const { suggestionName } = useParams();

    React.useEffect(() => {
        fetch(
            process.env.PUBLIC_URL +
                `/fake-api/suggestions/${suggestionName}.json`
        )
            .then((results) => results.json())
            .then((json) => {
                setLoading(false);
                setRecettes(json.recettes);
                setSuggestion({
                    name: json.name,
                });
            });
    }, [suggestionName]);

    if (loading) {
        return <div>Loading...</div>;
    } else {
        return (
            <section>
                <div className="SuggestionTitle">
                    <h2>{suggestion.name}</h2>
                </div>
                <div className="Recettes">
                    {recettes.map((recette, index) => {
                        return (
                            <Recette
                                key={index}
                                name={index}
                                suggestion={suggestionName}
                            />
                        );
                    })}
                </div>
            </section>
        );
    }
}
