import React, { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import apiService from "../app/apiService";
import LoadingScreen from "../components/LoadingScreen";
import {
  Card,
  Grid,
  Container,
  Typography,
  Box,
  Stack,
  Divider,
  Breadcrumbs,
  Link,
  Alert,
} from "@mui/material";
import { fCurrency } from "../utils";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const JobPage = () => {
  const params = useParams();
  const { jobId } = params;
  const [singleJob, setSingleJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (jobId) {
      const getSingleJob = async () => {
        setLoading(true);
        try {
          const data = await apiService.get(`/products`);

          const jobs = data.data[0].jobs;

          const job = jobs.find((job) => job.id === jobId);

          setSingleJob(job);
        } catch (error) {
          console.log("error", error);
          setError(error.message);
        }
        setLoading(false);
      };
      getSingleJob();
    }
  }, [jobId]);
  console.log("singleJob", singleJob);

  return (
    <Container sx={{ my: 3 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
        <Link underline="hover" color="inherit" component={RouterLink} to="/">
          Jobs Available
        </Link>
        <Typography color="text.primary">{singleJob?.title}</Typography>
      </Breadcrumbs>
      <Box sx={{ position: "relative", height: 1 }}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <>
                {singleJob && (
                  <Card>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <Typography
                          variant="h6"
                          sx={{
                            mt: 2,
                            mb: 1,
                            display: "block",
                            textTransform: "uppercase",
                            color:
                              singleJob.title === "sale"
                                ? "error.main"
                                : "info.main",
                          }}
                        >
                          {singleJob.title}
                        </Typography>
                        <Typography variant="h5" paragraph>
                          Location: {singleJob.city}
                        </Typography>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1}
                          sx={{ mb: 2 }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ color: "text.primary" }}
                          >
                            Experience: {singleJob.yrsXPExpected} years
                          </Typography>
                        </Stack>
                        <Typography variant="h4" sx={{ mb: 2 }}>
                          <Box
                            component="span"
                            sx={{
                              color: "text.primary",
                            }}
                          >
                            Salary:{" "}
                            {singleJob.salaryLow &&
                              fCurrency(singleJob.salaryLow)}
                            {" - "}
                            {singleJob.salaryHigh &&
                              fCurrency(singleJob.salaryHigh)}
                          </Box>
                        </Typography>

                        <Divider sx={{ borderStyle: "dashed" }} />
                        <Box>
                          <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            children={singleJob.description}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Card>
                )}
                {!singleJob && (
                  <Typography variant="h6">404 Job not found</Typography>
                )}
              </>
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default JobPage;
