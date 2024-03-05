import Footer from "@/components/Footer";

import React from "react";
import Layout1 from "@/components/Layout1";
import { elecandcom } from "@/utils/Departmentdetails";
import Layout2 from "@/components/Layout2";
import { elecandcoms } from "@/utils/layout2data";
const Beelectrics = () => {
  return (
    <div>
      <Layout1 data={elecandcom} top={"5"} />
      <Layout2 data={elecandcoms} />
      <Footer />
    </div>
  );
};

export default Beelectrics;
