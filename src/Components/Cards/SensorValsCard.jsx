import { Box, Stack, Typography } from "@mui/material";

export default function SensorValsCard() {
  return (
    <Box sx={{ borderRadius: 2, bgcolor: "primary.bgColor", p: 2 }}>
      <Typography sx={{ fontSize: 14 }} gutterBottom>
        Reading
      </Typography>
      <Stack direction="row">
        <Typography
          component="h2"
          sx={{ fontSize: "2rem", color: "primary.main" }}
        >
          50%
        </Typography>

      </Stack>
    </Box>
  );
}
