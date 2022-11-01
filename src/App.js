import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddUsers from './Components/AddUsers/AddUsers';
import Home from './Components/Home/Home';
import Update from './Components/Update/Update';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/users')
    },
    {
      path: '/add_users',
      element: <AddUsers></AddUsers>
    },
    {
      path: '/update/:id',
      element: <Update></Update>
    }
  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
