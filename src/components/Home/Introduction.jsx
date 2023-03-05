import { FiCalendar, FiMail, FiPhoneCall } from "react-icons/fi";

const Introduction = () => {
  return (
    <div className="bg-white pt-[5rem] py-20 lg:py-52">
      <div className=" flex flex-col justify-center mx-auto ">
        <div className="container mx-auto px-5 grid lg:grid-cols-2 grid-cols-1 gap-10 lg:relative">
          <div className="flex flex-col justify-center order-2 bg-white lg:absolute lg:w-[60%] lg:p-10 lg:top-11 lg:right-[-15px]  2xl:top-32 xl:top-24 xl:right-[-12px] 2xl:right-7">
            <h1 className="font-display lg:absolute xl:top-[-35px] lg:top-[-29px] text-primary font-bold text-center lg:text-left mt-5 lg:mt-0 text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              Heyyy There
            </h1>
            <p className="text-sm mt-4 font-display text-left lg:text-base xl:text-lg text-gray-700 font-medium tracking-wide lg:w-[85%] xl:w-[80%] lg:leading-7 leading-6 xl:leading-8">
              Searching for a creative and friendly photographer in Melbourne
              for your special day? I am Susnat Chakma, a passionate
              photographer with over 5 years of experience in capturing
              stunning, personalized images. Let's connect and bring your vision
              to life, whether it's a wedding, engagement, or any other special
              occasion!
            </p>
            <div className="flex flex-col items-center gap-5 mt-3">
              <p className="font-hand font-medium text-2xl lg:text-3xl xl:text-4xl text-primary whitespace-nowrap">
                Let's capture some memories together!
              </p>
              
            </div>
            
          </div>

          <div className="flex justify-center items-center order-1">
            <div className="w-[25rem] h-[25rem] lg:w-[25rem] lg:h-[25rem] xl:w-[30rem] xl:h-[33rem] bg-hero-photo bg-cover bg-center"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-7 px-5">
          <p className="font-display hidden lg:block text-xs lg:text-lg  text-gray-500 tracking-wider text-center lg:text-left leading-6">
            Want to hop on a <span className="text-gray-800"> call ?</span> send
            me an <span className="text-gray-800">email</span>, or{" "}
            <span className="text-gray-800">schedule a meeting </span> to
            discuss your photography needs ?
          </p>
      
           <div className="flex items-center text-sm md:text-base lg:text-2xl lg:mt-5 gap-5 bg-gray-500 p-3 px-7 rounded-md text-white">
            <a href="tel:123-456-7890" >
              <FiPhoneCall className="hover:text-primary transition-all" />
            </a>
            <a href="mailto:csusnata@gmail.com">
              <FiMail className="hover:text-primary transition-all" />
            </a>
            <span>
              <FiCalendar className="hover:text-primary transition-all" />
            </span>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Introduction;
