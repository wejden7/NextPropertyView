import Header from "@/components/Header";
import NavBar from "@/components/NavBar";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="fixed top-0 z-40 w-full">
      <Header />
      <NavBar />
      </div>
      
      <div className="mt-[7rem]">{children}</div>
      
    </div>
  );
}
