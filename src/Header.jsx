import coverPhoto from "./assets/acdc.jpeg";
import logo from "./assets/acdc2.png";
import arrow from "./assets/arrow.png"

const Header = () => {
  return (
    <>
      <header
        style={{ backgroundImage: `url(${coverPhoto})` }}
        className="bg-cover bg-center md:bg-fixed max-w-[100%] w-full h-[100vh]  relative"
      >
        <div className="flex justify-center md:block md:pl-6 bg-white w-full h-[4rem] absolute z-[100000]">
          {" "}
          <img src={logo} alt="" className="absolute w-[250px] h-20 " />
        </div>
        <div className="flex flex-col justify-center items-center text-white relative z-[100000] h-[700px] mx-auto max-w-[70%] md:max-w-[50%] ">
          <h2 className="text-3xl lg:text-4xl font-bold md:leading-10 md:text-center">
            Welcome to the Africa CDC Systems and Dashboards Access Page
          </h2>
          <p className="text-lg my-4 md:text-center">
            A one stop center for finding systems and dashboards within Africa
            CDC
          </p>
        </div>
        <img src={arrow} alt="" className="absolute bottom-[4rem] z-[9999999999] right-4 w-12 h-12 transform animate-bounce" />
      </header>
      <div className="absolute top-0 left-0 bg-black w-full h-[100vh] z-[10000] !opacity-40 md:!opacity-30">

      

      </div>
    </>
  );
};

export default Header;
