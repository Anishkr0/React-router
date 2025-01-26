import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Feature from './Components/Feature.jsx'
import Hero from './Components/Hero.jsx'
import Blog from './Components/Blog.jsx'
import Team from './Components/Team.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Login from './Components/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <Hero/>

      },
      {
        path:'feature',
        element: <Feature/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
      {
        path: 'team',
        element: <Team/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'login',
        element: <Login/>
      }

    ]
  }
])
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)

