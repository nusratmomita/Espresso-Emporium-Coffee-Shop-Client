import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider} from "react-router";
import Root from './Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx';
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: ()=>fetch('http://localhost:3000/coffee'),
        Component: Home
      },
      {
        path: '/addCoffee',
        Component: AddCoffee
      },
      {
        path: '/updateCoffee/:id',
        loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: '/viewDetails/:id',
        loader: ({params})=> fetch(`http://localhost:3000/coffee/${params.id}`),
        Component: ViewDetails
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}>
    <App/>
   </RouterProvider>
)
