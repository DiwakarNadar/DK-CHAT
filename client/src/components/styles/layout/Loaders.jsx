import { Grid, Skeleton, Stack } from '@mui/material';
import React from 'react';

export const LayoutLOader = () => {
  return (
    <Grid container sx={{ height: "calc(100vh - 4rem)", gap: "1rem" }}>
      <Grid
        item
        sm={4}
        md={3}
        sx={{
          display: { xs: "none", sm: "block" }
        }}
        height={"100%"}
      >
        <Skeleton variant="rounded" height={"100%"} />
      </Grid>
      <Grid
        item
        sm={8}
        md={5}
        xs={12}
        lg={6}
        height={"100%"}
      >
        <Stack spacing={"1rem"}>
          {
            Array.from({ length: 10 }).map((_, i) => (
              <Skeleton variant="rounded" height={"5rem"} key={i} />
            ))
          }
        </Stack>
      </Grid>
      <Grid
        item
        md={4}
        lg={3}
        height={"100%"}
        sx={{
          display: { xs: "none", md: "block" }
        }}
      >
        <Skeleton variant="rounded" height={"100%"} />
      </Grid>
    </Grid>
  );
};
