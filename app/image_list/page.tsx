import Image from "next/image";

const ImageList = () => {
  const imgObj = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwJ0L0-vx1_BiVIZ0uHIIpzfYFyz48A-VNIgYIfDmwSkrfM1lBis-&usqp=CAE&s",
    name: "demo",
  };
  const imgs = Array(10).fill(imgObj);
  console.log("imgs", imgObj.img);

  return (
    <div className="pt-[20px] flex flex-1  w-full bg-white dark:bg-slate-800 justify-center ">
      <div className="@screen(min-width: ml){ w-[85%] } @screen (max-width: ml) { w-[90%]} flex justify-between">
        <div className="flex flex-wrap w-full h-full justify-between pt-[70px] items-start content-start place-items-start ">
          {imgs.map((item, idx) => (
            <div
              key={Date.now()}
              className="w-[33%]  h-0 pb-[33.3%]  mb-2 relative m-y-2  "
            >
              {item.img && (
                <img src={`${item.img}`} alt="" className="w-full absolute  " />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageList;
