import { Container, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import apiService from "../app/apiService";
import JobCard from "./JobCard";
import "./style/Mainpage.css";
import { AuthContext } from "../context/basicContext";
import { Outlet } from "react-router-dom";

const Mainpage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = useContext(AuthContext);
  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      try {
        const res = await apiService.get("/products");
        console.log("res", res);
        setJobs(res.data[0].jobs);
      } catch (error) {
        console.log("error", error);
        setError(error.message);
      }
      setLoading(false);
    };
    getJobs();
  }, []);

  return (
    <>
      <div className="mainpage">
        <Container>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {jobs.splice(0, 20).map((job) => (
              <Grid key={job.id} item xs={12} md={5} lg={4}>
                <JobCard job={job} auth={auth} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Outlet />
    </>
  );
};

export default Mainpage;
