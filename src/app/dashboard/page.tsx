import Link from "next/link";
const Page = () => {
  return (
    <div className="h-[200vh] grid place-items-center ">
      <div className="">
        <Link href="dashboard/new">Dashboard</Link>
      </div>
    </div>
  );
};

export default Page;
