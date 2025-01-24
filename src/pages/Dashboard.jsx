import React from "react";
import SearchFilterPanel from "../components/SearchFilterPanel";
import OscarStatsChart from "../components/Charts/OscarStatsChart";
import TopPerformersChart from "../components/Charts/TopPerformersChart";
import MovieDetailsCard from "../components/MovieDetailsCard";

const Dashboard = () => (
  <div className="container mt-4">
    <h1 className="text-center mb-4">Movie Insights Dashboard</h1>
    <SearchFilterPanel />
    <div className="row">
      <div className="col-md-6">
        <OscarStatsChart />
      </div>
      <div className="col-md-6">
        <TopPerformersChart />
      </div>
    </div>
    <div className="mt-4">
      <MovieDetailsCard />
    </div>
  </div>
);

export default Dashboard;
