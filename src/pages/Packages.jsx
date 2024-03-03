import { TiTick } from "react-icons/ti";

export default function Packages() {
  return (
    <div className="py-36 px-5 lg:max-w-6xl mx-auto">
      <div className="mt-5 lg:mt-14">
        <h2 className="text-center text-2xl lg:text-4xl font-display font-bold">
          Photography Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-14">
          <div className="shadow-md overflow-hidden rounded-md">
            <div className="h-[20rem] w-full overflow-hidden rounded-tl-md rounded-tr-md">
              <img
                src="/sparkle.jpg"
                className="object-cover"
                alt="photos"
              />
            </div>
            <div className=" rounded-bl-md rounded-br-md p-5 w-full overflow-hidden ">
              <h3 className="text-xl font-bold font-display text-center">
                MINI SESSION
              </h3>
              <p className="text-center text-3xl my-2 font-display font-bold">
                450 AUD
              </p>

              <div className="text-left font-primary mt-3 text-gray-600 font-medium">
                <p>Unlimited Premium Edited Photos</p>
                <p>Duration : 2 Hours</p>

                <h2 className="text-xl font-display font-bold mt-2 text-gray-800 ">
                  Addons :
                </h2>

                <p className="text-sm mt-2 flex gap-2 items-center">
                  {" "}
                  <TiTick className="text-xl text-green-400" /> 250 AUD for a
                  up to 2-minute cinematic video
                </p>
                <p className="text-sm mt-2 flex gap-2 items-center">
                  {" "}
                  <TiTick className="text-xl text-green-400" /> 250 AUD for a
                  personalized photobook (50 photos)
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-md overflow-hidden rounded-md">
            <div className="h-[20rem] w-full overflow-hidden rounded-tl-md rounded-tr-md">
              <img
                src="/classic_capture.jpg"
                className="object-cover w-full "
                alt="photos"
              />
            </div>
            <div className=" rounded-bl-md rounded-br-md p-5 w-full overflow-hidden ">
              <h3 className="text-xl font-bold font-display text-center">
                Classic Capture
              </h3>
              <p className="text-center text-3xl my-2 font-display font-bold">
                750 AUD
              </p>

              <div className="text-left font-primary mt-3 text-gray-600 font-medium">
              <p>Unlimited Premium Edited Photos</p>
                <p>Duration : 4 Hours</p>

                <h2 className="text-xl font-display font-bold mt-2 text-gray-800 ">
                  Addons :
                </h2>

                <p className="text-sm mt-2 flex gap-2 items-center">
                  {" "}
                  <TiTick className="text-xl text-green-400" /> 300 AUD for a
                  2-3minute cinematic video
                </p>
                <p className="text-sm mt-2 flex gap-2 items-center">
                  {" "}
                  <TiTick className="text-2xl text-green-400" /> 250-350 AUD for a
                  personalized photobook (50-80 photos)
                </p>
                <p className="text-xs text-center mt-4 text-gray-400">
                  You can add addons from previous packages{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-md overflow-hidden rounded-md">
            <div className="h-[20rem] w-full overflow-hidden rounded-tl-md rounded-tr-md">
              <img
                src="/dreamday.jpg"
                className="object-cover"
                alt="photos"
              />
            </div>
            <div className=" rounded-bl-md rounded-br-md p-5 w-full overflow-hidden ">
              <h3 className="text-xl font-bold font-display text-center">
                Big Day
              </h3>
              <p className="text-center text-3xl my-2 font-display font-bold">
                1350 AUD
              </p>

              <div className="text-left font-primary mt-3 text-gray-600 font-medium">
                <p>Premium Edited Photos</p>
                <p>Duration : 8 Hours</p>

                <h2 className="text-xl font-display font-bold mt-2 text-gray-800 ">
                  Addons :
                </h2>

                <p className="text-sm mt-2 flex gap-2 items-center">
                  {" "}
                  <TiTick className="text-xl text-green-400" /> 400 AUD for a
                  3-5minute cinematic masterpiece
                </p>
                <p className="text-sm mt-2 flex gap-2 items-center">
                  {" "}
                  <TiTick className="text-2xl text-green-400" /> 250-500 AUD for a
                  personalized photobook (50-150 photos)
                </p>
                <p className="text-xs text-center mt-4 text-gray-400">
                  You can add addons from previous packages{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center text-2xl lg:text-4xl font-display font-bold mt-24">
          Videography Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-14">
          <div className="shadow-md overflow-hidden rounded-md">
            <div className="h-[20rem] w-full overflow-hidden rounded-tl-md rounded-tr-md">
              <img
                src="/video_2.jpg"
                className="object-cover h-full"
                alt="photos"
              />
            </div>
            <div className=" rounded-bl-md rounded-br-md p-5 w-full overflow-hidden ">
              <h3 className="text-xl font-bold font-display text-center">
                Stellar Storyteller
              </h3>
              <p className="text-center text-3xl my-2 font-display font-bold">
                750 AUD
              </p>

              <div className="text-left font-primary mt-3 text-gray-600 font-medium">
                <p>Mini Teaser (1-2min)</p>
                <p>3-5 Minute Cinematic Trailers</p>
                <p>20+ Minute Video or More as Required</p>
                <p>Duration : 4 Hours</p>

                <h2 className="text-xl font-display font-bold mt-2 text-gray-800 ">
                  Addons :
                </h2>

                <p className="text-sm mt-2 flex gap-2 items-center">
                  {" "}
                  <TiTick className="text-xl text-green-400" /> 250 AUD for a
                  2-minute cinematic masterpiece
                </p>
              
              </div>
            </div>
          </div>

          <div className="shadow-md overflow-hidden rounded-md">
            <div className="h-[20rem] w-full overflow-hidden rounded-tl-md rounded-tr-md">
              <img
                src="/video_1.jpg"
                className="object-cover h-full"
                alt="photos"
              />
            </div>
            <div className=" rounded-bl-md rounded-br-md p-5 w-full overflow-hidden ">
              <h3 className="text-xl font-bold font-display text-center">
                Eternal Essence
              </h3>
              <p className="text-center text-3xl my-2 font-display font-bold">
                1350 AUD
              </p>

              <div className="text-left font-primary mt-3 text-gray-600 font-medium">
                <p>Mini Teaser (1-2min)</p>
                <p>3-5 Minute Cinematic Trailers</p>
                <p>45+ Minute Video or More as Required</p>
                <p>Duration : 8 Hours</p>

                <h2 className="text-xl font-display font-bold mt-2 text-gray-800 ">
                  Addons :
                </h2>

                <p className="text-sm mt-2 flex gap-2 items-center">
                  {" "}
                  <TiTick className="text-xl text-green-400" /> 250 AUD for a
                  2-minute cinematic masterpiece
                </p>
              
                <p className="text-xs text-center mt-4 text-gray-400">
                  You can add addons from previous packages{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
