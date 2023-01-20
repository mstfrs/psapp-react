import  React  from 'react';

const Card = () => {
  return (
    <div className="font-gt-walsheim-pro w-[15.87rem] h-[11.87rem] bg-[#FFF9E5] border-[.5px] border-[#FFC400] rounded-[1.5rem] my-8 mx-auto py-[1.25rem] px-[0.85rem]">
      <div className="">
        <p className="text-[0.75rem] capitalize leading-4 text-[#424242]">
          Paramount Students is an excellent educational platform. All of my
          desired universities are finally available in one location, allowing
          me to apply quickly and easily.
        </p>
      </div>
      <div className="flex mt-4 gap-2">
        <img src="/assets/Icons/Home page-428/avatar.svg" alt="" className="w-12 h-12" />
        <div className="flex flex-col">
            <h2 className="font-medium text-lg leading-[1.31rem] text-[#0B0B0B]">Sara Khan</h2>
        <p className="text-[0.75rem] capitalize leading-4 text-[#424242]">
          Paramount Students User
        </p>
        <div className="flex gap-[0.2rem]">
        <img src="/assets/Icons/Home page-428/star.svg" alt="" className="w-[0.625rem] h-3" />
        <img src="/assets/Icons/Home page-428/star.svg" alt="" className="w-[0.625rem] h-3" />
        <img src="/assets/Icons/Home page-428/star.svg" alt="" className="w-[0.625rem] h-3" />
        </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Card;
