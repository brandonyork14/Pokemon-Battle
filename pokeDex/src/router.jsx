import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PokemonList from "./components/Home";
import PokemonDetail from "./components/Pokemon";
import Team from "./components/Team";


const router = createBrowserRouter([
    {
        path: "/",
        element: < App />,
        children: [
            {
                index: true,
                element: <PokemonList />,
            },
            {
                path: "pokemon/:id",
                element: <PokemonDetail />,
            },
            {
                path: "team",
                element: <Team />,
            },
            // {
            //     path: "battle",
            //     element: <Battle />
            // },
        ],
    },
]);

export default router;