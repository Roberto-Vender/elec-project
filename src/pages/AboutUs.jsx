import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <div className="relative">
        <img src="img2.jpg" alt="Home Services" className="w-full h-[563px] object-cover" />
      </div>

      <span className="w-[200px] h-10 rounded-lg bg-blue-600 flex justify-center items-center text-xl absolute top-1/3 left-12">
        Cleanliness,.
      </span>


      <span className="w-[200px] h-10 rounded-lg bg-blue-600 flex justify-center items-center text-xl absolute top-1/3 left-1/4">
        Quality
      </span>


      <span className="w-[200px] h-10 rounded-lg bg-blue-600 flex justify-center items-center text-xl absolute top-1/3 right-1/4">
        Uniqueness
      </span>


      <span className="w-[200px] h-10 rounded-lg bg-blue-600 flex justify-center items-center text-xl absolute top-1/3 right-12">
        Hospitality
      </span>

      <div className="text-custom-yellow absolute top-20 left-8 transform  text-7xl font-serif ">
        Our Core Values
      </div>

      <div className="text-white absolute top-[40%] left-12 text-xl w-[200px] text-center">
        We are committed to maintaining a high standard of cleanliness in all our services, ensuring a healthy and welcoming environment for every customer.
      </div>

      <div className="text-white absolute top-[40%] left-1/4 text-xl w-[200px] text-center">
      Our focus on quality ensures that every service we offer is performed with excellence and attention to detail, delivering superior results every time.
      </div>

      
      <div className="text-white absolute top-[40%] right-1/4 text-xl w-[200px] text-center">
        We pride ourselves on offering distinctive services tailored to each customer’s needs, ensuring an experience that stands out from the rest.
      </div>
      
      <div className="text-white absolute top-[40%] right-12 text-xl w-[200px] text-center">
      We believe in treating every customer with warmth, respect, and care, creating a positive and memorable experience with every interaction.
      </div>

      

    </div>
  );
};

export default AboutUs;
