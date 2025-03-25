import { Children } from "react";
import App from "../App";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children : [
            {
                index: true,
                element: < Home />
            },{
                path: 'checkout',
                element: <Shop />
            },
        ]
    },
]

export default routes;