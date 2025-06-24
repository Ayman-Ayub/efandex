import React from 'react'
import Header from '../Components/Header'
import Dashboardsection1 from '../Components/Dashboardsection1'
import Dashboardsection2 from '../Components/Dashboardsection2'
import Dashboardsection3 from '../Components/Dashboardsection3'

const Dashboard = () => {
  return (
    <div className=''>
      <Header/>
      <Dashboardsection1/>
      <Dashboardsection2/>
      <Dashboardsection3/>
    </div>
  )
}

export default Dashboard