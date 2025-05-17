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
import SignUp from './SignUp/SignUp.jsx';
import SignIn from './SignIn/SignIn.jsx';
import AuthProvider from './Auth/AuthProvider.jsx';
import Users from './Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: ()=>fetch('https://espresso-emporium-server-pearl.vercel.app/coffee'),
        Component: Home
      },
      {
        path: '/addCoffee',
        Component: AddCoffee
      },
      {
        path: '/updateCoffee/:id',
        loader: ({params}) => fetch(`https://espresso-emporium-server-pearl.vercel.app/coffee/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: '/viewDetails/:id',
        loader: ({params})=> fetch(`https://espresso-emporium-server-pearl.vercel.app/coffee/${params.id}`),
        Component: ViewDetails
      },
      {
        path: '/signup',
        Component: SignUp
      },
      {
        path: '/signin',
        Component: SignIn
      },
      {
        path: '/users',
        loader: () => fetch('https://espresso-emporium-server-pearl.vercel.app/users'),
        Component: Users
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
   <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
)
