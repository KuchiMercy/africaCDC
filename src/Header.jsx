import coverPhoto from "./assets/acdc.jpeg";
import logo from "./assets/acdc2.png";

const Header = () => {
  return (
    <>
      <header
        style={{ backgroundImage: `url(${coverPhoto})` }}
        className=" bg-cover bg-center bg-fixed max-w-[100%] w-full h-[600px] md:h-[500px] relative"
      >
        <img src={logo} alt="" className="w-[250px] absolute z-[100000]" />
        <div className="flex flex-col justify-center items-center text-white relative z-[100000] h-[550px] mx-auto max-w-[70%] md:max-w-[50%] ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold md:leading-10 md:text-center">
            Welcome to the Africa CDC Systems and Dashboards Access Page
          </h2>
          <p className="text-md md:text-lg my-4 md:text-center">
            A one stop center for finding systems and dashboards within Africa
            CDC
          </p>
        </div>
      </header>
      <div className="absolute top-0 left-0 bg-black w-full h-[500px] z-[10000] !opacity-30"></div>
    </>
  );
};

export default Header;
