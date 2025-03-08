import React from "react";

function Viewer() {
  return (
    <div className=" w-full h-screen py-28 bg-blue-50 flex items-start justify-center ">
      <div className=" w-full flex flex-col items-center px-32  ">
        <h1 className=" text-5xl font-extrabold my-2 rubik ">The Shoe Game</h1>
        <div className=" w-full flex flex-col justify-center items-center ">
          <div className="  font-medium  my-2 flex flex-col items-center justify-center ">
            <h2>Genre: Personal</h2>
            <h2>Player 1 and Player 2</h2>
            <h2 className=" kabl text-lg ">Question 1</h2>
          </div>
          <div className=" flex flex-col w-full ">
            <div className=" flex flex-row justify-between items-center border-b-2 gap-10 " >
              <h2>Question</h2>{" "}
              <div className="  flex flex-row gap-32 items-center justify-center">
                <h2>Player 1</h2> <h2>Player 2</h2>
              </div>
            </div>
            <div className=" flex flex-row justify-between items-center border-b-2  ">
              <h2 className=" text-lg text-center my-5 ">
                When you first met who made the first move?
              </h2>
              <div className="  flex flex-row items-center justify-center gap-20 ">
                <div className=" flex flex-col items-center ">
                  <div className=" w-5 h-5 bg-pink-400 rounded-full  "></div>
                  <h2>(Username)</h2>
                </div>

                <div className=" flex flex-col items-center ">
                  <div className=" w-5 h-5 bg-blue-400 rounded-full "></div>
                  <h2>(Username)</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewer;
