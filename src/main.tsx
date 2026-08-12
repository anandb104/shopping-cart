import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Shop from './components/Shop.tsx';
import Cart from './components/Cart.tsx';
import { createBrowserRouter,RouterProvider } from 'react-router';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
    {path:"/",element:<Home/>},
    {path:"/shop",element:<Shop/>},
    {path:"/about",element:<About/>},
    {path:"/cart",element:<Cart/>},
    ]
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
