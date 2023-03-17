import React, { useEffect } from 'react';

const StoryPage = () => {
  
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const templatePhoto = 'https://images.squarespace-cdn.com/content/v1/56f65cf85559866730c088c2/1618687504509-UXMM5M7A0L0V43XPATKY/YOGL6872.jpg?format=2500w'
    return (
       <div >
         <div  style={{ backgroundImage: `url(${templatePhoto})` }} className="pt-44 pb-20 px-5 lg:px-36 bg-cover bg-center text-white h-[75vh]">
            <h2 className='font-hand text-6xl text-center mt-56'>Nisarga and Rahul</h2>
            <p className='text-center font-primary font-semibold text-xl mt-14'>July 9, 2022</p>
        </div>
        <div className='py-24'>

        </div>
       </div>
    );
};

export default StoryPage;