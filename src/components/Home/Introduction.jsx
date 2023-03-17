import CallToAction from "../reusables/CallToAction";

const Introduction = ({ appointment }) => {
  const scrolltoAppointment = () => {
    appointment.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white pt-[5rem] py-20 lg:py-52">
      <div className=" flex flex-col justify-center mx-auto ">
        <div className="container mx-auto px-5 grid lg:grid-cols-2 grid-cols-1 gap-10 lg:relative">
          <div
            className="flex flex-col justify-center order-2  lg:absolute lg:w-[60%] lg:p-10 lg:top-11 lg:right-[-5px]  2xl:top-48 xl:top-24 xl:right-[-12px] 2xl:right-3 bg-clip-padding"
          >
            {/* <h1 className="font-hand xl:ml-14 lg:ml-6 lg:absolute xl:top-[-65px] lg:top-[-29px] text-primary text-center lg:text-left mt-5 lg:mt-0 text-4xl lg:text-5xl xl:text-[6.5rem]">
              Hey There
            </h1> */}
            <img src="/hey.svg" className="w-[25rem] lg:left-[6rem] lg:absolute xl:top-[-90px] lg:top-[-29px]" alt="" />
            <p className="text-sm font-primary mt-4 xl:ml-14 lg:ml-6 pr-24 text-left lg:text-base xl:text-lg text-gray-600  lg:w-[85%] xl:w-[80%] lg:leading-7 leading-6 xl:leading-7">
              Searching for a creative and friendly photographer in Melbourne
              for your special day? I am Susnat Chakma, a passionate
              photographer with over 5 years of experience in capturing
              stunning, personalized images. Let's connect and bring your vision
              to life, whether it's a wedding, engagement, or any other special
              occasion!
            </p>
            <div className="flex flex-col items-center gap-5 mt-3"></div>
          </div>

          <div className="flex justify-center items-center order-1">
            <div className="w-[25rem] h-[25rem] lg:w-[25rem] lg:h-[25rem] xl:w-[30rem] xl:h-[33rem] bg-hero-photo bg-cover bg-center rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-7 px-5">
          
{/* 
          <CallToAction scrolltoAppointment={scrolltoAppointment} /> */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
