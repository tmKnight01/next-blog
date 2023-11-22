import { ResponsType } from "@/constants/index";

type Article = {
  id: number;
  title: string;
  desc: string;
  user_id: number;
  publish_time: string;
  tag_id: number;
  content: string;
  username: string;
  password: string;
  registration_date: string;
  name: string;
};

export const getData = async (): Promise<ResponsType<Article>> => {
  let result = await fetch("http://localhost:3001/article", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.json();
};
const Article = async () => {
  const data = await getData();

  return (
    <main className=" pt-[70px] flex flex-1 w-full  justify-center">
      <div className={"w-full  h-full ml:w-3/4  justify-center flex"}>
        <div className="@screen (min-width: ml) { max-w-[800px] }   @screen (max-width: ml) { w-custom-width } h-full  dark:bg-slate-600">
          {data.result.map((item, _) => (
            <div
              key={item.title}
              className="w-full h-[230px] px-[16px] py-[34px] border-b-border-color border-b-[1px] "
            >
              <div className="flex flex-col h-full ">
                <div className="w-full h-[35px]  text-slate-900 dark:text-header-light font-normal text-[20px] mb-[20px] whitespace-nowrap ">
                  {item.title}
                </div>
                <div className="w-full flex-1  text-[14px] text-slate-900 dark:text-header-light font-normal line-clamp-3">
                  {item.desc}
                </div>
                <div className="w-full flex pt-[24px] items-center  text-[14px] text-slate-900 dark:text-header-light font-[300]  line-clamp-3">
                  <div>{item.name} | 其他 </div>
                  <div className=" mx-3">
                    {new Date(item.registration_date).toLocaleDateString()}
                  </div>
                  <div className=" flex-1">观看量: xxx</div>
                  <div className="text-[15px]">{item.username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" dark:bg-slate-300  hidden ml:flex-1  ml:flex"></div>
      </div>
    </main>
  );
};

export default Article;
