import Footer from "@/components/Footer";
import React from "react";
import Layout1 from "@/components/Layout1";
import Layout2 from "@/components/Layout2";

import { getElement } from "@/utils/firebase";
import { BounceLoader } from "react-spinners";

const Becivil = () => {
  const data1 = getElement(
    "departments/BCazFGTXaR1AHE8F5UoH/civil/hzIsLbXgkFQzT7k8TL6W/data1/uuaHdFri69FTHKr6JGtm"
  );
  const data2 = getElement(
    "departments/BCazFGTXaR1AHE8F5UoH/civil/hzIsLbXgkFQzT7k8TL6W/data2/igaphqFP2nS2pFOqmTcN"
  );



  return data1 !== undefined && data2 !== undefined ? (
    <div>
      <Layout1 data={data1} />
      <Layout2 data={data2} />
      <Footer />
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <BounceLoader size={100} />
    </div>
  );
};

export default Becivil;
