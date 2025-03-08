interface IInputs {
  label: string;
  type: string;
  name: string;
  onChange?: (params: any) => any;
}

const ReusableInput = ({ label, name, type, onChange }: IInputs) => {
  return (
    <div className=" w-full my-2 ">
      <label className="block text-lg font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className=" mt-1 py-2 px-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500  focus:ring-indigo-500 outline-none"
      />
    </div>
  );
};

export default ReusableInput;
