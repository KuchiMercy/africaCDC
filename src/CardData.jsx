import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import data from "./Data/data";
import AOS from "aos";
import "aos/dist/aos.css";
const CardData = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <main
        className="flex item-center justify-center flex-wrap flex-col mx-auto my-6 gap-6 w-[80%] md:flex-row md:my-10"
        data-aos="fade-up"
      >
        {data.map((item) => (
          <NavLink
            key={item.id}
            data-aos="fade-up"
            target="_blank"
            to={item.link}
            className=" flex flex-col items-center text-center justify-center w-[70%] px-6 md:px-8 m-auto md:w-[30%] h-[200px] md:h-[200px] max-h-[200px] lg:h-[150px] bg-white rounded-md shadow-xl shadow-[#fe8a150c] transition ease-in-out delay-150 hover:scale-110 duration-300 "
          >
            <div className="text-xl p-3 rounded-full ">
              <img
                src={item.icon.src}
                alt=""
                className="h-[50px] object-cover"
              />
            </div>
            <h4 className="font-bold text-[#9f2241] py-1">{item.title}</h4>
          </NavLink>
        ))}
      </main>
    </>
  );
};

export default CardData;
