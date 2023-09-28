import { AiFillGoogleCircle } from "react-icons/ai";


export default function AuthLayout({ children }: {
    children: React.ReactNode;
  }) {
  return (
    <main className=" relative grid grid-cols-2 h-base  border-t border-primary-500 divide-x divide-primary-500">
      <div className="flex flex-col items-center gap-4 pt-4">
        <h1 className="text-xl text-primary-500 font-bold">
          Welcome To Next Property{" "}
        </h1>
        <p className="text-xl font-semibold text-center">
          Tunis most popular and most trusted real estate <br /> search
          platform.
        </p>
        <p className="text-sm text-primary-900">
          Choose an option to sign in or create your REALTOR.ca account.
        </p>
        <div className="h-12 border border-black flex items-center bg-white gap-2 w-1/2 pl-2">
          <AiFillGoogleCircle className="text-2xl" />
          <h1 className="font-semibold">Sign in with Google</h1>
        </div>
        <div className="h-12 border border-black flex items-center bg-white gap-2 w-1/2 pl-2">
          <AiFillGoogleCircle className="text-2xl" />
          <h1 className="font-semibold">Sign in with Google</h1>
        </div>
        <div className="h-12 border border-black flex items-center bg-white gap-2 w-1/2 pl-2">
          <AiFillGoogleCircle className="text-2xl" />
          <h1 className="font-semibold">Sign in with Google</h1>
        </div>
        <div className="h-12 border border-black flex items-center bg-white gap-2 w-1/2 pl-2">
          <AiFillGoogleCircle className="text-2xl" />
          <h1 className="font-semibold">Sign in with Google</h1>
        </div>
      </div>
      <div className="bg-white grid h-full  place-items-center">
        {children}
      </div>
      <div className="absolute top-1/2 -translate-y-6 right-1/2 translate-x-6 h-12 w-12 rounded-full bg-primary-500 grid place-items-center text-white font-bold">
        <h1>Or</h1>
      </div>
    </main>
  );
}
