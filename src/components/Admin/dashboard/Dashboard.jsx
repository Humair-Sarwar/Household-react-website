import React from 'react'
import Sidebar from './Header-sidebar/Sidebar'
import AdminHeader from './Header-sidebar/AdminHeader'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <div className='dashboard-container-admin'>
  <Sidebar/>
  <div className='test-dashboard'>
  <AdminHeader></AdminHeader>
  <Outlet/>
  </div>
  </div>
    
    </>
  )
}

export default Dashboard
