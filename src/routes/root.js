import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function Root() {
    return (
        <div className="App">
            <Nav />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
