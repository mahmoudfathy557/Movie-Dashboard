import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const Loader = ({ size = 40, color = "primary" }) => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: 100 }}
  >
    <CircularProgress color={color} size={size} />
  </div>
);
