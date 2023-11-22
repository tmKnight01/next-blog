"use client";

import {
  GoHome,
  GoBook,
  GoImage,
  GoInfinity,
  GoListUnordered,
} from "react-icons/go";
import { useState } from "react";
import { Drawer } from "antd";
import Link from "next/link";
import ThemeSwtich from "@/components/ThemeChange";
import useMobile from "@/hooks/useMobile";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Header = /*@__PURE__*/ () => {
  const { isMobile = null } = useMobile();
  const [isVisible, setIsVisble] = useState(false);

  const ImageVariants = {
    open: { display: "flex", opacity: 1, x: 0 },
    closed: { display: "none", opacity: 0, x: 70 },
  };

  const listVariants = {
    open: {
      display: "flex",
      visibility: "visible",
      transition: {
        staggerChildren: 0.17,
        delayChildren: 0.2,
      },
    },

    closed: {
      display: "none",
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };
  const lisrChildVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },

    closed: {
      x: 50,
      opacity: 0,
      transition: {
        x: { stiffness: 1000 },
      },
    },
  };

  const { theme } = useTheme();

  const IMAGE_URL =
    "https://wp-boke.work/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_black.9bac3531.png&w=128&q=75";
  const LIST = [
    {
      icon: GoHome,
      name: "首页",
      location: "/",
    },
    {
      icon: GoBook,
      name: "文章",
      location: "/article",
    },
    {
      name: "摄影",
      icon: GoImage,
      location: "/image_list",
    },
    {
      name: "更多",
      icon: GoInfinity,
    },
    {
      name: "switch",
      icon: ThemeSwtich,
    },
  ];
  console.log("isMobile", isMobile);
  if (isMobile == null) return null;

  return (
    <>
      <div
        className={`flex w-full fixed z-50  bg-white dark:bg-slate-800 border-b-gray-200 border-b-2 h-[70px] py-0 px-[30px] justify-between items-center`}
      >
        <img
          alt="logo"
          width={100}
          height={83}
          src={IMAGE_URL}
          className="w-[100px] h-[83px] mt-[-10px]"
        />

        <motion.div
          initial={"closed"}
          variants={listVariants as any}
          animate={!isMobile ? "open" : "closed"}
          className=" flex flex-1 items-center flex-row justify-end"
        >
          <>
            {LIST.map((item, idx) => (
              <Link href={item.location || "/"}>
                <motion.div
                  key={item.name}
                  variants={lisrChildVariants}
                  className=" hover:rounded-lg cursor-pointer  hover:bg-white hover:bg-opacity-5 flex py-[5px] px-[10px] m-[0 5px] align-middle"
                >
                  <span
                    className=" flex align-middle items-center text-[18px] mr-[4px]"
                    role="img"
                  >
                    {
                      <item.icon className="text-slate-900 dark:text-header-light" />
                    }
                  </span>
                  <span className=" text-[16px] whitespace-normal text-slate-900 dark:text-header-light font-normal">
                    {item.name !== "switch" && item.name}
                  </span>
                </motion.div>
              </Link>
            ))}
          </>
        </motion.div>

        <motion.div
          onClick={() => setIsVisble((val) => !val)}
          initial={"closed"}
          className="flex h-full  align-middle items-center"
          variants={ImageVariants}
          animate={isMobile ? "open" : "closed"}
        >
          <GoListUnordered
            alt="list"
            className="text-[36px] text-slate-900 dark:text-header-light"
          />
        </motion.div>
      </div>

      <Drawer
        zIndex={99}
        contentWrapperStyle={{
          maxWidth: "300px",
          width: "66vw",
        }}
        style={{
          backgroundColor: theme == "dark" ? "black" : "ButtonHighlight",
        }}
        drawerStyle={{ padding: 0 }}
        open={isVisible && isMobile}
        onClose={() => setIsVisble(false)}
      >
        <div className="h-full w-full flex items-center justify p-[10px] flex-col">
          <div className="flex w-full items-center border-b-slate-400 border-b-2 flex-col ">
            {LIST.map((item, _) => (
              <div
                key={item.name}
                className="flex w-full items-center justify-start py-[15px] px-[30px] text-slate-900 dark:text-header-light font-normal"
              >
                <item.icon className="text-slate-900 dark:text-header-light text-[18px] mr-2" />
                <span className=" text-[16px] whitespace-normal text-slate-900 dark:text-header-light font-normal">
                  {item.name !== "switch" && item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
