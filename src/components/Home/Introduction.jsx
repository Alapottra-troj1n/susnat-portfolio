import CallToAction from "../reusables/CallToAction";

const Introduction = ({ appointment }) => {
  const scrolltoAppointment = () => {
    appointment.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white pt-[5rem] py-20 lg:pt-52">
      <div className=" flex flex-col justify-center mx-auto ">
        <div className="container mx-auto px-5 grid lg:grid-cols-2 grid-cols-1 gap-10 lg:relative">
          <div
            className="flex flex-col justify-center items-start order-2 "
          >
            <img src="/hey.svg" className="w-[25rem]" alt="" />
            <p className="text-sm font-primary mt-4  pr-24 text-left lg:text-base xl:text-lg text-gray-500 lg:w-[85%] xl:w-[80%] lg:leading-7 leading-6 xl:leading-7 ">
              Searching for a creative and friendly photographer in Melbourne
              for your special day? I am Susnat Chakma, a passionate
              photographer with over 5 years of experience in capturing
              stunning, personalized images. Let's connect and bring your vision
              to life, whether it's a wedding, engagement, or any other special
              occasion!
            </p>
            <div className="flex flex-col items-center gap-5 mt-3"></div>
          </div>

          <div className="flex justify-end items-center order-1">
            <div className="w-[25rem] h-[25rem] lg:w-[25rem] lg:h-[25rem] xl:w-[30rem] xl:h-[33rem] bg-hero-photo bg-cover bg-center rounded-md"></div>
          </div>
        </div>
      
      </div>
      <div>
          <CallToAction scrolltoAppointment={scrolltoAppointment} />
        </div>
    </div>
  );
};

export default Introduction;
