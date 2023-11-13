const Home = () => {
  return (
    <main className=" pt-[70px] flex h-full w-full bg-white dark:bg-slate-800 justify-center">
      <div className={"w-full  ml:w-3/4  justify-center flex"}>
        <div className="@screen (min-width: ml) { max-w-[800px] }   @screen (max-width: ml) { w-custom-width }   dark:bg-slate-600"></div>
        <div className=" dark:bg-slate-300 hidden ml:flex-1  ml:flex"></div>
      </div>
    </main>
  );
};

export default Home;
