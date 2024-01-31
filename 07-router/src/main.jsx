import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Start from './components/Start/Start'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Hub,{HubInfoLoader} from './components/Hub/Hub'





//here only outlet component changes that is if we specify paths and components,for each navigation-
//header and footer remains same, sandwitched content changes for each routepath
//basically no reloading and refreshing occurs,url path changes beacause this change is fack change,no refreshing occurs
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Start/>}/>  
      <Route path='home' element={<Home/>}/>   
      <Route path='about' element={<About/>}/>   
      <Route path='contact' element={<Contact/>}/>  
      <Route path='user/' element={<User/>}>
        <Route path=':userid' element={<User/>}/>
      </Route>
      <Route  loader={HubInfoLoader}
              path='hubdata' 
              element={<Hub/>
              }/>
      <Route path='*' element={<div>Not Found</div>}/>


 


    

 


    </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>  
  </React.StrictMode>,
)
