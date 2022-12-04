import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from "react-router-dom";
import { Layout } from "../layout/Layout";
import Home from "../pages/Home";
import { Pokemon } from "../pages/pokemon/Pokemon";
import { Todo } from "../pages/Todo";

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/poke-api" element={<Pokemon />} />
          <Route path="/todo" element={<Todo />} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
