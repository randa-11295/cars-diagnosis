import SensorValsCard from "../Components/Cards/SensorValsCard";
import { v4 as uuid } from "uuid";
import { Grid, Typography } from "@mui/material";
import IssuesTable from "../Components/Tables/IssuesTable";
const Introduction = () => {
  return (
    <>
      <Typography
        component="h2"
        sx={{ fontSize: "2rem", color: "secondary.main" }}
      >
        Sensors
      </Typography>
      <Grid container spacing={2} pb={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
          <Grid item xs={6} md={4} lg={3}>
            <SensorValsCard key={uuid()} />
          </Grid>
        ))}
      </Grid>
      <Typography
        component="h2"
        sx={{ fontSize: "2rem", color: "secondary.main" }}
      >
        Issues
      </Typography>
      <IssuesTable />
    </>
  );
};

export default Introduction;
