import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Contests from './components/Contests';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
    },
    {
        path: "/contests",
        element: <Contests/>,
    },
    {
        path: "/problemset",
        element: <h1>Hello World 2</h1>,
    },
    {
        path: "/leaderboard",
        element: <h1>Hello World 3</h1>,
    }
]);

function App() {

  return (
    <>
    <Navbar/>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
