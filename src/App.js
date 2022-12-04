import React from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import PaginaBuscador from './paginas/PaginaBuscador';
import Error404 from './paginas/error404';



const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaBuscador />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
  ]);





function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
