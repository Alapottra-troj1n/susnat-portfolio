import { Link } from "react-router-dom";

export default function Stories() {
  return (
    <div>
      <div className="pt-44 lg:px-36 bg-cover bg-center ">
        <h2 className="font-display text-6xl text-center ">Stories</h2>
        <p className="text-center font-primary font-normal text-xl mt-7">
          Capturing Life's Beauty: A Collection of My Finest Moments in
          Photography
        </p>
      </div>
      <div className="pt-16 pb-52 grid grid-cols-3 px-64 mx-auto text-center gap-8">
        <Link to='/stories/wedding' >
          <div style={{ backgroundImage: `url(${'/wedding.jpg'})` }} className="relative rounded-md overflow-hidden min-h-[25rem] p-5 bg-cover text-white tracking-widest">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-100 hover:opacity-0 transition duration-500 ease-out"></div>
            <h2 className="font-display text-3xl absolute bottom-10 left-1/2 transform -translate-x-1/2">Wedding</h2>
          </div>
        </Link>
        <Link to='/stories/birthday'>
        <div style={{ backgroundImage: `url(${'/birthday.jpg'})` }} className="relative rounded-md overflow-hidden min-h-[25rem] p-5 bg-cover text-white tracking-widest">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-100 hover:opacity-0 transition duration-500 ease-out"></div>
            <h2 className="font-display text-3xl absolute bottom-10 left-1/2 transform -translate-x-1/2">Birthday</h2>
          </div>
        </Link>
        <Link to='/stories/product'>
        <div style={{ backgroundImage: `url(${'/product.webp'})` }} className="relative rounded-md overflow-hidden min-h-[25rem] p-5 bg-cover bg-center text-white tracking-widest">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-100 hover:opacity-0 transition duration-500 ease-out"></div>
            <h2 className="font-display text-3xl absolute bottom-10 left-1/2 transform -translate-x-1/2">Product</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
