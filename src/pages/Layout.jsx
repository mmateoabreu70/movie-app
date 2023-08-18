import { Outlet } from "react-router-dom";

import '../styles/Layout.css';

function Layout () {
    return (
        <>
            <header>
                <h1>Movie Search</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;