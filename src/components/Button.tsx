import { ThreeDots } from "react-loader-spinner";
import { AiFillCaretLeft } from "react-icons/ai";

type propsSubmit = {
  value: string;
  isSubmitting: boolean;
  link?: boolean;
};

const Loader = () => (
  <ThreeDots
    height="20"
    width="40"
    radius="9"
    color="#1c3504"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    visible={true}
  />
);
export const Submit = ({ value, isSubmitting, link }: propsSubmit) => {
  const type = link ? " text-primary-100 " : "btn h-12 w-40";
  return (
    <button type="submit" className={` grid  place-items-center my-4 ${type} `}>
      {!isSubmitting ? value : <Loader />}
    </button>
  );
};

type props = {
  open: boolean;
  clicke: () => void;
};
export const ToggleSidebar = ({ open, clicke }: props) => {
  const rotate = open ? "rotate-0" : "rotate-180";
  return (
    <button
      type="button"
      className={`opacity-0 group-hover:opacity-100 ease-in-out duration-300 transition-opacity bg-primary-500 text-white w-12 h-12 grid place-items-center rounded-full absolute shadow-md -right-6 top-1/2 transform -translate-y-6 ${rotate} `}
      onClick={clicke}
    >
      <AiFillCaretLeft className="text-2xl" />
    </button>
  );
};
