import Link from "next/link";

const Page = () => {
    return (
      <div className="h-[100vh] grid place-items-center ">
        <div className="">
          <Link href="/dashboard">New</Link>
        </div>
      </div>
    );
  };
  
  export default Page;