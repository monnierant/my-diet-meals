import "./App.scss";
import Menu from "./components/Menu";
import Suggestion from "./components/Suggestion";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/menu/:menuName",
                element: <Menu />,
            },
            {
                path: "/suggestion/:suggestionName",
                element: <Suggestion />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
