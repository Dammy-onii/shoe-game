import React from "react";

function Home() {
  return (
    <div className=" w-full h-screen bg-blue-50 flex items-center justify-center ">
      <div className=" flex flex-col items-center rubik ">
        <h1 className=" text-5xl font-extrabold my-6 ">The Shoe Game</h1>
        <button className=" button-53 kabl text-2xl hover:text-3xl font-extrabold ">
          <h2 className="  ">Play</h2>
        </button>
        <button className=" button-53 kabl text-2xl hover:text-3xl font-extrabold my-4 ">
          <h2 className=" ">Check Other</h2>
        </button>
      </div>
    </div>
  );
}

export default Home;
