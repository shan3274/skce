import { subHeader } from "@/utils/subHeader";
import Link from "next/link";

const Subheader = ({ isMenuopen, scrollLength, setIsOpen }) => {
  return (
    subHeader != undefined && (
      <div
        className={
          isMenuopen
            ? scrollLength > 70
              ? "w-[60vw] h-[50vh] absolute left-[15vw] top-[5rem] bg-white z-[999] overflow-hidden duration-300 rounded-lg drop-shadow-lg flex justify-around "
              : "w-[60vw] h-[50vh] absolute top-[5rem] left-0 bg-white z-[999] overflow-hidden duration-300 rounded-lg drop-shadow-lg flex justify-around"
            : scrollLength > 70
            ? "w-[60vw] h-[0vh] absolute left-[15vw] top-[5rem] bg-white z-[999] overflow-hidden duration-300 flex justify-around"
            : "w-[60vw] h-[0vh] absolute left-[15vw] top-[5rem] bg-white z-[999] overflow-hidden duration-300 flex justify-around"
        }
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {subHeader?.map((items) => {
          return (
            <div className="w-[30%] h-[100%] pt-5 flex flex-col  justify-between text-black  pl-5 pb-10 font-serif">
              {items.map((item) => {
                return (
                  <>
                    {item?.title && (
                      <h1 className=" p-0 h-[30px] text-[20px] font-titlefont mb-5 ">
                        {item?.title}
                      </h1>
                    )}
                    {item?.pathName != undefined && (
                      <Link
                        href={item?.pathName}
                        className="link h-[30px] mb-5"
                      >
                        <p className=" text-[15px] font-serif ">{item?.name}</p>
                        {item?.name1 != undefined && (
                          <p className="pb-5 text-[12px] font-serif">
                            {item?.name1}
                          </p>
                        )}
                      </Link>
                    )}
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    )
  );
};

export default Subheader;
