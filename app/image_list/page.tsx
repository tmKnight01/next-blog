import { ResponsType } from "@/constants";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
interface Image {
  url: string;
  img_tag_id: string;
  create_time: string;
  create_by: number;
  id: number;
  img_id: number;
  tag_id: number;
}

interface Result {
  tag_name: string;
  imgs: Image[];
  location: string | null;
  tag_create_time: string;
}

export const getData = async (): Promise<ResponsType<Result>> => {
  try {
    const data = await fetch("http://localhost:3001/imgs?page=1&limit=4", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("data", data);
    return data.json();
  } catch (err) {
    console.log("err", err);
    return {} as any;
  }
};

const ImageList = async () => {
  const imgObj = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwJ0L0-vx1_BiVIZ0uHIIpzfYFyz48A-VNIgYIfDmwSkrfM1lBis-&usqp=CAE&s",
    name: "demo",
  };

  const { data } = await getData();
  dayjs.extend(utc);
  return (
    <div className="pt-[20px] flex flex-1  w-full bg-white dark:bg-slate-800 justify-center ">
      <div className="@screen(min-width: ml){ w-[85%] } @screen (max-width: ml) { w-[90%]} pt-[70px] flex items-center flex-col">
        {data?.result &&
          data.result.map((item, _) => (
            <>
              <div className="w-full max-w-[1400px] px-[2px] py-[14px] flex">
                <div className="flex flex-wrap items-center">
                  <div className="text-[18px] font-[500] pr-[10px] dark:text-stone-100 text-slate-900">
                    {item.tag_name}
                  </div>
                  <div className="rounded-[4px] leading-[16px] text-[12px] px-[4px] mr-[8px] bg-sky-600 border-radius-[4px] ">
                    {item.location}
                  </div>
                  <div className=" text-slate-900 dark:text-stone-100/50 text-[12px]">
                    {dayjs.utc(item.tag_create_time).format("YYYY-MM-DD HH:mm")}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-full h-full justify-start  max-w-[1400px] items-start content-start place-items-start ">
                {item.imgs.map((t, _) => (
                  <div
                    key={Date.now()}
                    className="w-[32%]  h-0 pb-[32%] mr-[5px]   relative  my-1.5"
                  >
                    {t.url && (
                      <img
                        src={`${t.url}`}
                        alt=""
                        className="w-full absolute  h-full "
                      />
                    )}
                  </div>
                ))}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default ImageList;
