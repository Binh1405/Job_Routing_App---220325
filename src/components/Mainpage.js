import { Container, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import apiService from "../apiService";
import { API_ID } from "../app/config";
import { API_KEY } from "../app/config";
import JobCard from "./JobCard";
import "./style/Mainpage.css";
import data from "../jobs.json";
import { AuthContext } from "../context/basicContext";

const Mainpage = () => {
  const jobs = data.jobs.splice(0, 20);
  const auth = useContext(AuthContext);

  return (
    <div className="mainpage">
      <Container>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {jobs.map((job) => (
            <Grid key={job.id} item xs={12} md={5} lg={4}>
              <JobCard job={job} auth={auth} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Mainpage;
