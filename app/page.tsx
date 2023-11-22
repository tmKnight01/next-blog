const Home = () => {


   console.log('1111')

  return (
    <main className=" pt-[70px] flex flex-1 h-full w-full  justify-center">
      <div className={"w-full  ml:w-3/4  justify-center flex"}>
        <div className="@screen (min-width: ml) { max-w-[800px] }   @screen (max-width: ml) { w-custom-width }   dark:bg-slate-600"></div>
        <div className=" dark:bg-slate-300 hidden ml:flex-1  ml:flex fixed" ></div>
      </div>
    </main>
  );
};

export default Home;
