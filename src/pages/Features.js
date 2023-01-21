import React from "react";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";

const Features = () => {
  return (
    <div className="bg-background2 text-white font-gt-walsheim-pro">
      <Header />
      {/* row1 */}

      <div className=" mx-4 mt-[3.87rem] md:flex gap-[6.5rem] md:mt-[10.75rem] md:ml-[12.37rem]">
        <div className="md:w-[31.75rem] md:mt-[3.87rem]">
          <h2 className="text-[2.62rem] md:text-[3.75rem]  md:leading-[4.31rem] capitalize leading-[3rem] tracking-[-0.02em] capitalize">
            Contact your chosen university.
          </h2>
          <p className="text-xs md:text-xl md:leading-[1.25rem] leading-[0.87rem] mt-[1.25rem] md:mt-[1.75rem]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has
          </p>
        </div>
        <div className="w-[14rem] mt-[1.81rem] md:w-[31.75rem] md:mr-[7.62rem] mx-auto">
          <img src="/assets/Icons/Features Page-428/animation.png" alt="" />
        </div>
      </div>

      {/* row2 */}

      <div className="mx-4 mt-[3.87rem] md:flex flex-row-reverse gap-[5.62rem] md:mt-[11.25rem] md:ml-[12.37rem] md:mr-[7.62rem]">
        <div className="md:w-[25.87rem] md:mt-[4.87rem]">
          <h2 className="text-[2.62rem] md:text-[3.75rem]  md:leading-[4.31rem] capitalize leading-[3rem] tracking-[-0.02em] ">
          500+ Prestigious Universities 1,0000+ programs
          </h2>
          <p className="text-xs md:text-xl md:leading-[1.25rem] leading-[0.87rem] mt-[1.25rem] md:mt-[1.75rem]">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
          </p>
        </div>
        <div className="w-[14rem] mt-[1.81rem] md:mt-2 md:w-[24.25rem] mx-auto">
          <img src="/assets/Icons/Features Page-428/Group 44749.png" alt="" />
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default Features;
