import Footer from "@/components/Footer";
import Layout3 from "@/components/Layout3";
import Nheader from "@/components/Nheader";
import { getElement } from "@/utils/firebase";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Fromchairman = () => {
  const [scrollLength, setScrollLength] = useState(0);

  useEffect(() => {
    setScrollLength(100);
  }, []);
  const data1 = getElement(
    "about/CVsB5xL9VXqTcPngbEi2/chairmandesk2/KQX0lYGGsPb9NT8zA8Tz"
  );
  const data = getElement(
    "about/CVsB5xL9VXqTcPngbEi2/chairmandesk/rQMsfMJCrjbYke9oNmGk"
  );
  return (
    <div>
      <Layout3 data={data} />
      <Layout3 data={data1} />
      <Footer />
    </div>
  );
};

export default Fromchairman;
