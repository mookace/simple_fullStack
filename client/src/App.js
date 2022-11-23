import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Add } from "./pages/Add";
import { Book } from "./pages/Book";
import { Update } from "./pages/Update";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Book />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);

  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
