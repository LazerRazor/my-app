import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Contests from './components/Contests';
import Problemset from './components/Problemset';
import Leaderboard from './components/Leaderboard';
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
        element: <Problemset/>,
    },
    {
        path: "/leaderboard",
        element: <Leaderboard/>,
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
