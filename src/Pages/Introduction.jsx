import SensorValsCard from "../Components/Cards/SensorValsCard";
import { v4 as uuid } from "uuid";
import { Grid } from "@mui/material";
const Introduction = () => {
  return (
    <Grid container spacing={2} columnSpacing={2}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
        <Grid item xs={6} md={4} lg={3} >
          <SensorValsCard key={uuid()} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Introduction;
