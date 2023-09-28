type props = {
  label: string;
  size: "xs" | "sm" | "lg" | "xl";
  color: "green" | "white";
};

const UserAvatar = ({ label, size, color }: props) => {
  return (
    <div
      className={` ${size === "xs" && "w-10 h-10"} ${
        size === "sm" && "w-16 h-16"
      } ${size === "lg" && "w-20 h-20 text-xl"} ${size === "xl" && "w-24 h-24 text-3xl"} ${
        color === "green" && "bg-primary-100 text-white"
      } ${
        color === "white" && "text-primary-100 bg-white"
      }   rounded-full font-semibold grid place-items-center`}
    >
      {label[0]}
    </div>
  );
};

export default UserAvatar;
