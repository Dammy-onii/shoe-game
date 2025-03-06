import React from "react";
import { NavLink } from "react-router";

function Home() {
  return (
    <div className=" w-full h-screen bg-blue-50 flex items-center justify-center ">
      <div className=" flex flex-col items-center  ">
        <div className=" w-2/4 font-medium  my-10 flex flex-col items-center ">
          <h1 className=" text-5xl font-extrabold my-2 rubik ">
            The Shoe Game
          </h1>
          <p className="text-lg my-2">
            Welcome to the <strong>Shoe Game</strong> – a lighthearted and fun
            way to see how well you know your partner, bestie, or friend! It’s a
            casual game designed for fun moments and friendly banter.
          </p>
          <h2 className="text-2xl font-semibold mb-2">How to Play</h2>
          <ul className="list-disc px-6 space-y-2">
            <li>
              <strong>Choose Your Colors:</strong> Each person picks two
              distinct colors – one representing themselves and the other
              representing the other person.
            </li>
            <li>
              <strong>Answer Fun Questions:</strong> A series of playful
              questions pop up, like “Who’s more likely to start a spontaneous
              adventure?” or “Who’s the biggest foodie?”
            </li>
            <li>
              <strong>Pick a Color:</strong> Both players secretly choose the
              color that best fits the answer.
            </li>
            <li>
              <strong>Reveal and Laugh:</strong> Compare your choices to see how
              in-sync (or hilariously different) you are!
            </li>
          </ul>
          <p className="text-lg mt-6">
            Enjoy the game and have fun exploring your connections in a whole
            new, colorful way!
          </p>
        </div>
        <NavLink to="/genre">
          <button className=" button-53 kabl text-2xl hover:text-3xl font-extrabold ">
            <h2 className="  ">Play</h2>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
