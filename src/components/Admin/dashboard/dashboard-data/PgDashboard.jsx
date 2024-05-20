import React, { useState } from 'react'
import { PgDashboardLoad } from '../Loader';

const PgDashboard = () => {
  const [load, updateLoad] = useState(true);
  setTimeout(()=>{
    updateLoad(false)
  },2000)
  return (
    <>
    
      <div className="flexing-body heading-select-dashboard">

<div className="page-container-admin">
  {load == true ? <div><PgDashboardLoad style={{position: 'absolute',
  top: '230px'}} className='dashboardLoader'/></div> : <>
  <div className="charts-graphs">

    <div className="chart-container img-setting">
<div className="visits-container">
  <div className="visits-info">
    <h2>Today's Visits</h2>
    
    <div id="todayVisits">105520</div>
  </div>
  <div className="visits-info">
    <h2>Total Visits</h2>
    <div id="totalVisits">105520</div>
  </div>
</div>
<img src="https://my.societyfiles.com/assets/images/illustrations/dashboard/welcome.svg" alt=""/>
</div>



        <div className="chart-container">
        
<h2>Sales vs. Expenses</h2>

</div>
<div className="chart-container">
<h2>Weekly Sales</h2>
<canvas id="weeklySalesChart" width="400" height="300"></canvas>
</div>
<div className="chart-container">
<h2>Product Share</h2>
<canvas id="productShareChart" width="400" height="300"></canvas>
</div>
<div className="chart-container">
<h2>Total Orders</h2>
<canvas id="totalOrdersChart" width="400" height="300"></canvas>
</div>
<div className="chart-container">
<h2>Market Share</h2>
<canvas id="marketShareChart" width="400" height="300"></canvas>
</div>

</div>
  </>}
    
</div>
</div>
    </>
  )
}

export default PgDashboard
