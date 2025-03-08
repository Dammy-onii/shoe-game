import { NavLink } from "react-router";

interface IButton {
  link: string;
  text: string;
}

const ReusableButton = ({ link, text }: IButton) => {
  return (
    <NavLink to={link}>
      <button className=" button-53 kabl text-2xl hover:font-extrabold font-bold mt-6 ">
        <h2 className="  ">{text}</h2>
      </button>
    </NavLink>
  );
};

export default ReusableButton;
