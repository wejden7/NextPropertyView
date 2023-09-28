import { BsHouseDoor } from "react-icons/bs";

export const Logo = () => {
  return (
    <div className="p-4">
      <BsHouseDoor className="text-3xl text-primary-900 text-center w-full" />
      <div
        className={`relative overflow-hidden grid  `}
      >
        <h1 className="text-center leading-4 text-xl font-bold text-white">
          Next
        </h1>
        <div className="h-6"></div>
        <h1 className="text-center absolute left-1/2 -translate-x-1/2 bottom-1  text-xl font-bold text-primary-500">
          Property
        </h1>
      </div>
    </div>
  );
};

export const MiniLogo = () => {
  return (
    <div className="p-4">
      <BsHouseDoor className="text-3xl text-primary-900 text-center w-full" />
    </div>
  );
};
