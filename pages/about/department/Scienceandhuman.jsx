import Footer from "@/components/Footer";
import Layout1 from "@/components/Layout1";
import Layout2 from "@/components/Layout2";
import { sciencedata } from "@/utils/Departmentdetails";
import { sciencedatas } from "@/utils/layout2data";

import React from "react";
const Scienceandhuman = () => {
  return (
    <div>
      <Layout1 data={sciencedata} />
      <Layout2 data={sciencedatas} />
      <Footer />
    </div>
  );
};

export default Scienceandhuman;
