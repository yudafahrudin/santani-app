"use client";

import React from "react";
import AdminWrapper from "@/components/AdminWrapper";
import Table from "@/presentations/quoueNumber";

const ArtistPage: React.FC = () => {
  return (
    <AdminWrapper>
      <h1>NOMOR ANTRIAN</h1>
      <Table />
    </AdminWrapper>
  );
};

export default ArtistPage;
