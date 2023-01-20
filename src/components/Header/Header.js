
import { useState } from "react";
import { Button, Dropdown } from "antd";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import  React  from 'react';
import { Link } from "react-router-dom";


const items = [
  {
    key: "1",
    label: (
      <div className="flex justify-start py-[1.5rem] pl-[1.5rem] gap-2 items-center w-[306px]">
        <img
          src="/assets/Images/language-orange.svg"
          className="w-[1.5rem]"
          alt=""
        />
        <p
          
          
          className="underline"
        >
          Select a Language
        </p>
      </div>
    ),
  },
  {
    key: "EN",
    label: (
      <p className="hover:text-[#F79009] hover:border-y border-[#F79009] pl-[1.5rem] py-[0.81rem] font-gt-walsheim-pro ">
        English
      </p>
    ),
  },
  {
    key: "TR",
    label: (
      <p className="hover:text-[#F79009] hover:border-y border-[#F79009] pl-[1.5rem] py-[0.81rem] font-gt-walsheim-pro ">
        Turkish
      </p>
    ),
  },
  {
    key: "AR",
    label: (
      <p className="hover:text-[#F79009] hover:border-y border-[#F79009] pl-[1.5rem] py-[0.81rem] font-gt-walsheim-pro ">
        Arabic
      </p>
    ),
  },
  {
    key: "FR",
    label: (
      <p className="hover:text-[#F79009] hover:border-y border-[#F79009] pl-[1.5rem] py-[0.81rem] font-gt-walsheim-pro ">
        French
      </p>
    ),
  },
];

const Header = () => {
  const [selects, setSelects] = useState("EN");
  const [isopen, setIsopen] = useState(false);
  const onClick = ({ key }) => {
    setSelects(key);
  };
  return (
    <header>
      <div
        className={`${
          isopen ? "hidden" : "flex"
        } md:flex bg-[#0f0f0f] text-white mt-6 md:mx-[5.125rem] mx-4 px-8 justify-between items-center rounded-[2.5rem]`}
      >
        <FaBars
          className="md:hidden static w-8 h-8 mx-[0.87rem] cursor-pointer "
          onClick={() => setIsopen(true)}
        />
        <Link to="/">
        <img
          src="/assets/Images/logo.svg"
          className="h-8 my-6 md:ml-10 "
          alt=""
        /></Link>
        <div className="hover:bg-[#FFC400] bg-[#FFD028] w-8 h-8 rounded-full text-black flex justify-center items-center md:hidden">
          <HiDownload />
        </div>

        <ul className="md:flex justify-end hidden w-full md:mr-[3.75rem] gap-[2vw] md:my-4  ml-[1.7rem] font-gt-walsheim-pro font-normal text-[1.11vw]  ">
          <li className="my-4 ">
            <Link to="/features">FEATURES</Link>
          </li>
          <li className="my-4 ">
            <Link to="/privacy">PRIVACY POLICY</Link>
          </li>
          <li className="my-4 ">
            <Link to="/help">HELP CENTER</Link>
          </li>
          <li className="my-4 ">
            <Link to="/security">SECURITY</Link>
          </li>
          <button className="bg-[#FFD028] hover:bg-[#FFC400] text-[#0b0b0b] font-medium border-[0.5px] rounded-[2.62rem] w-[10vw] h-[3.125rem] flex items-center justify-center">
            Free Download
          </button>
        </ul>

        <Dropdown
          className="hidden md:flex justify-center items-center mr-[2.62rem] rounded-[1.5rem] border-yellow-400 w-18  "
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: [selects],
            onClick,
          }}
          placement="bottom"
          arrow
        >
          <Button className="text-white flex gap-1 justify-center ">
            <img src="/assets/Images/language.svg" alt="" />
            {selects}
          </Button>
        </Dropdown>
      </div>
      <div
        className={`${
          isopen ? "absolute" : "hidden"
        } md:hidden bg-[#0f0f0f] text-white w-full left-0 top-0 z-99`}
      >
        <div className="flex justify-between items-center ml-[3.75rem] mt-24 mr-8 ">
          <Link to="/"><img
            src="/assets/Images/logo.svg"
            className="h-8 my-6 md:ml-10 "
            alt=""
          /></Link>
          <FaTimes className="w-8 h-8 cursor-pointer" onClick={()=>setIsopen(false)} />
        </div>

        <ul className=" flex md:flex-row flex-col md:my-4  font-gt-walsheim-pro font-normal text-base ">
          <li className=" border-t border-b border-[#252525] pt-[1.37rem] pb-8  ">
            <Link to="/features" className="ml-[3.75rem] ">
              FEATURES
            </Link>
          </li>
          <li className=" border-t border-b border-[#252525] pt-[1.37rem] pb-8">
            <Link to="/privacy" className="ml-[3.75rem]">
              PRIVACY POLICY
            </Link>
          </li>
          <li className=" border-t border-b border-[#252525] pt-[1.37rem] pb-8">
            <Link to="/help" className="ml-[3.75rem] ">
              HELP CENTER
            </Link>
          </li>
          <li className=" border-t border-b border-[#252525] pt-[1.37rem] pb-8">
            <Link to="/security" className="ml-[3.75rem] ">
              SECURITY
            </Link>
          </li>
          <button className="ml-[3.75rem] mt-8 py-4 px-5 bg-[#FFD028] hover:bg-[#FFC400] text-[#0b0b0b] text-base leading-[18px] font-medium border-[0.5px] rounded-[2.62rem] w-[9.25rem] text-center whitespace-nowrap">
            <span >Free Download</span> 
          </button>
        </ul>
        <div className="flex justify-between ml-[3.75rem] mb-24 mt-[15rem] items-center">
          <div>
          <p className="font-gt-walsheim-pro text-[8px] uppercase leading-[9px] ">
            Copyright @ 2021 All Right <br/> Reserved - Paramount
          </p>
          </div>
          <div>
          <Dropdown
            className="flex mr-[2.62rem] rounded-[1.5rem] border-yellow-400 w-18 font-gt-walsheim-pro"
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: [selects],
              onClick,
            }}
            placement="bottom"
            arrow
          >
            <Button className="text-white flex gap-1 justify-center ">
              <img src="/assets/Images/language.svg" alt="" />{" "}
              {selects}
            </Button>
          </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
