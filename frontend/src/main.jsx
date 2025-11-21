import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Signin from './page/Signin.jsx'
import Signup from './page/Signup.jsx'
import Dashboard from './page/Dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { path: "/", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "dashboard", element: 
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
       },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
