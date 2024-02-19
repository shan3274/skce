import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Facilities = ({ scrollLength, currHeight }) => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);

  console.log(scrollLength);
  console.log(currHeight);
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#414141]">
      {scrollLength > currHeight + currHeight / 3 && (
        <div className="w-[70%] h-[70%] flex items-center justify-evenly">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: -100 }}
            transition={{ duration: 1 }}
            className=" w-[25%] h-[90%]  rounded-[50px] duration-300 hover:rounded-md hover:w-[35%] relative top-[100px] overflow-hidden  flex items-center justify-center bg-cover "
            onMouseEnter={() => setBox1(true)}
            onMouseLeave={() => setBox1(false)}
            style={{
              backgroundImage: "url(application-form.jpg)",
            }}
          >
            <p
              className={
                box1
                  ? "w-[100%] absolute bottom-[0vh] duration-300 bg-white p-[5%]"
                  : "w-[100%] absolute bottom-[-30vh] duration-300 bg-white"
              }
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              vitae, obcaecati eaque tempora, hic totam aperiam placeat aliquam
              provident ratione debitis, corporis molestiae tenetur amet
              aspernatur quasi sapiente rem. Rem.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: -100 }}
            transition={{ duration: 1 }}
            className=" w-[25%] h-[90%]  rounded-[50px] duration-300 hover:rounded-md hover:w-[35%] relative top-[100px] overflow-hidden  flex items-center justify-center bg-cover "
            onMouseEnter={() => setBox2(true)}
            onMouseLeave={() => setBox2(false)}
            style={{
              backgroundImage: "url(67-1.jpg)",
            }}
          >
            <p
              className={
                box2
                  ? "w-[100%] absolute bottom-[0vh] duration-300 bg-white p-[5%]"
                  : "w-[100%] absolute bottom-[-30vh] duration-300 bg-white"
              }
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              vitae, obcaecati eaque tempora, hic totam aperiam placeat aliquam
              provident ratione debitis, corporis molestiae tenetur amet
              aspernatur quasi sapiente rem. Rem.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: -100 }}
            transition={{ duration: 1 }}
            className=" w-[25%] h-[90%]  rounded-[50px] duration-300 hover:rounded-md hover:w-[35%] relative top-[100px] overflow-hidden  flex items-center justify-center bg-cover "
            onMouseEnter={() => setBox3(true)}
            onMouseLeave={() => setBox3(false)}
            style={{
              backgroundImage: "url(64-1.jpg)",
            }}
          >
            <p
              className={
                box3
                  ? "w-[100%] absolute bottom-[0vh] duration-300 bg-white p-[5%]"
                  : "w-[100%] absolute bottom-[-30vh] duration-300 bg-white"
              }
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              vitae, obcaecati eaque tempora, hic totam aperiam placeat aliquam
              provident ratione debitis, corporis molestiae tenetur amet
              aspernatur quasi sapiente rem. Rem.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Facilities;
