import React from "react";
import { NavLink } from "react-router";

function Genre() {
  return (
    <div className=" w-full h-screen bg-blue-50 flex flex-col items-center justify-center ">
      <div className=" flex flex-col items-center justify-center   ">
        <h1 className=" text-5xl font-extrabold my-2 rubik ">The Shoe Game</h1>
        <div className=" flex flex-row items-center justify-center  gap-10 ">
          <div className=" w-2/4 font-medium  my-10 flex flex-col items-center ">
            <h2 className="text-2xl font-semibold mb-2">Pick a Genre</h2>
            <ul className="list-disc px-6 space-y-2">
              <li>
                <strong>Personality:</strong> Delve into what makes you, well,
                you! Questions in this category explore traits, quirks, humor,
                and how you react in various situations.
              </li>
              <li>
                <strong>Food:</strong> From your favorite comfort dish to the
                most adventurous snack, these questions highlight your culinary
                tastes and foodie habits.
              </li>
              <li>
                <strong>Lifestyle:</strong> Covering daily routines, fitness
                habits, and relaxation methods, this genre looks at how you
                navigate and enjoy your everyday life.
              </li>
              <li>
                <strong>Entertainment:</strong> Whether it’s your taste in
                movies, music, or books, questions here reveal your go-to
                choices for unwinding and enjoying life’s fun moments.
              </li>
              <li>
                <strong>Hobbies & Interests:</strong> Focus on the passions and
                creative pursuits that define your leisure time, from sports and
                travel to arts and crafts.
              </li>
              <li>
                <strong>Relationship & Bonding:</strong> Highlighting the
                dynamics of your connection, these questions reflect on shared
                experiences, inside jokes, and how well you know each other.
              </li>
              <li>
                <strong>Travel & Adventure:</strong> Perfect for the
                wanderlust-inspired, this genre includes questions about dream
                destinations, memorable journeys, and spontaneous escapades.
              </li>
            </ul>

            <p className="text-lg mt-6">
              Enjoy the game and have fun exploring your connections in a whole
              new, colorful way!
            </p>
          </div>
          <NavLink to="/genre">
            <button className=" button-53 kabl text-2xl hover:font-extrabold font-bold ">
              <h2 className="  ">Proceed to Game</h2>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Genre;
