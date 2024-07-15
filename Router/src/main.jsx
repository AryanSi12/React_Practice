import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Foundn from './Fondn/Foundn.jsx'
import Home from './Items/Home.jsx'
import About from './Items/About.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './Items/Contact.jsx'
//import Layout from './Dummy/Dummy.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<Foundn/>,
    children:[{
      path:"",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/Contact",
      element:<Contact/>
    }]
  }
]
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
