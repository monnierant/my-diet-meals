import React from "react";
import "./Suggestion.scss";
import Recette from "./Recette";

export default class Suggestion extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            sources: {},
            Suggestion: {},
        };
    }

    componentDidMount() {
        fetch(
            process.env.PUBLIC_URL +
                `/fake-api/suggestions/${this.props.Suggestion}.json`
        )
            .then((results) => results.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    loading: false,
                    sources: Object.keys(json.sources),
                    Suggestion: {
                        name: json.name,
                    },
                });
            });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        } else {
            console.log(this.state.sources);
            return (
                <section>
                    <div className="SuggestionTitle">
                        <h2>{this.state.Suggestion.name}</h2>
                    </div>
                    <div className="Sources">
                        {this.state.sources.map((source, index) => {
                            return (
                                <Recette
                                    key={index}
                                    name={source}
                                    Suggestion={this.props.Suggestion}
                                />
                            );
                        })}
                    </div>
                </section>
            );
        }
    }
}
