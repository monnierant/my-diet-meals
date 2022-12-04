import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "active" : undefined
                    }
                    to="/menu/petit-dej"
                >
                    Petit Déjeuner
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "active" : undefined
                    }
                    to="/menu/dej-diner"
                >
                    Déjeuner
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "active" : undefined
                    }
                    to="/suggestion/collation"
                >
                    Collation
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "active" : undefined
                    }
                    to="/menu/dej-diner"
                >
                    Diner
                </NavLink>
            </nav>
        );
    }
}
