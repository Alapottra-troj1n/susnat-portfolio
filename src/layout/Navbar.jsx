import React from 'react';

const Navbar = () => {

    return (
        <header>

         <div className="px-36 py-4  flex justify-between items-center absolute w-full z-10 bg-white">
         <div>
                <h5>Links</h5>
         </div>
         <div>
               <img src="/logo.svg" className="w-20" alt="" />
         </div>
         <div>
                    <h5>Links</h5>
         </div>
         </div>

        </header>
    );
};

export default Navbar;