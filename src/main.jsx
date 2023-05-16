import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'
import { LoginPage } from './pages/LoginPage'
import { AddAnimal } from './pages/AddAnimal'
import { HomePage } from './pages/HomePage'
import { AnimalsPage } from './pages/AnimalsPage'
import { RegisterPage } from './pages/RegisterPage'

const userLogged = localStorage.getItem('userLogged');

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/animals',
        element: userLogged ? <AnimalsPage/> : <LoginPage/>,
        children: [
          {
            path: 'add',
            element: <AddAnimal/>
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
