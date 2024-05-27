import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import Electrician from './components/servicesPages/Electrician.jsx'
import MechanicalWorker from './components/servicesPages/MechanicalWorker.jsx'
import Cleaner from './components/servicesPages/Cleaner.jsx'
import MadServent from './components/servicesPages/MadServent.jsx'
import Cook from './components/servicesPages/Cook.jsx'
import ConstructionWorker from './components/servicesPages/ConstructionWorker.jsx'
import Plumber from './components/servicesPages/Plumber.jsx'
import Welder from './components/servicesPages/Welder.jsx'
import ACTechnicians from './components/servicesPages/ACTechnicians.jsx'
import Contact from './components/Contact.jsx'
import Login from './components/Admin/Login.jsx'
import Dashboard from './components/Admin/dashboard/Dashboard.jsx'
import PgDashboard from './components/Admin/dashboard/dashboard-data/PgDashboard.jsx'
import JobApplicationData from './components/Admin/dashboard/Job-application-data/JobApplicationData.jsx'
import ContactUsData from './components/Admin/dashboard/ContactUs-data/ContactUsData.jsx'
import webStore from './store/index.js'
import {Provider} from 'react-redux'
import Users from './components/Admin/dashboard/users/Users.jsx'
import JobApplicationForm from './components/JobApplicationForm.jsx'
let router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: '/',
    element: <Home/>
  },{
    path: '/about-us',
    element: <AboutUs/>
  },{
    path: '/contact-us',
    element: <Contact />
  },{
    path: '/services/electrician',
    element: <Electrician/>
  },{
    path: '/services/mechanical-worker',
    element: <MechanicalWorker/>
  },{
    path: '/services/cleaner',
    element: <Cleaner/>
  },{
    path: '/services/mad-servent',
    element: <MadServent/>
  },{
    path: '/services/cook',
    element: <Cook/>
  },{
    path: '/services/construction-worker',
    element: <ConstructionWorker/>
  },{
    path: '/services/plumber',
    element: <Plumber/>
  },{
    path: '/services/welder',
    element: <Welder/>
  },{
    path: '/services/ac-technicians',
    element: <ACTechnicians/>
  },{
    path: '/careers/job-application-form',
    element: <JobApplicationForm/>,
    children: [{
      path: '/careers/job-application-form',
      element: <JobApplicationForm/>,
    }]
  }]
},{
  path: '/admin/login',
  element: <Login/>,
},{
  path: '/admin',
  element: <Dashboard/>,
  children: [{
    path: '/admin/dashboard',
    element: <PgDashboard/>
  },{
    path: '/admin/job-form-data',
    element: <JobApplicationData/>
  },{
    path: '/admin/contact-us-data',
    element: <ContactUsData/>
  },{
    path: '/admin/users',
    element: <Users/>
  }]
}]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={webStore}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
    </>
)
