"use client";

import React from "react";
import AdminWrapper from "@/components/AdminWrapper";
import Table from "@/presentations/quoueNumber";

const ArtistPage: React.FC = () => {
  return (
    <AdminWrapper>
      <h1>BUKU TAMU</h1>
      <Table />
    </AdminWrapper>
  );
};

export default ArtistPage;
