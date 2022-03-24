import { Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import data from "../jobs.json";

const JobPage = () => {
  const params = useParams();
  const { jobId } = params;
  const singleJob = data.jobs.find((job) => job.id === jobId);

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" marginTop={3}>
        {singleJob.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {singleJob.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Skills: {singleJob.skills.map((skill) => skill)}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        City: {singleJob.city}
      </Typography>
    </Container>
  );
};

export default JobPage;
