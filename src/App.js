import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Screens/HomePage";
import SignupPage from "./Screens/SignupPage";
// import profileScreen from "./screens/PortfolioScreen";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
