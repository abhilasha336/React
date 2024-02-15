import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import $ from 'jquery';
window.$ = $;
window.jQuery = $;


// /here only outlet component changes that is if we specify paths and components,for each navigation-
//header and footer remains same, sandwitched content changes for each routepath
//basically no reloading and refreshing occurs,url path changes beacause this change is fack change,no refreshing occurs
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
     
      <Route path='*' element={<div>Not Found</div>}/>
 </Route>
   )
)






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>  
  </React.StrictMode>,
)
