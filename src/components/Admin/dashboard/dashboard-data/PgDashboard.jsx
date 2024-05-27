import React, { useState } from "react";
import { PgDashboardLoad } from "../Loader";
import { Gauge } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts/LineChart";
import { useSelector } from "react-redux";
const PgDashboard = () => {
  let showUsername = useSelector((state) => state.showUsername);
  let jobFormData = useSelector((state) => state.jobFormData);
  let contactUs = useSelector((state) => state.contactUs);
  let users = useSelector((state) => state.users);
  const [load, updateLoad] = useState(true);
  setTimeout(() => {
    updateLoad(false);
  }, 2000);
  let time = new Date();
  let greetings = "";
  const hour = time.getHours();
  if (hour >= 0 && hour < 12) {
    greetings = "Good Morning";
  } else if (hour >= 12 && hour < 16) {
    greetings = "Good Afternoon";
  } else if (hour >= 16 && hour < 20) {
    greetings = "Good Evening";
  } else {
    greetings = "Good Night";
  }
  
  return (
    <>
      <div className="flexing-body heading-select-dashboard">
        <div className="page-container-admin">
          {load == true ? (
            <div>
              <PgDashboardLoad
                style={{ position: "absolute", top: "230px" }}
                className="dashboardLoader"
              />
            </div>
          ) : (
            <>
              <div className="charts-graphs">
                <div className="chart-container img-setting">
                  <div className="visits-container">
                    <div className="visits-info">
                      <p style={{ color: "#0d6efd", fontWeight: "500" }}>
                        {greetings}, {showUsername}!
                      </p>
                      <div>
                        <div style={{ fontSize: "20px", fontWeight: "700" }}>
                          {jobFormData.length}
                        </div>
                        <p style={{ fontSize: "14px" }}>
                          Total Job Form Submit
                        </p>
                      </div>
                      <div>
                        <div style={{ fontSize: "20px", fontWeight: "700" }}>
                          {contactUs.length}
                        </div>
                        <p style={{ fontSize: "14px" }}>
                          Total Contact Form Submit
                        </p>
                      </div>
                      <div>
                        <div style={{ fontSize: "20px", fontWeight: "700" }}>
                          {users.length}
                        </div>
                        <p style={{ fontSize: "14px" }}>Total Users</p>
                      </div>
                    </div>
                    <img height={210} src="/images/dashboard.jpg" alt="" />
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <Gauge className="firstCount" width={100} height={100} value={jobFormData.length} />
                      <p style={{ fontSize: "14px" }}>Job Forms</p>
                    </div>

                    <div>
                      <Gauge width={100} height={100} value={contactUs.length} />
                      <p style={{ fontSize: "14px" }}>Contact Forms</p>
                    </div>
                    <div>
                      <Gauge width={100} height={100} value={users.length} />
                      <p style={{ fontSize: "14px" }}>Users</p>
                    </div>
                  </div>
                </div>

                <div className="chart-container">
                  <h2>Dashboard Graph</h2>
                  <LineChart
                    xAxis={[{ data: [jobFormData.length, contactUs.length, users.length] }]}
                    series={[
                      {
                        data: [jobFormData.length, contactUs.length, users.length],
                      },
                    ]}
                    width={480}
                    height={350}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PgDashboard;
