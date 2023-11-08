import { useRouter } from "next/router";
import { article, home, photo, more } from "@/public/index";
import Image from "next/image";

const Header = () => {
  const IMAGE_URL =
    "https://wp-boke.work/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_black.9bac3531.png&w=128&q=75";
  const LIST = [
    {
      icon: home,
      name: "首页",
    },
    {
      icon: article,
      name: "文章",
    },
    {
      name: "摄影",
      icon: photo,
    },
    {
      name: "更多",
      icon: more,
    },
  ];

  return (
    <div className="flex w-full  border-b-gray-200 border-b-2 h-[70px] py-0 px-[30px] space-between  items-center">
      <img
        alt="logo"
        width={100}
        height={83}
        src={IMAGE_URL}
        className="w-[100px] h-[83px] mt-[-10px]"
      />
      <div className=" flex flex-1 items-center flex-row-reverse">
        {LIST.map((item, idx) => (
          <div key={idx} className=" flex py-[5px] px-[10px] m-[0 5px]">
            <span className=" text-[18px] mr-[4px]" role="img">
              {<Image src={item.icon} alt="Logo"/>}
            </span>
            <span className=" text-[16px]">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
