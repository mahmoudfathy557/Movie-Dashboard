import React from "react";
import SearchFilterPanel from "../components/SearchFilterPanel";
import OscarStatsChart from "../components/Charts/OscarStatsChart";
import TopPerformersChart from "../components/Charts/TopPerformersChart";
import { Container, Row, Col } from "react-bootstrap";
import MovieCards from "../components/movieCards";
import { useMovies } from "../hooks/useMovies";
import { Loader } from "../components/Loader";

const Dashboard = () => {
  const { loading } = useMovies();
  if (loading)
    return (
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <Loader size={60} />
      </div>
    );
  return (
    <Container fluid className="p-4">
      <h1 className="mb-4 text-center">Movie Dashboard</h1>
      <Row>
        <Col md={4}>
          <SearchFilterPanel />
          <TopPerformersChart />
        </Col>
        <Col md={8}>
          <OscarStatsChart />
        </Col>
      </Row>
      <Row>
        <MovieCards />
      </Row>
    </Container>
  );
};

export default Dashboard;
