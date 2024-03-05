import Footer from "@/components/Footer";
import React from "react";
import Layout1 from "@/components/Layout1";
import { electric } from "@/utils/Departmentdetails";
import Layout2 from "@/components/Layout2";
import { electrics } from "@/utils/layout2data";
const Beelectricandelec = () => {
  return (
    <div>
      <Layout1 data={electric} />
      <Layout2 data={electrics} />
      <Footer />
    </div>
  );
};

export default Beelectricandelec;
