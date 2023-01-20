import  React  from 'react';

const Card = () => {
  return (
    <div className="font-gt-walsheim-pro w-[15.87rem] md:w-[20.43rem] h-[11.87rem] md:h-[16rem] bg-[#FFF9E5] border-[.5px] border-[#FFC400] rounded-[1.5rem] my-8 mx-auto py-[1.25rem] px-[0.85rem] md:p-[1.25rem] ">
      <div className="">
        <p className="text-[0.75rem] md:text-lg capitalize leading-4 md:leading-6 text-[#424242]">
          Paramount Students is an excellent educational platform. All of my
          desired universities are finally available in one location, allowing
          me to apply quickly and easily.
        </p>
      </div>
      <div className="flex mt-4 gap-2">
        <img src="/assets/Icons/Home page-428/avatar.svg" alt="" className="w-12 h-12 md:w-[3.75rem] md:h-[3.75rem]" />
        <div className="flex flex-col">
            <h2 className="font-medium text-lg md:xl leading-[1.31rem] md:leading-6 text-[#0B0B0B]capitalize ">Sara Khan</h2>
        <p className="text-[0.75rem] md:text-sm capitalize leading-4 md:leading-6 text-[#424242]">
          Paramount Students User
        </p>
        <div className="flex gap-[0.2rem]">
        <img src="/assets/Icons/Home page-428/star.svg" alt="" className="w-[0.625rem] h-3 md:w-4 md:h-4" />
        <img src="/assets/Icons/Home page-428/star.svg" alt="" className="w-[0.625rem] h-3 md:w-4 md:h-4" />
        <img src="/assets/Icons/Home page-428/star.svg" alt="" className="w-[0.625rem] h-3 md:w-4 md:h-4" />
        </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Card;
