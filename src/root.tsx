import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Layout from "./components/Layout";
import App from "./App";

export default function Root() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>toptasks</title>
                <Meta />
                <Links />
            </head>
            <body>
                <Layout>
                    <App />
                    <Outlet />
                </Layout>
                <ScrollRestoration />
                <Scripts />
            </body>

        </html>
    )
}