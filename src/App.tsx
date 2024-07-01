import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import { GlobalStyles } from "./styles/globalStyles";
import SkillsPage from "./pages/SkillsPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/skills",
        element: <SkillsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
