import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from "react-router";
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
};

export function ErrorBoundary() {
    const error = useRouteError();
    let message = "Oops!";
    let details = "An unexpected error occured.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
    } else if (import.meta.env.DEV && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main>
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre>
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    )
}