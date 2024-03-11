import Footer from "@/components/Footer";
import React from "react";
import Layout1 from "@/components/Layout1";
import Layout2 from "@/components/Layout2";
import { civildatas } from "@/utils/layout2data";
import { getElement } from "@/utils/firebase";

const Becivil = () => {
  const data1 = getElement(
    "departments/BCazFGTXaR1AHE8F5UoH/civil/hzIsLbXgkFQzT7k8TL6W/data1/uuaHdFri69FTHKr6JGtm"
  );

  return (
    <div>
      <Layout1 data={data1} />
      <Layout2 data={civildatas} />
      <Footer />
    </div>
  );
};

export default Becivil;
