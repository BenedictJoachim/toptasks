import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
    children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <header>
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/dashboard"}>Dashboard</Link>
                    <Link to={"/tasks"}>Tasks</Link>
                    <Link to={"/adminPanel"}>Admin Panel</Link>
                    <Link to={"/login"}>Login</Link>
                </nav>
                <main>{children}</main>
                <footer>
                    <p>&copy 2024 toptasks</p>
                </footer>
            </header>
        </div>
    );
};

export default Layout;