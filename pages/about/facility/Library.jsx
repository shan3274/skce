import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Layout1 from "@/utils/Layout1";
import React, { useEffect, useState } from "react";

const Library = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);
  }, [scrollLength]);

  const data = {
    h1: "LIBRARY",
    p1: "As reading is the fountain of wisdom, our College has a collection of sources and resources. It has 9000 volumes and 2000 titles and 30 national and international journals. It is a storehouse of informations readily available for the students. Our library has access points for print, audio and visual materials in numerous formats like CD’s and e-journals. Library has digital library. We are extending help to the students beyond the physical walls of a building, by providing material accessible by electronic means.",
    p2: "Library has 8229 books, 30 national journals and 170 International e journals. The total amount of Rs.16 lakhs have contributed for the purchase of books and journals. The library has digitalized for easy access of the student and staff. The library has sufficient number of PCs and connected high speed internet connections so that e journals can be accessed. Furthermore, 7 daily news papers (both Tamil and English) and many magazines are also available in the library.",

    bg: [
      "https://www.sreekrishnaengcollege.com/assets/img/08.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/09.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/library1.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/library2.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/library3.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/library4.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/library5.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/library6.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/library7.jpg",
    ],
  };

  return (
    <div>
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <Layout1 data={data} />
      <Footer />
    </div>
  );
};

export default Library;
