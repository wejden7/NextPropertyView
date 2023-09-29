
import UserAvatar from "@/components/Avatar";
import UpdateProfile from "./components/UpdateProfile";


const ModifyTheProfile = () => {

  return (
    <div className="py-4  ">
      <h1 className="text-2xl font-semibold">Modify The Profile</h1>
      <p className=" text-slate-500 pt-4">
        Maintain the confidentiality of your personal data.
        <br /> The information you add here is visible to anyone <br /> who
        views your profile.
      </p>
      <div className=" flex flex-col">
        <label htmlFor="email" className="w-1/2 font-semibold py-4 ">
          Image
        </label>
        <div className="flex items-center gap-4">
          <UserAvatar color="green" label="W" size="lg" />

          <button className="btn">Modify</button>
        </div>
      </div>
      <UpdateProfile/>
    </div>
  );
};

export default ModifyTheProfile;
