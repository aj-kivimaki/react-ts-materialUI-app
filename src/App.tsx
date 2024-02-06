import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Notes from "./routes/Notes";
import Create from "./routes/Create";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Root />
        </Layout>
      ),
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

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
};

export default App;
