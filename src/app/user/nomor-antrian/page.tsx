"use client";

import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const QueueNumberPage: React.FC = () => {
  return (
    <Stack
      gap={2}
      padding={2}
      direction="row"
      display="flex"
      justifyContent="center"
      alignContent="flex-end"
      height="90vh"
    >
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
        <Stack gap={5} padding={5}>
          <div>
            <Typography fontSize="6rem" variant="h3">
              NOMOR ANTRIAN
            </Typography>
          </div>
          <div>
            <Typography fontSize="10rem" variant="h3">
              C201
            </Typography>
          </div>
          <div>
            <Typography fontSize="3rem" variant="h5">
              BAG. A
            </Typography>
          </div>
        </Stack>
      </div>
      <Stack flex={1} gap={2}>
        <iframe
          width="100%"
          height="70%"
          style={{
            borderWidth: 0,
            borderRadius: 20,
          }}
          src="https://www.youtube.com/embed/jAAWN9UTEqo?si=oPXBLSZIkXZtjbo4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <Stack
          gap={2}
          padding={2}
          alignContent="center"
          height="30%"
          style={{
            backgroundColor: "lightblue",
            borderRadius: 10,
          }}
        >
          <Typography fontSize="2rem">IKLAN ANDA DISINI?</Typography>
          <div style={{ width: "100%", borderWidth: 1 }}>your ad here...</div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default QueueNumberPage;
