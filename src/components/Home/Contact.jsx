import React from "react";
import CalendlyWidget from "../reusables/CalendlyWidget";

const Contact = ({appointment}) => {
  return (
    <div>
      <div ref={appointment} className="container mx-auto px-5 py-32 h-screen mb-20">
        <h2 className=" lg:text-5xl font-display text-3xl font-thin text-center">
          SHEDULE A MEETING
        </h2>
        <p className=" lg:text-lg mt-4 tracking-wider text-center  font-primary text-sm leading-6  ">
        Are you ready to create some amazing memories? Schedule a meeting and let's chat about how we can make that happen together!
        </p>
        <div className="flex justify-center mt-10 mb-10 h-full ">
          {/* <form className="mt-20 flex flex-col gap-4">
            <input type="email" name="email" placeholder="Email" className="border border-gray-500 w-[30rem] p-3" />
            <input type="text" name="username" placeholder="Your Name" className="border border-gray-500 w-[30rem] p-3" />
            <input type="text" name="address" placeholder="Address" className="border w-[30rem] p-3 border-gray-500" />
            <div className="flex flex-col gap-2">
            <label className="font-semibold">Event Date :</label>
            <input type="date" placeholder="Date of the event" name="date" className="border-gray-500 border p-3" />
            </div>
            <div className="flex flex-col gap-2">
            <label className="font-semibold">Event Budget :</label>
            <select className="border p-3 border-gray-500">
                <option value="">500$ - 1000$</option>
                <option value="">1000$ - 1500$</option>
                <option value="">2000$ - 3000$</option>
                <option value="">Custom</option>
            </select>
            </div>
            <input type="number" name="phone" placeholder="Phone Number" className="border w-[30rem] p-3 border-gray-500" />
  

            <div>
                <button className="py-3 px-7 text-white font-display bg-primary ">SUBMIT</button>
            </div>
          </form> */}
          <CalendlyWidget />
        </div>
      </div>
    </div>
  );
};

export default Contact;
