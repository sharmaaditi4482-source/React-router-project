import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Home from './COMPONENTS/HOME/Home'
import About from './COMPONENTS/ABOUT/About'
import Layout from './Layout.jsx'
import Contact from "./COMPONENTS/CONTACT/Contact.jsx";
import GetStarted from "./COMPONENTS/GETSTARTED/GetStarted.jsx";
import Tac from "./COMPONENTS/TAC/Tac.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/terms-and-conditions" element={<Tac />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
// export default { RouterProvider }