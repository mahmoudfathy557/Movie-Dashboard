import React from "react";
import SearchFilterPanel from "../components/SearchFilterPanel";
import OscarStatsChart from "../components/Charts/OscarStatsChart";
import TopPerformersChart from "../components/Charts/TopPerformersChart";
import MovieDetailsCard from "../components/MovieDetailsCard";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => (
  <Container fluid className="p-4">
    <h1 className="mb-4">Movie Dashboard</h1>
    <Row>
      <Col md={4}>
        <SearchFilterPanel />
        <TopPerformersChart />
      </Col>
      <Col md={8}>
        <OscarStatsChart />
        <MovieDetailsCard />
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
