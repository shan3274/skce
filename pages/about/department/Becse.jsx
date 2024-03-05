import Footer from "@/components/Footer";
import React from "react";

import Layout1 from "@/components/Layout1";
import Layout2 from "@/components/Layout2";
import { csedata } from "@/utils/layout2data";
import { csedatas } from "@/utils/Departmentdetails";

const Becse = () => {
  return (
    <div className="">
      <Layout1 data={csedatas} />
      <Layout2 data={csedata} />
      <Footer />
    </div>
  );
};

export default Becse;
