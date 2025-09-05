import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import routes from "./routes";

const App: FC = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <NotFound />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
