import React from "react";
import "./Menu.scss";
import Source from "./Source";
import { useParams } from "react-router-dom";

export default function Menu(props) {
    const [loading, setLoading] = React.useState(true);
    const [sources, setSources] = React.useState([]);
    const [menu, setMenu] = React.useState({});

    // useParams to get the menu name
    const { menuName } = useParams();

    React.useEffect(() => {
        fetch(process.env.PUBLIC_URL + `/fake-api/menus/${menuName}.json`)
            .then((results) => results.json())
            .then((json) => {
                setLoading(false);
                setSources(Object.keys(json.sources));
                setMenu({
                    name: json.name,
                });
            });
    }, [menuName]);

    if (loading) {
        return <div>Loading...</div>;
    } else {
        return (
            <section>
                <div className="MenuTitle">
                    <h2>{menu.name}</h2>
                </div>
                <div className="Sources">
                    {sources.map((source, index) => {
                        return (
                            <Source key={index} name={source} menu={menuName} />
                        );
                    })}
                </div>
            </section>
        );
    }
}
