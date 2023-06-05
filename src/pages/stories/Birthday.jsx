import React, { useEffect, useState } from "react";
import client from "../../utils/sanity";

export default function Birthday() {

  const [loading, setLoading] = useState(false);
  const [birthdays, setBirthdays] = useState([]);
  console.log(birthdays)
  const query = `*[_type == "story" && categories[0]->.title == "Birthday"]`

  useEffect(() => {
    setLoading(true);
    client
      .fetch(query)
      .then((story) => {
        setBirthdays(story);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);
  
  return (
   <div className='pt-36 pb-10'>
          <h2 className='text-center font-display text-3xl'>Birthdays Unveiled: Capturing the Essence of Celebration</h2>
          <p className='font-primary text-center mt-3 text-lg'>Preserving Your Special Day, One Click at a Time</p>
   </div>
  )
}
