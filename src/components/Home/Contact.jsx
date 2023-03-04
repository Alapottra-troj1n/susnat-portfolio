import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-32 h-screen">
        <h2 className=" lg:text-5xl font-display text-base font-thin text-center">
          REQUEST A BOOKING
        </h2>
        <p className=" lg:text-lg mt-4 tracking-wider text-center  font-primary text-base  ">
          Life is a collection of moments, and I'm here to capture them for you.
          Let's connect and turn your vision into a visual story that will be
          cherished for a lifetime.
        </p>
        <div className="flex justify-center">
          <form className="mt-20 flex flex-col gap-4">
            <input type="email" name="email" placeholder="Email" className="border border-gray-500 w-[30rem] p-3" />
            <input type="text" name="username" placeholder="Username" className="border border-gray-500 w-[30rem] p-3" />
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
                <button className="py-3 px-7 text-white font-display bg-primary ">CONNECT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
