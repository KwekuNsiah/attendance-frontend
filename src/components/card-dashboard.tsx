// import React from "react";
import { AttendanceBarChart } from "./attendance-barchart";
import { userData } from "../data/barChartData";
import svgcheckCircle from "../assets/check-circle-svgrepo-com (3).svg";
import clockcirclesvg from "../assets/clock-circle-svgrepo-com.svg";
import closeCircleSvg from "../assets/close-circle-svgrepo-com.svg";

export const CardDashboard = () => (
  <div className="cardDashboard">
    <p className="card-dashboard-header">Dashboard</p>
    <div className="card-dashboard-current-date">
      <p className="date-text">Today's date</p>
      <p className="current-date-text">September 16 2025</p>
    </div>
    <div className="dashboard-summary-header">
      <p>Attendance Summary</p>
    </div>
    <div className="attendance-summary-cont">
      <div className="worked-days-container">
        <div>
          <img
            className="check-circle"
            src={svgcheckCircle}
            alt="check circle"
          />
        </div>
        <p className="worked-days-text">Worked days</p>
        <p className="nos-of-days-text">20</p>
      </div>
      <div className="late-entries-container">
        <div>
          <img
            className="clock-circle"
            src={clockcirclesvg}
            alt="clock circle"
          />
        </div>
        <p className="worked-days-text">late entries</p>
        <p className="nos-of-days-text">02</p>
      </div>
      <div className="absent-container">
        <div>
          <img
            className="close-cirlce"
            src={closeCircleSvg}
            alt="close circle"
          />
        </div>
        <p className="worked-days-text">Absents</p>
        <p className="nos-of-days-text">01</p>
      </div>
    </div>
    <div className="chart-container">
      <p className="chart-header">Attendance</p>
      <div className="chart-graph">
        <AttendanceBarChart chartData={userData} />
      </div>
    </div>
  </div>
);
