import React from 'react'
import App from './App.jsx'
import Home from './Routes/Home/Home'
// import Work from './Routes/Work/Work'
// import WorkDetails from './Routes/Work/WorkDetails'
// import About from './Routes/About/About'
// import Contact from './Routes/Contact/Contact'
import ErrorPage from './Routes/ErrorPage'
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


// Cria uma instância do roteador de navegação usando o createBrowser Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  // {
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "/about",
  //       element: <About />
  //     },
  //     {
  //       path: "/work",
  //       element: <Work />
  //     },
  //     {
  //       path: "/work/:id",
  //       element: <WorkDetails />
  //     },
  //     {
  //       path: "/contact",
  //       element: <Contact />,
  //     },
  //   ]
  // }
]);

// Renderiza a raiz do aplicativo com reatador de navegação.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
