import CallToAction from "../reusables/CallToAction";

const Introduction = ({ appointment }) => {
  const scrolltoAppointment = () => {
    appointment.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="aboutme" className="bg-white pt-[7rem] py-20 lg:pt-52">
      <div className=" flex flex-col justify-center mx-auto ">
        <div className="container mx-auto px-5 grid lg:grid-cols-2 grid-cols-1 gap-10 lg:relative">
          <div className="flex flex-col justify-center items-center lg:items-start order-2 ">
            <img src="/hey.svg" className="w-[20rem] lg:w-[20rem] xl:w-[25rem] TEXT" alt="" />
            <p className="text-sm font-primary mt-4 pr-10  2xl:pr-24 text-left lg:text-base xl:text-lg text-gray-500 lg:w-[85%] xl:w-[80%] lg:leading-7 leading-6 xl:leading-7 ">
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
            <div className="w-[25rem] h-[25rem] lg:w-[25rem] lg:h-[25rem] xl:w-[30rem] xl:h-[33rem] bg-hero-photo bg-cover bg-center rounded-md overflow-hidden">
              <iframe 
                className="scale-150 lg:hidden"
                title="video-background"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/ELK5du6HhzY?autoplay=0&loop=1&mute=0&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
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
