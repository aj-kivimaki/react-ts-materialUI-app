import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Notes from "./routes/Notes";
import Create from "./routes/Create";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Notes />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
