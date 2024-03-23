"use client";

import React from "react";
import { Stack, Typography } from "@mui/material";

const QueueNumberCreatePage: React.FC = () => {
  return (
    <>
      <div style={{ padding: 10, textAlign: "center" }}>
        <Typography fontSize="2rem" variant="h3">
          DAFTAR NOMOR ANTRIAN
        </Typography>
      </div>
      <Stack
        gap={4}
        padding={2}
        direction="row"
        display="flex"
        justifyContent="center"
        alignContent="flex-end"
        height="40vh"
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            backgroundColor: "lightpink",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography fontSize="2rem" variant="h3">
              BAG. A
            </Typography>
          </a>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            backgroundColor: "lightblue",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography fontSize="2rem" variant="h3">
              BAG. B
            </Typography>
          </a>
        </div>
      </Stack>
      <Stack
        gap={4}
        padding={2}
        direction="row"
        display="flex"
        justifyContent="center"
        alignContent="flex-end"
        height="40vh"
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            backgroundColor: "lightgray",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography fontSize="2rem" variant="h3">
              BAG. C
            </Typography>
          </a>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            backgroundColor: "lightgreen",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography fontSize="2rem" variant="h3">
              BAG. D
            </Typography>
          </a>
        </div>
      </Stack>
    </>
  );
};

export default QueueNumberCreatePage;
